import React, { Component } from "react";
import styled from "styled-components";

import logoWhite from "../../img/logo_white.png";

const ChannelLogoComp = styled.div`
  width: 100%;
  height: 98px;
  margin-top: 46px;

  background-color: #ffffff;
`;
const ChannelLogoLayout = styled.div`
  width: 430px;
  height: 100px;

  background-color: #d20b2f;
  border-radius: 10px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const ChannnelLogoContainer = styled.div`
  position: relative;
  width: 80%;

  margin: 0 auto;
`;
const LogoSpan = styled.div`
  width: 80px;
  height: 20px;
  background-image: url(${logoWhite});
  background-size: cover;
  position: relative;
  background-color: #d20b2f;
  z-index: 10;
  left: 50%;
  top: 12px;
  transform: translateX(-50%);
`;
const Border = styled.div`
  position: absolute;
  top: 23px;
  width: 200px;
  height: 1px;
  background-color: #ffffff;

  }
`;
const Border2 = styled.div`
  position: absolute;
  top: 26px;
  width: 200px;
  height: 1px;
  background-color: #ffffff;
`;
const Border3 = styled.div`
  position: absolute;
  top: 23px;
  right: 0;
  width: 200px;
  height: 1px;
  background-color: #ffffff;
`;
const Border4 = styled.div`
  position: absolute;
  top: 26px;
  right: 0;
  width: 200px;
  height: 1px;
  background-color: #ffffff;
`;
const SocialName = styled.div`
  font-size: 35px;
  margin-top: 15px;
  text-align: center;
  color: #ffffff;
  font-family: "Salsa-Regular";
`;
class ChannelLogo extends Component {
  render() {
    return (
      <ChannelLogoComp>
        <ChannelLogoLayout>
          <ChannnelLogoContainer>
            <Border /> <Border2 />
            <LogoSpan></LogoSpan>
            <Border3 /> <Border4 />
            <SocialName>Our Social Channels</SocialName>
          </ChannnelLogoContainer>
        </ChannelLogoLayout>
      </ChannelLogoComp>
    );
  }
}

export default ChannelLogo;
