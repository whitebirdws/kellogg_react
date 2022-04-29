import React, { Component } from "react";
import styled from "styled-components";
import { IoIosArrowUp } from "react-icons/io";
import logo from "../../img/logo_white.png";
import icon_foot01 from "../../img/icon_gnb_youtube.png";
import icon_foot02 from "../../img/icon_foot_instagram.png";
import icon_foot03 from "../../img/icon_foot_naver_blog.png";
const Footer = styled.div`
  min-width: 450px;
  height: 70px;
  position: relative;
  /* bottom: -20px; */
  z-index: 1;
  color: white;
  background-color: #d20b2f;
  @media (max-width: 468px) {
  }
`;

const FooterInnerContainer = styled.div`
  width: 1180px;
  margin: 0 auto;

  @media (max-width: 1300px) {
    width: 100%;
  }
`;
const FooterUl = styled.ul`
  display: flex;
  @media (max-width: 1280px) {
    justify-content: center;
  }
`;
const FooterLi = styled.li`
  box-sizing: border-box;
  padding-top: 20px;
  padding-bottom: 20px;
  &:nth-child(1) {
    width: 125px;
    height: 40px;

    @media (max-width: 1180px) {
      margin-left: 20px;
    }
    @media (max-width: 768px) {
      position: relative;
      display: none;
    }
  }
  &:nth-child(2) {
    width: 164px;
    @media (max-width: 1280px) {
      display: none;
    }
  }
  &:nth-child(3) {
    width: 320px;
    margin-top: 10px;
    font-size: 12px;

    box-sizing: border-box;
    @media (max-width: 1180px) {
      text-align: center;
    }
  }
  &:nth-child(4) {
    width: 164px;
    @media (max-width: 1280px) {
      display: none;
    }
  }
  &:nth-child(5) {
    margin-top: 25px;
    width: 25px;
    height: 25px;
    margin-right: 7px;
    background-image: url(${icon_foot01});
    background-size: contain;
    background-repeat: no-repeat;

    @media (max-width: 768px) {
      display: none;
    }
  }
  &:nth-child(6) {
    margin-top: 25px;
    width: 25px;
    height: 25px;
    margin-right: 7px;
    background-image: url(${icon_foot02});
    background-size: contain;
    background-repeat: no-repeat;

    @media (max-width: 768px) {
      display: none;
    }
  }
  &:nth-child(7) {
    margin-top: 25px;
    width: 25px;
    height: 25px;
    margin-right: 7px;
    background-image: url(${icon_foot03});
    background-size: contain;
    background-repeat: no-repeat;

    @media (max-width: 768px) {
      display: none;
    }
  }
  &:nth-child(8) {
    margin-right: 20px;
  }
  &:nth-child(9) {
    @media (max-width: 768px) {
      margin-left: 30vw;
    }
    @media (max-width: 680px) {
      margin-left: 20vw;
    }
    @media (max-width: 580px) {
      margin-left: 10vw;
    }
  }
`;
const LanguagesInput = styled.select`
  margin-top: 5px;
  min-width: 247px;
  min-height: 22px;
  background-color: #d20b2f;
  border: 1px solid#ffffff;
  color: #ffffff;
  @media (max-width: 1180px) {
    display: none;
  }
`;
const Option = styled.option`
  &:disabled {
    color: #fffffe;
    font-weight: bold;
  }
`;

const Img = styled.img``;
class FooterLayout extends Component {
  render() {
    return (
      <Footer>
        <FooterInnerContainer>
          <FooterUl>
            <FooterLi>
              <Img src={require("../../img/logo_white.png").default} />
            </FooterLi>
            <FooterLi></FooterLi>
            <FooterLi>© 2021 KELLOGG Co Ltd ALL RIGHT RESERVED.</FooterLi>
            <FooterLi></FooterLi>
            <FooterLi></FooterLi>
            <FooterLi></FooterLi>
            <FooterLi></FooterLi>
            <FooterLi>
              <LanguagesInput ref={(ref) => (this.selected = ref)}>
                <option value="">Languages</option>
                <Option value="" disabled="disabled">
                  NorthAmerica
                </Option>
                <option value="">&#160; &#160;United states | English</option>
                <option value="">&#160; &#160;United states | Espanol</option>
                <option value=""> &#160; &#160;Canada | English</option>
                <option value=""> &#160; &#160;Canada | Espanol</option>
                <Option value="" disabled="disabled">
                  CentralAmerica
                </Option>
                <option value=""> &#160; &#160;Guatemala | Espanol</option>
              </LanguagesInput>
            </FooterLi>
            <FooterLi>
              <IoIosArrowUp />
            </FooterLi>
          </FooterUl>
        </FooterInnerContainer>
      </Footer>
    );
  }
}

export default FooterLayout;
