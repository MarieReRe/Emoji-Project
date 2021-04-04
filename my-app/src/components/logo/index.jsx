import React from "react";
import styled from "styled-components";
import EmojiLogo from "../../assets/images/emoji-logo.png";

const LogoWrapper = styled.div`
  display: flex;
  margin-right: 225px;
`;

const LogoImg = styled.div`
  width: 189px;
  height: 95px;
  margin-top: 10px;
  margin-left: 10px;
  img {
    width: 100%;
  }
`;

export function Logo(props) {
  return (
    <LogoWrapper>
      <LogoImg>
        <img class="logo" src={EmojiLogo} alt="Emoji logo" />
      </LogoImg>
    </LogoWrapper>
  );
}