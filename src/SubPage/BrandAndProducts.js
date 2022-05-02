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
      title: "첵스초코 레인보우 ",
      category: "#초코 시리얼",
    },
    {
      id: 2,
      path: "./productImg/cf.png",
      title: "콘푸로스트 ",
      category: "#클래식 시리얼",
    },
    {
      id: 3,
      path: "./productImg/cfl.png",
      title: "콘푸로스트 라이트 슈거",
      category: "#클래식 시리얼",
    },
    {
      id: 4,
      path: "./productImg/amf.png",
      title: "아몬드 푸레이크",
      category: "#클래식 시리얼",
    },
    {
      id: 5,
      path: "./productImg/fr.png",
      title: "후루트링",
      category: "#클래식 시리얼",
    },
    {
      id: 6,
      path: "./productImg/sko.png",
      title: "스페셜K 오리지널",
      category: "#클래식 시리얼",
    },
    {
      id: 7,
      path: "./productImg/cf_cup.png",
      title: "콘푸로스트 컵시리얼",
      category: "#클래식 시리얼",
    },
    {
      id: 8,
      path: "./productImg/af_cup.png",
      title: "아몬드푸레이크 컵시리얼",
      category: "#클래식 시리얼",
    },
    {
      id: 9,
      path: "./productImg/fr_cup.png",
      title: "후루트링 컵시리얼",
      category: "#클래식 시리얼",
    },
    {
      id: 10,
      path: "./productImg/cc_cup.png",
      title: "첵스초코 컵시리얼",
      category: "#초코 시리얼",
    },
    {
      id: 11,
      path: "./productImg/coco.png",
      title: "코코팝스",
      category: "#초코 시리얼",
    },
    {
      id: 12,
      path: "./productImg/hc.png",
      title: "허쉬초코 크런치",
      category: "#초코 시리얼",
    },
    {
      id: 13,
      path: "./productImg/ccm.png",
      title: "첵스초코 마시멜로",
      category: "#초코 시리얼",
    },
    {
      id: 14,
      path: "./productImg/ccc.png",
      title: "첵스초코 쿠키앤크림",
      category: "#초코 시리얼",
    },
    {
      id: 15,
      path: "./productImg/ccs.png",
      title: "첵스초코 스노우 초코볼",
      category: "#초코 시리얼",
    },
    {
      id: 16,
      path: "./productImg/cco.png",
      title: "오곡으로 만든 첵스초코",
      category: "#초코 시리얼",
    },
    {
      id: 17,
      path: "./productImg/pg_blackbean.png",
      title: "프로틴그래놀라",
      subtitle: "미숫가루&검정약콩",
      category: "#그래놀라",
    },
    {
      id: 18,
      path: "./productImg/pg_yogurt.png",
      title: "프로틴그래놀라",
      subtitle: "요거트큐브 & 베리",
      category: "#그래놀라",
    },
    {
      id: 19,
      path: "./productImg/gg.png",
      title: "통귀리 그래놀라",
      category: "#그래놀라",
    },
    {
      id: 20,
      path: "./productImg/hg.png",
      title: "고소한 현미 그래놀라",
      category: "#그래놀라",
    },
    {
      id: 21,
      path: "./productImg/bg.png",
      title: "블루베리 아몬드 그래놀라",
      category: "#그래놀라",
    },
    {
      id: 22,
      path: "./productImg/cag.png",
      title: "크랜베리 아몬드 그래놀라",
      category: "#그래놀라",
    },
    {
      id: 23,
      path: "./productImg/rg.png",
      title: "리얼그래놀라 오리지널",
      category: "#그래놀라",
    },
    {
      id: 24,
      path: "./productImg/pgs_m.png",
      title: "프로틴 그래놀라",
      subtitle: "쉐이크 미숫가루맛",
      category: "#프로틴",
    },
    {
      id: 25,
      path: "./productImg/pgs_c.png",
      title: "프로틴 그래놀라",
      subtitle: "쉐이크 초코맛",
      category: "#프로틴",
    },
    {
      id: 26,
      path: "./productImg/chaw_gcc.png",
      title: "한입 그래놀라 체다치즈맛",
      category: "#그래놀라",
    },
    {
      id: 27,
      path: "./productImg/chaw_ghg.png",
      title: "한입 그래놀라 허브 & 갈릭 맛",
      category: "#그래놀라",
    },
    {
      id: 28,
      path: "./productImg/of.png",
      title: "오곡 푸레이크",
      category: "#곡물이야기",
    },
    {
      id: 29,
      path: "./productImg/hf.png",
      title: "현미 푸레이크",
      category: "#곡물이야기",
    },
    {
      id: 30,
      path: "./productImg/c_bar.png",
      title: "에너지바 K 크런치넛",
      category: "#켈로그바",
    },
    {
      id: 31,
      path: "./productImg/rb_bar.png",
      title: "에너지바 K 레드베리",
      category: "#켈로그바",
    },
    {
      id: 32,
      path: "./productImg/bn_bar.png",
      title: "에너지바 K 베리앤넛바",
      category: "#켈로그바",
    },
    {
      id: 33,
      path: "./productImg/pga_bar.png",
      title: "프로틴바",
      subtitle: "아몬드 & 호박씨",
      category: "#켈로그바",
    },
    {
      id: 34,
      path: "./productImg/ccob.png",
      title: "첵스초코펀 오리지날바",
      subtitle: "",
      category: "#켈로그바",
    },
    {
      id: 35,
      path: "./productImg/ccb.png",
      title: "첵스초코펀 초코바나나바",
      category: "#켈로그바",
    },
    {
      id: 36,
      path: "./productImg/pg_nutty_bar.png",
      title: "프로틴 그래놀라바 고소한 맛",
      category: "#켈로그바",
    },
    {
      id: 37,
      path: "./productImg/pg_apple_bar.png",
      title: "프로틴 그래놀라바 상큼한 사과맛",
      category: "#켈로그바",
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
                  placeholder="제품명으로 검색 가능합니다."
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

            <ProductKeyword>키워드 검색</ProductKeyword>
            <KeywordUl>
              <KeywordLi
                ref={(ref) => (this.Keyword01 = ref)}
                data-name={"#클래식 시리얼"}
                onClick={this.onClickKeyword}
              >
                #클래식 시리얼
              </KeywordLi>
              <KeywordLi
                data-name={"#초코 시리얼"}
                ref={(ref) => (this.Keyword02 = ref)}
                onClick={this.onClickKeyword}
              >
                #초코 시리얼
              </KeywordLi>
              <KeywordLi
                ref={(ref) => (this.Keyword03 = ref)}
                data-name={"#그래놀라"}
                onClick={this.onClickKeyword}
              >
                #그래놀라
              </KeywordLi>
              <KeywordLi
                ref={(ref) => (this.Keyword04 = ref)}
                data-name={"#프로틴"}
                onClick={this.onClickKeyword}
              >
                #프로틴
              </KeywordLi>
              <KeywordLi
                ref={(ref) => (this.Keyword05 = ref)}
                data-name={"#곡물이야기"}
                onClick={this.onClickKeyword}
              >
                #곡물이야기
              </KeywordLi>
              <KeywordLi
                ref={(ref) => (this.Keyword06 = ref)}
                data-name={"#켈로그바"}
                onClick={this.onClickKeyword}
              >
                #켈로그바
              </KeywordLi>
            </KeywordUl>
            <KeywordBar />
            <FindResultUl>
              <FindResultLi>검색결과</FindResultLi>
              <FindResultLi>
                {this.state.conditionView === 0 ? items.length : items02.length}
                건
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
