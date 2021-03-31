import React from 'react';
import styled from "styled-components";

const NavLinksContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  margin: 25px 0 0 0;
`;

const LinksWrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  height: 100%;
  list-style: none;
`;

const LinkItem = styled.li`
  height: 100%;
  padding: 0 1.1em;
  color: #222;
  font-weight: 500;
  font-size: 14px;
  align-items: center;
  justify-content: center;
  display: flex;
  border-top: 2px solid transparent;
  transition: all 220ms ease-in-out;
  &:hover {
    border-top: 2px solid #E74010;
  }
`;

const Link = styled.a`
text-align: left;
font: normal normal medium 18px/35px Monserrat;
letter-spacing: 0px;
color: #000000;
text-transform: uppercase;
opacity: 1;
`;

export default function NavigationLinks(props) {
  return (
    <>
      <NavLinksContainer>
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
        </LinksWrapper>
      </NavLinksContainer>
    </>
  );
}