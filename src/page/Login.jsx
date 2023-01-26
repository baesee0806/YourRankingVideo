import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { login } from "../API/logInAndOut";
import { emailRegex, pwRegex } from "../API/util";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailRef = useRef(null);
  const pwRef = useRef(null);

  const matchedEmail = email.match(emailRegex);
  const matchedPw = password.match(pwRegex);

  const validateInputs = () => {
    if (!email) {
      alert("email을 입력해주세요.");
      emailRef.current.focus();
      return true;
    }
    if (!password) {
      alert("password를 입력해주세요.");
      pwRef.current.focus();
      return true;
    }
    if (matchedEmail === null) {
      alert("이메일 형식에 맞게 입력해 주세요.");
      emailRef.current.focus();
      return true;
    }
    if (matchedPw === null) {
      alert("비밀번호는 8자리 이상 영문자, 숫자, 특수문자 조합이어야 합니다.");
      pwRef.current.focus();
      return true;
    }
  };

  const handleSubmit = async () => {
    // 유효성 검사
    if (validateInputs()) {
      return;
    }

    const res = await login(email, password);
    if (!res) {
      alert("로그인 실패");
      return;
    }

    alert("로그인 성공");
    navigate("/");
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

        <ToSignUp onClick={() => navigate("/signUp")}>new Member?</ToSignUp>

        <RedButton onClick={handleSubmit}>로그인</RedButton>
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
