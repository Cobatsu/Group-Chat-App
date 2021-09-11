import {useMutation} from "@apollo/client";
import React from "react";
import styled from "styled-components";
import {REGISTER_MUTATION} from "../GraphqQL/Mutations/AccountMutation";
import {TitleImage} from "./title-image";
import {Link, useHistory} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";

const GeneralWrapper = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 flex-direction: column;
 height: 70%;
 width: 100%;
`;

const InnerWrapper = styled.div`
 display: flex;
 align-items: center;
 flex-direction: column;
`;

const InputBox = styled.input`
 margin-bottom: 10px;
 border-radius: 7px;
 padding: 10px;
 box-sizing: border-box;
 width: 100%;
 border: solid 1.5px #d3d3d3;
`;

const SubmitButton = styled.button`
 outline: none;
 border: none;
 padding: 8px 13px;
 border-radius: 5px;
 background: #7f03fc;
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
`;

const Status = styled.span`
 color: ${props => (props.error ? "red" : "#7f03fc")};
 font-weight: 600;
 font-size: 14px;
 margin-bottom: 18px;
`;

const RegisterPage = props => {
 const history = useHistory();
 const errorState = useSelector((state = {}) => state.error);
 const [register, {data, loading, error}] = useMutation(REGISTER_MUTATION, {
  onCompleted: ({registerUser}) => {
   history.push(`/login/?username=${registerUser.username}`);
  },
  onError: error => {
   console.log(error);
  },
 });
 let userNameRef, passwordRef, email;
 const onRegister = () => {
  register({
   variables: {
    user: {
     username: userNameRef.value || null,
     email: email.value || null,
     password: passwordRef.value || null,
    },
   },
  });
 };
 return (
  <GeneralWrapper>
   <InnerWrapper>
    <TitleImage text='Welcome To The Group-Chat !' />

    {loading ? <Status> Registering... </Status> : null}
    {error ? <Status error> Please Fill All Fields Correctly !</Status> : null}
    <Form>
     <InputBox placeholder='Username' ref={ref => (userNameRef = ref)} />
     <InputBox placeholder='email' ref={ref => (email = ref)} />
     <InputBox
      placeholder='Password'
      ref={ref => (passwordRef = ref)}
      type='password'
     />
     <div
      style={{
       width: "100%",
       display: "flex",
       justifyContent: "space-between",
       alignItems: "center",
       marginTop: 7,
      }}
     >
      <SubmitButton
       onClick={() => {
        onRegister();
       }}
      >
       {" "}
       REGISTER{" "}
      </SubmitButton>
      <Link
       to={{
        pathname: "/login",
       }}
       style={{
        textDecoration: "none",
        fontSize: 13,
        color: "#5d00ba",
        margin: 5,
       }}
      >
       {" "}
       Go to Login Page !{" "}
      </Link>
     </div>
    </Form>
   </InnerWrapper>
  </GeneralWrapper>
 );
};

export default RegisterPage;
