import { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  //user정보
  const [nickName, setNickName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const SignUpSubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:3001/user", { email, password, nickName }).then((response) => {
      console.log(response);
      alert("회원가입 성공!");
      navigate("/login");
    });
  };
  return (
    <LoginContainer>
      <Logo src={require("../assets/Logo.png")} />
      <Form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <Id>
          <Input
            placeholder={"Email"}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </Id>
        <PassWord>
          <Input
            placeholder={"Password"}
            value={password}
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </PassWord>
        <NickName>
          <Input
            placeholder={"Nickname"}
            value={nickName}
            type="nickName"
            onChange={(e) => {
              setNickName(e.target.value);
            }}
          />
        </NickName>

        <RedButton onClick={SignUpSubmit}>회원가입</RedButton>
      </Form>
    </LoginContainer>
  );
};

export const LoginContainer = styled.div`
  padding: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 50px;
`;

export const Logo = styled.img`
  width: 90px;
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
  padding-bottom: 20px;
  width: 300px;
`;

export const NickName = styled.div`
  display: flex;

  width: 300px;
`;

export const Input = styled.input`
  border: none;

export default function SignUp() {
  return <div>SignUp</div>;
}
