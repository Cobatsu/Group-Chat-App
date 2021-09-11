import React from "react";
import styled from "styled-components";
import {useSelector, useDispatch} from "react-redux";
import {useLazyQuery} from "@apollo/client";
import {LOGIN_QUERY} from "../GraphqQL/Queries/AccountQuery";
import {TitleImage} from "./title-image";
import {Link, useHistory, useLocation} from "react-router-dom";
import queryString from "querystring";

const GeneralWrapper = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 flex-direction: column;
 height: 70%;
 width: 100%;
 flex-shrink: 0;
`;

const InnerWrapper = styled.div`
 display: flex;
 align-items: center;
 flex-direction: column;
 flex-shrink: 0;
`;

const InputBox = styled.input`
 margin-bottom: 10px;
 border-radius: 7px;
 padding: 10px;
 box-sizing: border-box;
 width: 100%;
 border: solid 1.5px #d3d3d3;
 flex-shrink: 0;
`;

const SubmitButton = styled.button`
 outline: none;
 border: none;
 padding: 8px 13px;
 border-radius: 5px;
 background: #7f03fc;
 flex-shrink: 0;
 color: white;
 &:hover {
  cursor: pointer;
 }
`;

const Form = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 width: 58%;
 flex-shrink: 0;
`;

const Status = styled.span`
 color: ${props => (props.error ? "red" : "#7f03fc")};
 font-weight: 600;
 font-size: 14px;
 margin-bottom: 18px;
`;

const LoginPage = props => {
 const dispatch = useDispatch();
 const history = useHistory();
 const location = useLocation();
 const {username} = queryString.parse(location.search.slice(1));
 var userNameRef, passwordRef;

 const [login, {loading, error}] = useLazyQuery(LOGIN_QUERY, {
  onCompleted: ({loginUser}) => {
   localStorage.setItem("token", loginUser.jwt);

   dispatch({type: "SET_USER", payload: loginUser});

   history.push("/main-page");
  },
 });

 const onLogin = () => {
  login({
   variables: {
    user: {
     username: userNameRef.value || null,
     password: passwordRef.value || null,
    },
   },
  });
 };

 return (
  <GeneralWrapper>
   <InnerWrapper>
    <TitleImage text='Welcome To The Group-Chat !' />{" "}
    {username && !loading && !error ? (
     <Status style={{color: "#368B85"}}> You Registered. Lets Sign In !</Status>
    ) : null}
    {loading ? (
     <Status>Redirecting...</Status>
    ) : error ? (
     <Status error> Username or Password Incorrect !</Status>
    ) : null}
    <Form>
     <InputBox
      placeholder='Username'
      ref={ref => (userNameRef = ref)}
      value={username}
     />
     <InputBox
      placeholder='Password'
      ref={ref => (passwordRef = ref)}
      type='password'
     />
     <div
      style={{
       display: "flex",
       width: "100%",
       justifyContent: "space-between",
       alignItems: "center",
       marginTop: 7,
      }}
     >
      <SubmitButton
       onClick={() => {
        onLogin();
       }}
      >
       {" "}
       LOG IN{" "}
      </SubmitButton>
      <Link
       to={{pathname: "/register"}}
       style={{
        textDecoration: "none",
        color: "#5d00ba",
        fontSize: 13,
        margin: 5,
        flexShrink: 0,
       }}
      >
       {" "}
       Let's create an account !{" "}
      </Link>
     </div>
    </Form>
   </InnerWrapper>
  </GeneralWrapper>
 );
};

export default LoginPage;
