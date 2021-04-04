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
  height: 100px;
  display: flex;
  padding: 0 1.5em;
  margin:10px; 
`;

const LeftSection = styled.div`
  display: flex;
  margin-left: 50px;
`;

const RightSection = styled.div`
  display: flex;


`;

export default function Navbar() {
  const isSmallScreen = useMediaQuery({ maxWidth: DeviceSize.tablet });

  return (
    <NavbarContainer>
      <LeftSection>
        <Logo />
        {!isSmallScreen && <NavLinks />}
      </LeftSection>
      <RightSection>
        {!isSmallScreen && <Accessibility />}
        {isSmallScreen && <MobileNavLinks />}
      </RightSection>
    </NavbarContainer>
  );
}