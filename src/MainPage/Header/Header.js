import React, { PureComponent } from "react";
import ResponsiveMenu from "./ResponsiveMenu/ResponsiveMenu";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { GoThreeBars } from "react-icons/go";

const HeaderContainer = styled.div`
  position: fixed;
  z-index: 100;
  left: 50%;
  width: 100%;
  transform: translateX(-50%);
`;
const Nav = styled.nav`
  width: 100%;
  height: 80px;
  background-color: #ffffff;
  box-shadow: 1px 1px 40px -30px;
`;
const NavContainer = styled.div`
  width: 1300px;

  margin: -10px auto 0;

  font-size: 18px;
  color: #222;
  font-weight: bold;
  padding-top: 20px;

  display: flex;
  justify-content: center;
  @media (max-width: 1300px) {
    width: 100%;
  }
  @media (max-width: 768px) {
  }
`;
const Menu = styled.ul`
  display: flex;
`;
const Img = styled.img`
  width: 100px;
  margin-top: 10px;
  @media (max-width: 1180px) {
    width: 100px;
  }
`;
const ImgIcon = styled.img`
  margin-top: 10px;
  width: 30px;

  @media (max-width: 1180px) {
    margin-top: 16px;
    width: 25px;
  }
`;

const CsrReport = styled.div`
  padding: 2px 10px;
  color: #ffffff;
  background-color: rgba(228, 67, 94, 1);
  border-radius: 10px;
  border: 3px solid rgba(228, 67, 94, 1);
`;
const Li = styled.li`
  cursor: pointer;
  padding-bottom: 20px;
  &:nth-child(1) {
    margin-right: 65px;

    @media (max-width: 1300px) {
      margin-right: 20px;
    }
    @media (max-width: 1180px) {
      margin-right: 800px;
    }
    @media (max-width: 1080px) {
      margin-right: 700px;
    }
    @media (max-width: 980px) {
      margin-right: 600px;
    }
    @media (max-width: 880px) {
      margin-right: 500px;
    }
    @media (max-width: 780px) {
      margin-right: 400px;
    }
    @media (max-width: 680px) {
      margin-right: 300px;
    }
    @media (max-width: 580px) {
      /* position: relative; */
      margin-right: 200px;
    }
  }
  &:nth-child(2) {
    width: 150px;
    @media (max-width: 1300px) {
      margin-right: 20px;
      width: 80px;
    }
    @media (max-width: 1180px) {
      display: none;
    }
  }
  &:nth-child(3) {
    margin-right: 42px;
    margin-top: 14px;
    color: #e53935;
    font-size: 20px;
    position: relative;

    @media (max-width: 1300px) {
      margin-right: 20px;
    }
    @media (max-width: 1180px) {
      display: none;
    }
  }
  &:nth-child(4) {
    margin-top: 14px;
    margin-right: 47px;
    @media (max-width: 1300px) {
      margin-right: 20px;
    }
    @media (max-width: 1180px) {
      display: none;
    }
  }
  &:nth-child(5) {
    margin-right: 100px;
    @media (max-width: 1300px) {
      margin-right: 50px;
    }
    @media (max-width: 1180px) {
      display: none;
    }
  }
  &:nth-child(6) {
    margin-right: 74px;
    @media (max-width: 1300px) {
      margin-right: 50px;
    }
    @media (max-width: 1180px) {
      display: none;
    }
  }
  &:nth-child(7) {
    width: 150px;

    @media (max-width: 1300px) {
      margin-right: 20px;
      width: 80px;
    }
    @media (max-width: 1180px) {
      display: none;
    }
  }
  &:nth-child(8) {
    margin-right: 34px;
    margin-top: 14px;
    color: #e53935;
    font-size: 20px;
    position: relative;

    @media (max-width: 1180px) {
      display: none;
    }
  }

  &:nth-child(9) {
    margin-right: 20px;
    margin-top: 8px;
    @media (max-width: 1180px) {
      display: none;
    }
  }
  &:nth-child(10) {
    margin-right: 5px;
    @media (max-width: 1180px) {
      margin-right: 10px;
    }
  }
  &:nth-child(11) {
    margin-right: 5px;
    @media (max-width: 1180px) {
      margin-right: 10px;
    }
  }
  &:nth-child(12) {
    margin-right: 5px;
    @media (max-width: 1180px) {
      margin-right: 10px;
    }
  }
  &:nth-child(13) {
    display: none;
    @media (max-width: 1180px) {
      display: block;
      margin-top: 12px;
      font-size: 30px;
    }
    @media (max-width: 768px) {
      font-size: 20px;
      margin-top: 15px;
      color: #cccccc;
    }
  }
`;
const BrandSubUl = styled.ul`
  display: none;
  position: absolute;
  width: 150px;
  height: 80px;
  background-color: #ffffff;
  opacity: 0.7;
  padding: 10px;
  font-weight: 400;
  font-family: sans-serif;

  animation-name: slider;
  animation-duration: 0.3s;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
  @keyframes slider {
    10% {
      transform: translateY(3px);
    }
    50% {
      transform: translateY(5px);
    }
    100% {
      transform: translateY(10px);
    }
  }
  @media (max-width: 1300px) {
    width: 100px;
  }
`;
const BrandSubLi = styled.li`
  cursor: pointer;

  &:nth-child(2) {
    margin-top: 10px;
  }
  animation-name: slider;
  animation-duration: 0.3s;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
  @keyframes slider {
    10% {
      transform: translateY(3px);
    }
    50% {
      transform: translateY(5px);
    }
    100% {
      transform: translateY(10px);
    }
  }
`;

const AboutSubUl = styled.ul`
  display: none;
  position: absolute;
  width: 120px;
  height: 230px;
  background-color: #ffffff;
  opacity: 0.7;
  padding: 10px;
  font-weight: 400;
  font-family: sans-serif;
  animation-name: slider;
  animation-duration: 0.3s;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
  @keyframes slider {
    10% {
      transform: translateY(3px);
    }
    50% {
      transform: translateY(5px);
    }
    100% {
      transform: translateY(10px);
    }
  }
  @media (max-width: 1300px) {
    width: 100px;
  }
`;
const AboutSubLi = styled.li`
  cursor: pointer;
  margin-top: 10px;
  animation-name: slider;
  animation-duration: 0.3s;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
  @keyframes slider {
    10% {
      transform: translateY(3px);
    }
    50% {
      transform: translateY(5px);
    }
    100% {
      transform: translateY(10px);
    }
  }
`;

class Header extends PureComponent {
  brandSubUlRef;
  aboutSubUlRef;
  arrow01Ref;
  arrow02Ref;
  responsiveMenuRef;

  state = {
    responsiveFlag: false,
  };
  onMouseOverLi01 = () => {
    this.brandSubUlRef.style.display = "block";
    this.arrow01Ref.style.transform = `rotateX(180deg)`;
    this.arrow01Ref.style.top = "-40px";
  };
  onMouseLeaveLi01 = () => {
    this.arrow01Ref.style.transform = `rotateX(360deg)`;
    this.arrow01Ref.style.top = "0px";
    this.brandSubUlRef.style.display = "none";
  };

  onMouseOverLi02 = () => {
    this.aboutSubUlRef.style.display = "block";
    this.arrow02Ref.style.transform = `rotateX(180deg)`;
    this.arrow02Ref.style.top = "-40px";
  };
  onMouseLeaveLi02 = () => {
    this.arrow02Ref.style.transform = `rotateX(360deg)`;
    this.arrow02Ref.style.top = "0px";
    this.aboutSubUlRef.style.display = "none";
  };

  componentDidMount() {}
  render() {
    this.onClickResponsiveView = () => {
      this.setState({
        responsiveFlag: !this.state.responsiveFlag,
      });
      console.log(this.state.responsiveFlag);
    };
    return (
      <>
        <HeaderContainer>
          <Nav>
            <NavContainer>
              <Menu>
                <Li>
                  <Link to="/">
                    <Img src={require("../../img/logo_1280.png").default} />
                  </Link>
                </Li>

                <Li
                  onMouseOver={this.onMouseOverLi01}
                  onMouseLeave={this.onMouseLeaveLi01}
                >
                  Brand & <p>Products</p>
                  <BrandSubUl ref={(ref) => (this.brandSubUlRef = ref)}>
                    <BrandSubLi>
                      <Link to="/BrandAndProducts">Brand & Products</Link>
                    </BrandSubLi>

                    <BrandSubLi>
                      <Link to="/KelloggonlineShop">
                        <p>Kellogg's Shop</p>
                      </Link>
                    </BrandSubLi>
                  </BrandSubUl>
                </Li>

                <Li
                  ref={(ref) => (this.arrow01Ref = ref)}
                  onMouseOver={this.onMouseOverLi01}
                  onMouseLeave={this.onMouseLeaveLi01}
                >
                  <IoIosArrowDown />
                </Li>
                <Li>
                  <Link to="/Recipes">Recipes</Link>
                </Li>
                <Li>
                  <Link to="/CerealAndNutrition">
                    Cereal & <p>Nutrition</p>
                  </Link>
                </Li>
                <Li>
                  <Link to="/BetterDays">
                    Better<p>Days</p>
                  </Link>
                </Li>
                <Li
                  onMouseOver={this.onMouseOverLi02}
                  onMouseLeave={this.onMouseLeaveLi02}
                >
                  About<p>Kellogg's</p>
                  <AboutSubUl ref={(ref) => (this.aboutSubUlRef = ref)}>
                    <AboutSubLi>
                      <Link to="/AboutUs">회사소개</Link>
                    </AboutSubLi>
                    <AboutSubLi>회사연혁</AboutSubLi>
                    <AboutSubLi>회사소개</AboutSubLi>
                    <AboutSubLi>켈로그의 가치</AboutSubLi>
                    <AboutSubLi>인재 채용</AboutSubLi>
                    <AboutSubLi>Contact Us</AboutSubLi>
                  </AboutSubUl>
                </Li>
                <Li
                  ref={(ref) => (this.arrow02Ref = ref)}
                  onMouseOver={this.onMouseOverLi02}
                  onMouseLeave={this.onMouseLeaveLi02}
                >
                  <IoIosArrowDown />
                </Li>
                <Li>
                  <CsrReport>CSR Report</CsrReport>
                </Li>
                <Li>
                  <ImgIcon src={require("../../img/icon1.png").default} />
                </Li>
                <Li>
                  <ImgIcon src={require("../../img/icon2.png").default} />
                </Li>
                <Li>
                  <ImgIcon src={require("../../img/icon3.png").default} />
                </Li>
                <Li>
                  <GoThreeBars onClick={this.onClickResponsiveView} />
                </Li>
              </Menu>
            </NavContainer>
          </Nav>
        </HeaderContainer>
        <ResponsiveMenu
          resFlag={this.state.responsiveFlag}
          onClickResponsiveView={this.onClickResponsiveView}
        />
      </>
    );
  }
}

export default Header;
