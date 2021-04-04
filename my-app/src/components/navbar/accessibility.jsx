import React from "react";
import styled from "styled-components";

const AccessibilityContainer = styled.div`
  display: flex;
  margin-top: 50px;
  margin-left: 50px;
`;

const NavButton = styled.button`
  background: #FFFFFF 0% 0% no-repeat padding-box;
  font: normal normal 600 18px/35px Montserrat;
  color: #E74010;
  border:none;
  border-radius: 5px;
  opacity: 1;
  margin: 5px;
  width: 128px;
  cursor: pointer;
    &:hover {
      box-shadow: 0px 2px 6px #00000029;
      opacity: 1;
  }
`;


export function Accessibility(props) {
  return (
    <AccessibilityContainer>
      <NavButton>Sign Up</NavButton>
      <NavButton>Log in</NavButton>
    </AccessibilityContainer>
  );
}