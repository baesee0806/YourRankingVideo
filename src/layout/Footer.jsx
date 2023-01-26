import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <StyledFooter>
      <FtrContainer>
        <Logo src={require("../assets/Logo.png")} />
        <Ftrtext>쉬게해조: 배성완,조성아,신정근,이희경,김승우</Ftrtext>
        <Ftrtext>ⓒCopyright2023. YourRanking All rights reserved.</Ftrtext>
      </FtrContainer>
    </StyledFooter>
  );
}

export const Logo = styled.img`
  height: 50px;
`;

export const StyledFooter = styled.div`
  height: 110px;
  width: 100%;
  display: flex;
  background-color: #ededed;
`;

export const FtrContainer = styled.div`
  margin-top: 10px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom: 2.5rem;
`;

export const Ftrtext = styled.div``;
export default Footer;
