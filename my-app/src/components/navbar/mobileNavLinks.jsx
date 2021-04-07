import React, { useState } from "react";
import styled from "styled-components";
import { Accessibility } from "./accessibility";
import MenuToggle from "./menuToggle";

const NavLinksContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 10px 0 20px;
`;

const LinksWrapper = styled.ul`
  margin-top: 10px;
  padding: 0 10px  10px;
  width: 100%
  display: flex;
  list-style: none outside;
  background-color: #fff;
  flex-direction: column;
  position: fixed;
  top: 80px;
  right: 0;
  z-index: 99;
`;

const LinkItem = styled.li`
  width: 100%;
  padding: 0 10px  10px;
  color: #222;
  font-weight: 600;
  border-bottom: 1px solid #cfd4d9;
  font-size: 16px;
  display: flex;
  margin-bottom: 10px;
`;

const Link = styled.a`
  font: normal normal 600 18px/35px Montserrat;
  letter-spacing: 0px;
  text-decoration: none;
  color:#E74010;
  margin-left:50px;
  
`;


export default function MobileNavigation(props) {
  const [isOpen, setOpen] = useState(false);

  return (
    <NavLinksContainer>
      <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
      {isOpen && (
        <LinksWrapper>
         <LinkItem>
          <Link href="#">Packs</Link>
        </LinkItem>
        <LinkItem>
          <Link href="#">Artist Collabs</Link>
        </LinkItem>
        <LinkItem>
          <Link href="#">Daily Drops</Link>
        </LinkItem>
        <LinkItem>
          <Link href="#">Marketplace</Link>
        </LinkItem>
        <LinkItem>
          <Link href="#">Emoji® icons</Link>
        </LinkItem>
        <LinkItem>
          <Link href="#">Top Collectors</Link>
        </LinkItem>
        <LinkItem>
          <Link href="#">Bingo</Link>
        </LinkItem>
          <Accessibility />
        </LinksWrapper>
      )}
    </NavLinksContainer>
  );
}