import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Login = () => {
  const navigate = useNavigate();

  return (
    <LoginContainer>
      <Logo src={require("../assets/Logo.png")} />
      <Form>
        <Id>
          <Input placeholder={"Email"} />
        </Id>
        <PassWord>
          <Input placeholder={"Password"} />
        </PassWord>
      </Form>

      <ToSignUp onClick={() => navigate("/signUp")}>new Member?</ToSignUp>

      <RedButton>로그인</RedButton>
    </LoginContainer>
  );
};

export const LoginContainer = styled.div`
  padding: 50px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 50px;
`;

export const Logo = styled.img`
  width: 75px;
  height: 50px;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
`;

export const Id = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
  width: 300px;
`;
export const PassWord = styled.div`
  display: flex;

  width: 300px;
`;

export const Input = styled.input`
  border: none;

  color: #555;
  box-sizing: border-box;
  font-size: 18px;
  :focus-visible {
    outline: none;
  }
  padding-left: 10px;
  background-color: #ededed;
  border-radius: 10px;
  width: 300px;
  height: 40px;
  box-shadow: 5px 5px 5px lightgrey;
`;
export const ToSignUp = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px;
  cursor: pointer;
  color: grey;
`;

export const RedButton = styled.button`
  border: none;
  background-color: #c4302b;
  border-radius: 5px;
  width: 300px;
  height: 40px;
  color: white;
  font-size: 15px;
  margin-bottom: 10px;
  cursor: pointer;
`;

export const Button = styled.button`
  background-color: white;
  width: 250px;
  height: 40px;
  cursor: pointer;
  margin-bottom: 10px;
  border-radius: 5px;
`;
export default Login;
