import React, { Component } from "react";
import FooterLayout from "./SubPageFooter/FooterLayout";
import Header from "../MainPage/Header/Header";
import { Link } from "react-router-dom";
import styled from "styled-components";

import recipeBackgroundImg from "./recipeImg/key_visual_recipes_list_1920.png";
import recipeBackgroundSubImg01 from "./recipeImg/key_visual_recipes_list_768.png";
import recipeBackgroundSubImg02 from "./recipeImg/key_visual_recipes_list_360.png";

import { GoSearch } from "react-icons/go";
import { MdCancel } from "react-icons/md";

const RecipeImg = styled.div`
  min-width: 450px;
  height: 340px;
  background-image: url(${recipeBackgroundImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  position: relative;
  z-index: 10;
  top: 73px;

  @media (max-width: 1900px) {
    width: 100%;
  }
  @media (max-width: 1200px) {
    top: 50px;

    background-image: url(${recipeBackgroundSubImg01});
    background-size: cover;
    background-position: top;
  }

  @media (max-width: 768px) {
    background-image: url(${recipeBackgroundSubImg02});

    height: 147px;
  }
`;

const TitleStyle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  position: absolute;
  top: -50px;
  left: 10px;
  filter: blur(30px);
  z-index: -1;
  background-image: linear-gradient(90deg, #fcfcfc, #fcfcfc, #fff);
  background-repeat: no-repeat;
  background-clip: text;
  background-size: 100% 100%;
  @media (max-width: 1200px) {
    top: -15px;
    left: 20px;
    width: 100px;
    height: 100px;
  }
`;
const RecipesTitle = styled.div`
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
    font-size: 35px;
    left: 20px;
  }
`;
const FindBackContainer = styled.div`
  width: 100%;
  height: 300px;
  background-color: #ffffff;
  @media (max-width: 1200px) {
    height: 284px;
  }
  @media (max-width: 768px) {
    height: 260px;
  }
`;
const FindBackContainer02 = styled.div`
  width: 100%;

  background-color: #fbfbfb;
  @media (max-width: 1200px) {
    height: 284px;
  }
  @media (max-width: 768px) {
    height: 260px;
  }
`;
const FindSubBackContainer = styled.div`
  width: 1180px;
  margin: 0px auto;
  @media (max-width: 1200px) {
    width: 98%;
  }
`;
const FindContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-top: 55px;
  top: 50px;
  left: 50%;
  transform: translate(-50%);
  width: 1180px;
  min-width: 450px;
  background-color: #ffffff;

  @media (max-width: 1200px) {
    width: 90%;
  }
  @media (max-width: 768px) {
    margin-top: 0px;
  }
`;
const FindProductContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  height: 62px;
  margin-top: 18px;
  border: 1px solid tomato;
  @media (max-width: 768px) {
    height: 40px;
  }
`;
const FindProductSubContainer = styled.div``;
const FIndProduct = styled.input`
  width: 90%;
  height: 62px;
  position: relative;
  box-sizing: border-box;
  border: none;
  font-size: 20px;
  padding-left: 20px;
  outline: none;
  @media (max-width: 768px) {
    height: 40px;
  }
  -webkit-box-shadow: 0 0 0 100px white inset;

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
      color: #ccc;
      padding-left: 0px;
    }
  }
`;

const Icon = styled.div`
  position: absolute;
  right: 20px;
  margin-top: -12px;
  font-size: 1.4em;
  @media (max-width: 768px) {
    top: 38px;
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
  margin-bottom: 23px;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;
const KeywordLi = styled.li`
  font-size: 16px;
  border: 1px solid #ccc;
  padding: 8px 10px;
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
  height: 2px;
`;

const FindResultContainer = styled.div`
  color: #222;
  background-color: #fbfbfb;
  @media (max-width: 1200px) {
  }
  @media (max-width: 600px) {
    margin-top: 50px;
  }
`;
const FindResultUl = styled.ul`
  display: flex;
  margin-top: 96px;
  margin-bottom: 40px;
  @media (max-width: 768px) {
    margin-top: 16px;
  }
`;
const FindResultLi = styled.li`
  &:nth-child(1) {
    font-size: 2em;
    font-weight: 600;
    @media (max-width: 1200px) {
      margin-top: 10px;
      font-size: 1.4em;
    }
    @media (max-width: 768px) {
      font-size: 1.2em;
    }
  }
  &:nth-child(2) {
    font-size: 1.2em;
    margin-left: 20px;
    margin-top: 1vw;
    color: #ccc;
    @media (max-width: 1200px) {
      font-size: 0.9em;
      margin-left: 10px;
      margin-top: 1.7vw;
    }
    @media (max-width: 768px) {
      font-size: 0.8em;
    }
  }
`;

const ProductListUl = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  background-color: #fbfbfb;
  justify-content: space-between;

  @media (max-width: 1200px) {
    margin: 0 auto;
    width: 100%;
  }
  @media (max-width: 968px) {
  }
`;

const ProductListLi = styled.li`
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;
  width: 20em;
  margin-bottom: 20px;
  background-color: #ffffff;

  @media (max-width: 1200px) {
    width: 30%;
    height: 260px;
  }

  @media (max-width: 968px) {
    height: 200px;
  }
  @media (max-width: 768px) {
    width: 48%;
  }
`;
const RecipesImg = styled.img`
  width: 100%;
  min-height: 150px;
  margin-bottom: 5px;
  @media (max-width: 968px) {
  }
`;

const ProductSubList = styled.span`
  font-size: 1em;
  font-weight: 500;
  text-align: center;
  @media (max-width: 1200px) {
  }
  @media (max-width: 968px) {
    font-size: 0.6em;
  }
`;

class Recipes extends Component {
  RecipeImgList = [
    {
      id: 1,
      path: "./recipeImg/rgb.png",
      title: "?????? ???????????? ?????????",
      category: "#????????????",
    },
    {
      id: 2,
      path: "./recipeImg/ogs.png",
      title: "????????? ???????????? ????????? ?????? ?????????",
      category: "#????????????",
    },
    {
      id: 3,
      path: "./recipeImg/cagw.png",
      title: "???????????? ????????? ???????????? ???",
      category: "#????????????",
    },
    {
      id: 4,
      path: "./recipeImg/ccc.png",
      title: "???????????? ?????? ?????????",
      category: "#?????? ?????????",
    },
    {
      id: 5,
      path: "./recipeImg/speb.png",
      title: "????????? ????????? ????????????",
      category: "#????????????",
    },
    {
      id: 6,
      path: "./recipeImg/cpeb.png",
      title: "????????? ????????? ????????????",
      category: "#????????????",
    },
    {
      id: 7,
      path: "./recipeImg/pgb.png",
      title: "????????? ???????????? ??????",
      category: "#????????????",
    },
    {
      id: 8,
      path: "./recipeImg/frp.png",
      title: "???????????? ?????????",
      category: "#????????????",
    },

    {
      id: 9,
      path: "./recipeImg/pgsr.png",
      title: "????????? ???????????? ????????????",
      category: "#????????????",
    },
    {
      id: 10,
      path: "./recipeImg/gm.png",
      title: "????????????",
      category: "#????????????",
    },
    {
      id: 11,
      path: "./recipeImg/bghc.png",
      title: "???????????? ???????????? ????????????",
      category: "#????????????",
    },
    {
      id: 12,
      path: "./recipeImg/shct.png",
      title: "???????????? ????????? ?????????",
      category: "#????????? ?????????",
    },
    {
      id: 13,
      path: "./recipeImg/acpg.png",
      title: "??????????????? ????????? ????????????",
      category: "#????????????",
    },
    {
      id: 14,
      path: "./recipeImg/edpr.png",
      title: "????????????K ????????????",
      category: "#????????????",
    },
    {
      id: 15,
      path: "./recipeImg/ccgb.png",
      title: "???????????? ?????? ????????????",
      category: "#?????? ?????????",
    },
  ];
  state = {
    searchResult: null,
    searchCategory: null,
    conditionView: 0,
  };

  findProduct;
  settingProudct = () => {
    this.setState({
      searchResult: this.findProduct.value,
    });
  };
  submitProduct = (e) => {
    e.preventDefault();
    this.settingProudct();
  };
  searchProduct = () => {
    this.settingProudct();
    console.log(this.state.searchResult);
  };
  cancelSearch = () => {
    this.findProduct.value = "";
  };

  render() {
    function tempFunc(data) {
      if (this.state.searchResult === null) {
        return data;
      } else if (data.title.indexOf(this.state.searchResult) > -1) {
        return data;
      }
    }
    const recipeItem = this.RecipeImgList.filter((data) => tempFunc(data)).map(
      (value) => {
        return (
          <ProductListLi>
            <RecipesImg src={require(`${value.path}`).default} />
            <ProductSubList>{value.title}</ProductSubList>
          </ProductListLi>
        );
      }
    );
    return (
      <>
        <Header />
        <RecipeImg>
          <RecipesTitle>
            Recipes
            <TitleStyle></TitleStyle>
          </RecipesTitle>
        </RecipeImg>
        <FindBackContainer>
          <FindContainer>
            <form method="post" onSubmit={this.submitProduct}>
              <FindProductContainer>
                <FIndProduct
                  type="text"
                  name="searchKeyword"
                  value={this.state.searchProduct}
                  ref={(ref) => (this.findProduct = ref)}
                  placeholder="??????????????? ?????? ???????????????."
                />

                <FindProductSubContainer>
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
                        pathname: `/Recipes/searchResult`,
                        state: {
                          searchResult: this.state.searchResult,
                        },
                      }}
                    >
                      <GoSearch
                        style={{
                          marginLeft: "10px",
                          color: "#d20b2f",
                          cursor: "pointer",
                        }}
                        onClick={this.searchProduct}
                      />
                    </Link>
                  </Icon>
                </FindProductSubContainer>
              </FindProductContainer>
            </form>

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
                ref={(ref) => (this.Keyword06 = ref)}
                data-name={"#????????????"}
                onClick={this.onClickKeyword}
              >
                #????????????
              </KeywordLi>
            </KeywordUl>
            <KeywordBar />
          </FindContainer>
        </FindBackContainer>
        <FindBackContainer02>
          <FindSubBackContainer>
            <FindResultContainer>
              <FindResultUl>
                <FindResultLi>????????????</FindResultLi>
                <FindResultLi>{recipeItem.length}???</FindResultLi>
              </FindResultUl>
            </FindResultContainer>

            <ProductListUl>{recipeItem}</ProductListUl>
          </FindSubBackContainer>
          <FooterLayout />
        </FindBackContainer02>
      </>
    );
  }
}
export default Recipes;
