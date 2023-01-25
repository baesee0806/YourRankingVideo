import { useNavigate } from "react-router-dom";
import styled from "styled-components";
const Header = () => {
  const navigate = useNavigate();

  return (
    <StyledHeader>
      <HeaderContainer>
        <Logo onClick={() => navigate("/")} src={require("../assets/Logo.png")} />
        <HeaderBtnBox>
          <HeaderBtn onClick={() => navigate("/my")}>마이페이지</HeaderBtn>
          <HeaderBtn onClick={() => navigate("login")}>LOGIN</HeaderBtn>
          <Tab src={require("../assets/tab.png")}></Tab>
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

export const HeaderBtnBox = styled.div`
  display: flex;
  flex-direction: row;
`;

export const HeaderBtn = styled.div`
  padding: 10px 15px;
  cursor: pointer;
`;

export default Header;
