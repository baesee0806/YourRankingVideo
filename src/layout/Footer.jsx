import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <StyledFooter>
      <FtrContainer>
        <Logo src={require("../assets/Logo.png")} />
        <Ftrtext>쉬게해조: 배성완,조성아,신정근,이희경,김승우</Ftrtext>
        <Ftrtext>ⓒCopyright2023. YourRanking All rights reserved.</Ftrtext>
      </FtrContainer>
    </StyledFooter>
  );
};

export const Logo = styled.img`
  height: 50px;
  cursor: pointer;
`;

export const StyledFooter = styled.div`
  height: 110px;
  width: 100%;
  display: flex;
  margin-bottom: 20px;
  background-color: grey;
`;

export const FtrContainer = styled.div`
  margin-top: 10px;
  width: 2000px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Ftrtext = styled.div``;
export default Footer;
