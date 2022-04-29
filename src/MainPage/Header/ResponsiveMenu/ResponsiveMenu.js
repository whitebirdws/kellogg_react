import React from "react";
import styled from "styled-components";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

const ResponsiveEntireContainer = styled.div`
  position: fixed;
  z-index: 900;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  display: none;

  @media (max-width: 968px) {
    font-size: 0.8em;
  }
  @media (max-width: 768px) {
    font-size: 0.6em;
  }
`;

const ResponsiveMenuContainer = styled.div`
  position: fixed;
  right: 0;
  width: 30%;
  height: 100%;
  background-color: #fffdfd;
  animation-name: responsiveMenu;
  animation-duration: 0.2s;
  animation-timing-function: linear;
  @keyframes responsiveMenu {
    0% {
      transform: translateX(100%);
    }
    50% {
      transform: translateX(50%);
    }
    75% {
      transform: translateX(25%);
    }
    100% {
      transform: translateX(0%);
    }
  }
`;
const MenuContainer = styled.ul`
  margin-top: 60px;
  margin-left: 10px;
`;
const MenuList = styled.li`
  font-size: 1.2em;
  font-weight: 600;
  font-family: FredokaOne-Regular;
  cursor: pointer;
  margin-bottom: 30px;
`;
const SubMenuContainer = styled.ul`
  display: none;
  position: absolute;
  left: 0;
  width: 100%;
  background-color: #fffcdc;
`;
const SubMenuList = styled.li`
  font-size: 0.7em;
  font-weight: 300;
  margin-left: 10px;
  &:nth-child(1) {
    margin-top: 10px;
    margin-bottom: 30px;
  }
  &:nth-child(2) {
    margin-bottom: 10px;
  }
`;
const AboutSubMenuContainer = styled.ul`
  display: none;
  position: absolute;
  left: 0;
  width: 100%;
  background-color: #fffcdc;
`;
const AboutSubMenuList = styled.li`
  font-size: 0.7em;
  font-weight: 300;
  margin-left: 10px;
  margin-bottom: 30px;
  &:nth-child(1) {
    margin-top: 20px;
  }
`;
const CancelIcon = styled.img`
  position: absolute;
  top: 20px;
  right: 10px;
  width: 20px;
  height: 20px;
  @media (max-width: 768px) {
    width: 15px;
    height: 15px;
  }
`;
class ResponsiveMenu extends React.Component {
  state = {
    brandflag: true,
    aboutflag: true,
  };
  ResponsiveEntireRef;
  brandAndProduct;
  AboutSubMenu;
  menuList;
  init = () => {
    if (this.state.brandflag === false) {
      this.brandAndProduct.style.display = "none";
      this.menuList.style.marginBottom = "30px";
    }
    if (this.state.brandflag === true) {
      this.brandAndProduct.style.display = "block";
      this.menuList.style.marginBottom = "100px";
    }
  };

  initAbout = () => {
    if (this.state.aboutflag === false) {
      this.AboutSubMenu.style.display = "none";
    }
    if (this.state.aboutflag === true) {
      this.AboutSubMenu.style.display = "block";
    }
  };
  cancelView = () => {
    this.ResponsiveEntireRef.style.display = "none";
    this.props.onClickResponsiveView();
  };

  initView = () => {
    if (this.props.resFlag === true) {
      this.ResponsiveEntireRef.style.display = "block";
    }
  };
  componentDidMount() {}

  render() {
    this.initView();
    const onClickBrand = () => {
      this.init();
      this.setState({
        brandflag: !this.state.brandflag,
      });

      console.log(this.state.flag);
    };
    const onClickAbout = () => {
      this.initAbout();
      this.setState({
        aboutflag: !this.state.aboutflag,
      });

      console.log(this.state.aboutflag);
    };

    return (
      <>
        <ResponsiveEntireContainer
          ref={(ref) => (this.ResponsiveEntireRef = ref)}
        >
          <ResponsiveMenuContainer>
            <CancelIcon
              src={require("../../../img/Group1.png").default}
              style={{}}
              onClick={this.cancelView}
            />
            <MenuContainer>
              <MenuList
                onClick={onClickBrand}
                ref={(ref) => (this.menuList = ref)}
              >
                Brand & Products
                <IoIosArrowDown
                  style={{ fontSize: "0.8em", color: " #e53935" }}
                />
                <SubMenuContainer ref={(ref) => (this.brandAndProduct = ref)}>
                  <SubMenuList>
                    <Link to="/BrandAndProducts">Brand & Products</Link>
                  </SubMenuList>
                  <SubMenuList>
                    <Link to="/KelloggonlineShop">Kellogg's Shop</Link>
                  </SubMenuList>
                </SubMenuContainer>
              </MenuList>
              <MenuList>
                <Link to="/Recipes">Recipes</Link>
              </MenuList>
              <MenuList>
                <Link to="/CerealAndNutrition">Cerial & Nutrition </Link>
              </MenuList>
              <MenuList>
                <Link to="/BetterDays">Better Days</Link>
              </MenuList>
              <MenuList onClick={onClickAbout}>
                About Kellogg's
                <IoIosArrowDown
                  style={{ fontSize: "0.8em", color: " #e53935" }}
                />
                <AboutSubMenuContainer ref={(ref) => (this.AboutSubMenu = ref)}>
                  <AboutSubMenuList>
                    <Link to="/AboutUs">회사소개</Link>
                  </AboutSubMenuList>
                  <AboutSubMenuList>회사 연혁</AboutSubMenuList>
                  <AboutSubMenuList>켈로그의 가치</AboutSubMenuList>
                  <AboutSubMenuList>인재 채용</AboutSubMenuList>
                  <AboutSubMenuList>Contact Us</AboutSubMenuList>
                </AboutSubMenuContainer>
              </MenuList>
            </MenuContainer>
          </ResponsiveMenuContainer>
        </ResponsiveEntireContainer>
      </>
    );
  }
}

export default ResponsiveMenu;
