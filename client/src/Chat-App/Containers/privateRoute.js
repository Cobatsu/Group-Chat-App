import React, {useEffect, useState, useRef} from "react";
import {useLazyQuery} from "@apollo/client";
import {useHistory} from "react-router-dom";
import {CHECK_TOKEN_QUERY} from "../GraphqQL/Queries/AccountQuery";
import {useDispatch} from "react-redux";
import {Route} from "react-router-dom";

const usePrevious = value => {
 const ref = useRef();
 useEffect(() => {
  ref.current = value;
 });
 return ref.current;
};

const PrivateRoute = ({component: Component, ...rest}) => {
 let history = useHistory();
 let dispatch = useDispatch();
 let [loadingC, setLoadingC] = useState(true);
 let prevPath = usePrevious(rest.path);
 let currentPath = rest.path;
 let [check, {data}] = useLazyQuery(CHECK_TOKEN_QUERY, {
  context: {
   history,
  },
  notifyOnNetworkStatusChange: true,
  fetchPolicy: "network-only",

  onCompleted: ({checkToken}) => {
   setLoadingC(false);
   dispatch({
    type: "SET_USER",
    payload: checkToken,
   });
  },
 });

 useEffect(() => {
  check(); // we always get the new fresh user data
 }, [currentPath]); // fetching users when user routes via browser routing

 return (
  <Route
   {...rest}
   component={props =>
    !loadingC && data && prevPath == currentPath ? (
     <Component {...props} />
    ) : null
   }
  />
 );
};

export default PrivateRoute;
