import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";

import { ModalBtnState } from "../recoil/menuAtoms";

const Header = () => {
  const navigate = useNavigate();
  const modalSetHandlering = useSetRecoilState(ModalBtnState);
  const [show, setShow] = useState(false);
  const loggedinuser = JSON.parse(sessionStorage.getItem("currentUser"));
  console.log(loggedinuser);

  useEffect(() => {
    if (loggedinuser == null) {
      setShow(true);
    } else {
      console.log("ddd");
      setShow(false);
    }
  }, [loggedinuser]);
  return (
    <StyledHeader>
      <HeaderContainer>
        <Logo onClick={() => navigate("/")} src={require("../assets/Logo.png")} />

        <HeaderBtnBox>
          {!show ? <MyLogo onClick={() => navigate("/my")} src={require("../assets/mylogo.png")} /> : null}
          {!show ? <Towrite onClick={() => navigate("/postpage")} src={require("../assets/pencil.png")} /> : null}
          {show ? <HeaderBtn onClick={() => navigate("login")}>LOGIN</HeaderBtn> : null}

          <Tab
            onClick={() => {
              modalSetHandlering(true);
            }}
            src={require("../assets/tab.png")}
          />
        </HeaderBtnBox>
      </HeaderContainer>
    </StyledHeader>
  );
};

export const StyledHeader = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #c4302b;
`;

export const HeaderContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding-left: 13px;
`;

export const Logo = styled.img`
  height: 50px;
  cursor: pointer;
`;

export const Tab = styled.img`
  height: 30px;
  cursor: pointer;
  margin-top: 5px;
  margin-left: 5px;
`;
export const MyLogo = styled.img`
  height: 30px;
  cursor: pointer;
  margin-top: 5px;
  margin-left: 5px;
`;

export const Towrite = styled.img`
  height: 30px;
  cursor: pointer;
  margin-top: 5px;
  margin-left: 15px;
  margin-right: 5px;
`;

export const HeaderBtnBox = styled.div`
  display: flex;
  flex-direction: row;
`;

export const HeaderBtn = styled.div`
  padding: 10px 15px;
  cursor: pointer;
`;

export default Header;
