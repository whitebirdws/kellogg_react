import React, { Component } from "react";
import Header from "../MainPage/Header/Header";
import FooterLayout from "./SubPageFooter/FooterLayout";

import { Link } from "react-router-dom";
import styled from "styled-components";

import brandBackgroundImg from "./productImg/brand_backgroundSubImg.png";
import brandBackgroundSubImg01 from "./productImg/key_visual_products_list_768.png";

import { GoSearch } from "react-icons/go";
import { MdCancel } from "react-icons/md";

const BrandSectionImg = styled.div`
  min-width: 450px;
  height: 340px;
  background-image: url(${brandBackgroundImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  position: relative;
  z-index: 10;
  top: 72px;

  @media (max-width: 1900px) {
    width: 100%;
  }
  @media (max-width: 1200px) {
    top: 50px;
    width: 100%;

    background-image: url(${brandBackgroundSubImg01});
    background-size: cover;
    background-position: center;
  }

  @media (max-width: 768px) {
    height: 140px;
  }
`;

const BrandAndProductsContainer = styled.div`
  position: relative;
  width: 100%;
  left: 50%;
  transform: translate(-50%);
`;
const TitleStyle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  position: absolute;
  top: 10px;
  left: 10px;
  filter: blur(30px);
  z-index: -1;
  background-image: linear-gradient(90deg, #fcfcfc, #fcfcfc, #fff);
  background-repeat: no-repeat;
  background-clip: text;
  background-size: 100% 100%;
  @media (max-width: 1200px) {
    top: -5px;
    left: 30px;
    width: 100px;
    height: 100px;
  }
`;
const BrandTitle = styled.div`
  position: absolute;
  left: 100px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 65px;
  font-weight: bold;

  @media (max-width: 1200px) {
    top: 200px;
    font-size: 45px;
  }
  @media (max-width: 968px) {
    top: 180px;
    font-size: 40px;
  }
  @media (max-width: 768px) {
    top: 80px;

    font-size: 25px;
    left: 20px;
  }
`;

const FindContainer = styled.div`
  margin: 100px auto 0;
  width: 1180px;
  min-width: 450px;
  background-color: #ffffff;
  z-index: -100;
  position: relative;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  @media (max-width: 1200px) {
    width: 80%;
    margin-top: 40px;
  }
`;
const FindProductContainer = styled.div``;
const FIndProduct = styled.input`
  width: 100%;
  height: 62px;
  box-sizing: border-box;
  border: 1px solid tomato;
  margin-top: 26px;
  font-size: 20px;
  padding-left: 20px;
  &::placeholder {
    font-size: 20px;
    color: #ccc;
    padding-top: 10px;
    padding-left: 20px;
  }
  @media (max-width: 768px) {
    height: 40px;
    &::placeholder {
      font-size: 16px;

      padding-left: 0px;
    }
  }
`;
const Icon = styled.div`
  position: absolute;
  top: 40px;
  right: 20px;

  font-size: 1.4em;
  @media (max-width: 768px) {
    top: 34px;
    font-size: 1.2em;
  }
`;

const ProductKeyword = styled.div`
  margin-top: 35px;
  font-size: 18px;
  font-weight: 600;
`;
const KeywordUl = styled.ul`
  margin-top: 23px;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

const KeywordLi = styled.li`
  font-size: 16px;
  border: 1px solid #ccc;
  padding: 3px 10px;
  border-radius: 50px;
  cursor: pointer;
  &:hover {
    background-color: #d20b2f;
    border: 1px solid #fff;
    color: white;
  }
`;
const KeywordBar = styled.div`
  width: 100%;
  height: 1px;
  margin-top: 46px;
  background-color: #ccc;
`;
const FindResultUl = styled.ul`
  display: flex;
  margin-top: 96px;

  @media (max-width: 600px) {
    margin-top: 50px;
    transform: scale(70%);
  }
`;
const FindResultLi = styled.li`
  &:nth-child(1) {
    font-size: 34px;
    font-weight: 600;
  }
  &:nth-child(2) {
    margin-left: 20px;
    margin-top: 20px;
    color: #ccc;
  }
`;
const ProductListUl = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const ProductListLi = styled.li`
  display: flex;
  flex-direction: column;
  margin-left: 3%;
  width: 30%;
  min-width: 210px;
  /* min-height: 210px; */
  margin-bottom: 20px;
  @media (max-width: 1200px) {
    width: 50%;
    margin-left: 0%;
  }

  @media (max-width: 600px) {
    width: 50%;
    height: 260px;
    margin-bottom: 30px;
  }
`;
const ProductSubList = styled.span`
  font-size: 18px;
  text-align: center;
`;
const Img = styled.img`
  width: 100%;
  min-height: 210px;
`;

class BrandAndProducts extends Component {
  ImgList = [
    {
      id: 1,
      path: "./productImg/cc_rb.png",
      title: "???????????? ???????????? ",
      category: "#?????? ?????????",
    },
    {
      id: 2,
      path: "./productImg/cf.png",
      title: "??????????????? ",
      category: "#????????? ?????????",
    },
    {
      id: 3,
      path: "./productImg/cfl.png",
      title: "??????????????? ????????? ??????",
      category: "#????????? ?????????",
    },
    {
      id: 4,
      path: "./productImg/amf.png",
      title: "????????? ????????????",
      category: "#????????? ?????????",
    },
    {
      id: 5,
      path: "./productImg/fr.png",
      title: "????????????",
      category: "#????????? ?????????",
    },
    {
      id: 6,
      path: "./productImg/sko.png",
      title: "?????????K ????????????",
      category: "#????????? ?????????",
    },
    {
      id: 7,
      path: "./productImg/cf_cup.png",
      title: "??????????????? ????????????",
      category: "#????????? ?????????",
    },
    {
      id: 8,
      path: "./productImg/af_cup.png",
      title: "????????????????????? ????????????",
      category: "#????????? ?????????",
    },
    {
      id: 9,
      path: "./productImg/fr_cup.png",
      title: "???????????? ????????????",
      category: "#????????? ?????????",
    },
    {
      id: 10,
      path: "./productImg/cc_cup.png",
      title: "???????????? ????????????",
      category: "#?????? ?????????",
    },
    {
      id: 11,
      path: "./productImg/coco.png",
      title: "????????????",
      category: "#?????? ?????????",
    },
    {
      id: 12,
      path: "./productImg/hc.png",
      title: "???????????? ?????????",
      category: "#?????? ?????????",
    },
    {
      id: 13,
      path: "./productImg/ccm.png",
      title: "???????????? ????????????",
      category: "#?????? ?????????",
    },
    {
      id: 14,
      path: "./productImg/ccc.png",
      title: "???????????? ???????????????",
      category: "#?????? ?????????",
    },
    {
      id: 15,
      path: "./productImg/ccs.png",
      title: "???????????? ????????? ?????????",
      category: "#?????? ?????????",
    },
    {
      id: 16,
      path: "./productImg/cco.png",
      title: "???????????? ?????? ????????????",
      category: "#?????? ?????????",
    },
    {
      id: 17,
      path: "./productImg/pg_blackbean.png",
      title: "?????????????????????",
      subtitle: "????????????&????????????",
      category: "#????????????",
    },
    {
      id: 18,
      path: "./productImg/pg_yogurt.png",
      title: "?????????????????????",
      subtitle: "??????????????? & ??????",
      category: "#????????????",
    },
    {
      id: 19,
      path: "./productImg/gg.png",
      title: "????????? ????????????",
      category: "#????????????",
    },
    {
      id: 20,
      path: "./productImg/hg.png",
      title: "????????? ?????? ????????????",
      category: "#????????????",
    },
    {
      id: 21,
      path: "./productImg/bg.png",
      title: "???????????? ????????? ????????????",
      category: "#????????????",
    },
    {
      id: 22,
      path: "./productImg/cag.png",
      title: "???????????? ????????? ????????????",
      category: "#????????????",
    },
    {
      id: 23,
      path: "./productImg/rg.png",
      title: "?????????????????? ????????????",
      category: "#????????????",
    },
    {
      id: 24,
      path: "./productImg/pgs_m.png",
      title: "????????? ????????????",
      subtitle: "????????? ???????????????",
      category: "#?????????",
    },
    {
      id: 25,
      path: "./productImg/pgs_c.png",
      title: "????????? ????????????",
      subtitle: "????????? ?????????",
      category: "#?????????",
    },
    {
      id: 26,
      path: "./productImg/chaw_gcc.png",
      title: "?????? ???????????? ???????????????",
      category: "#????????????",
    },
    {
      id: 27,
      path: "./productImg/chaw_ghg.png",
      title: "?????? ???????????? ?????? & ?????? ???",
      category: "#????????????",
    },
    {
      id: 28,
      path: "./productImg/of.png",
      title: "?????? ????????????",
      category: "#???????????????",
    },
    {
      id: 29,
      path: "./productImg/hf.png",
      title: "?????? ????????????",
      category: "#???????????????",
    },
    {
      id: 30,
      path: "./productImg/c_bar.png",
      title: "???????????? K ????????????",
      category: "#????????????",
    },
    {
      id: 31,
      path: "./productImg/rb_bar.png",
      title: "???????????? K ????????????",
      category: "#????????????",
    },
    {
      id: 32,
      path: "./productImg/bn_bar.png",
      title: "???????????? K ???????????????",
      category: "#????????????",
    },
    {
      id: 33,
      path: "./productImg/pga_bar.png",
      title: "????????????",
      subtitle: "????????? & ?????????",
      category: "#????????????",
    },
    {
      id: 34,
      path: "./productImg/ccob.png",
      title: "??????????????? ???????????????",
      subtitle: "",
      category: "#????????????",
    },
    {
      id: 35,
      path: "./productImg/ccb.png",
      title: "??????????????? ??????????????????",
      category: "#????????????",
    },
    {
      id: 36,
      path: "./productImg/pg_nutty_bar.png",
      title: "????????? ??????????????? ????????? ???",
      category: "#????????????",
    },
    {
      id: 37,
      path: "./productImg/pg_apple_bar.png",
      title: "????????? ??????????????? ????????? ?????????",
      category: "#????????????",
    },
  ];
  state = {
    searchResult: null,
    searchCategory: null,
    conditionView: 0,
  };

  findProduct;

  onClickKeyword = (e) => {
    const dataName = e.target.getAttribute("data-name");

    this.setState({
      searchCategory: dataName,
      conditionView: 1,
    });
  };

  settingProudct = () => {
    this.setState(() => {
      return {
        searchResult: this.findProduct.value,
        conditionView: 0,
      };
    });
  };
  submitProduct = (e) => {
    e.preventDefault();
    this.settingProudct();
  };
  searchProduct = () => {
    this.settingProudct();
  };
  cancelSearch = () => {
    this.findProduct.value = "";
  };

  render() {
    function tempFunc(data) {
      if (this.state.searchResult == null) {
        return data;
      } else if (data.title.indexOf(this.state.searchResult) > -1) {
        return data;
      }
    }
    const items = this.ImgList.filter((data) => tempFunc(data)).map((value) => {
      return (
        <ProductListLi key={value.id}>
          <Img src={require(`${value.path}`).default} />
          <ProductSubList>
            {value.title}
            <p>{value.subtitle}</p>
          </ProductSubList>
        </ProductListLi>
      );
    });
    function tempFunc2(data) {
      if (this.state.searchCategory == null) {
        return data;
      } else if (data.category.indexOf(this.state.searchCategory) > -1) {
        return data;
      }
    }
    const items02 = this.ImgList.filter((data) => tempFunc2(data)).map(
      (value) => {
        return (
          <ProductListLi key={value.id}>
            <Img src={require(`${value.path}`).default} />
            <ProductSubList>
              {value.title}
              <p>{value.subtitle}</p>
            </ProductSubList>
          </ProductListLi>
        );
      }
    );

    return (
      <>
        <Header />
        <BrandSectionImg>
          <BrandTitle>
            Brand & <p> Products</p>
            <TitleStyle></TitleStyle>
          </BrandTitle>
        </BrandSectionImg>
        <BrandAndProductsContainer ref={(ref) => (this.mainSlider = ref)}>
          <FindContainer>
            <FindProductContainer>
              <form method="post" onSubmit={this.submitProduct}>
                <FIndProduct
                  type="text"
                  name="searchKeyword"
                  value={this.state.searchProduct}
                  ref={(ref) => (this.findProduct = ref)}
                  placeholder="??????????????? ?????? ???????????????."
                />
                <Icon>
                  <MdCancel
                    style={{
                      color: "ccc",
                      cursor: "pointer",
                    }}
                    onClick={this.cancelSearch}
                  />
                  <Link
                    to={{
                      pathname: `/BrandAndProducts/searchResult`,
                      state: {
                        searchResult: this.state.searchResult,
                      },
                    }}
                  >
                    <GoSearch
                      onClick={this.searchProduct}
                      style={{
                        marginLeft: "10px",
                        color: "#d20b2f",
                        cursor: "pointer",
                      }}
                    />
                  </Link>
                </Icon>
              </form>
            </FindProductContainer>

            <ProductKeyword>????????? ??????</ProductKeyword>
            <KeywordUl>
              <KeywordLi
                ref={(ref) => (this.Keyword01 = ref)}
                data-name={"#????????? ?????????"}
                onClick={this.onClickKeyword}
              >
                #????????? ?????????
              </KeywordLi>
              <KeywordLi
                data-name={"#?????? ?????????"}
                ref={(ref) => (this.Keyword02 = ref)}
                onClick={this.onClickKeyword}
              >
                #?????? ?????????
              </KeywordLi>
              <KeywordLi
                ref={(ref) => (this.Keyword03 = ref)}
                data-name={"#????????????"}
                onClick={this.onClickKeyword}
              >
                #????????????
              </KeywordLi>
              <KeywordLi
                ref={(ref) => (this.Keyword04 = ref)}
                data-name={"#?????????"}
                onClick={this.onClickKeyword}
              >
                #?????????
              </KeywordLi>
              <KeywordLi
                ref={(ref) => (this.Keyword05 = ref)}
                data-name={"#???????????????"}
                onClick={this.onClickKeyword}
              >
                #???????????????
              </KeywordLi>
              <KeywordLi
                ref={(ref) => (this.Keyword06 = ref)}
                data-name={"#????????????"}
                onClick={this.onClickKeyword}
              >
                #????????????
              </KeywordLi>
            </KeywordUl>
            <KeywordBar />
            <FindResultUl>
              <FindResultLi>????????????</FindResultLi>
              <FindResultLi>
                {this.state.conditionView === 0 ? items.length : items02.length}
                ???
              </FindResultLi>
            </FindResultUl>
            <ProductListUl>
              {this.state.conditionView === 0 ? items : items02}
            </ProductListUl>
          </FindContainer>
          <FooterLayout />
        </BrandAndProductsContainer>
      </>
    );
  }
}
export default BrandAndProducts;
