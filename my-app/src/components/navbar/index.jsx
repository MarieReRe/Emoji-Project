import React from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import { Logo } from "../logo";
import { Accessibility } from "./accessibility";
import NavLinks from "./navLinks";
import { DeviceSize } from "../responsive";
import MobileNavLinks from "./mobileNavLinks";

const NavbarContainer = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  padding: 0 1.5em;
`;

const LeftSection = styled.div`
  display: flex;
`;

const MiddleSection = styled.div`
  display: flex;
  flex: 2;
  height: 100%;
  justify-content: center;
`;

const RightSection = styled.div`
  display: flex;
`;

export default function Navbar() {
  const isSmallScreen = useMediaQuery({ maxWidth: DeviceSize.tablet});

  return (
    <NavbarContainer>
      <LeftSection>
        <Logo />
      </LeftSection>
      <MiddleSection>{!isSmallScreen && <NavLinks />}</MiddleSection>
      <RightSection>
        {!isSmallScreen && <Accessibility />}
        {isSmallScreen && <MobileNavLinks />}
      </RightSection>
    </NavbarContainer>
  );
}