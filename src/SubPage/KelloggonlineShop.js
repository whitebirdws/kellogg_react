import React from "react";
import FooterLayout from "./SubPageFooter/FooterLayout";
import Header from "../MainPage/Header/Header";

import styled from "styled-components";

import onlineBackgroundImg from "./onlineshopImg/key_visual_shop_1920.png";
import onlineBackgroundImg02 from "./onlineshopImg/key_visual_shop_768.png";
import onlineBackgroundImg03 from "./onlineshopImg/key_visual_shop_360.png";

import kelloggAdvertisementImg from "./onlineshopImg/kelloggs_shop_img_2.png";
import kelloggAdvertisementImg02 from "./onlineshopImg/kelloggs_shop_img_2-2.png";

import onlineAdevertisementImg from "./onlineshopImg/kelloggs_shop_img_1_1920.png";
import onlineAdevertisementImg02 from "./onlineshopImg/kelloggs_shop_img_1_360.png";

const OnlineShopImg = styled.div`
  width: 100%;
  min-width: 450px;
  height: 340px;
  background-image: url(${onlineBackgroundImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  z-index: 2;
  top: 72px;

  @media (max-width: 1900px) {
    width: 100%;
  }
  @media (max-width: 1200px) {
    top: 50px;
    background-image: url(${onlineBackgroundImg02});
    background-size: cover;
    background-position: top;
  }

  @media (max-width: 768px) {
    background-image: url(${onlineBackgroundImg03});

    height: 140px;
  }
`;
const OnlineShopEntireContainer = styled.div`
  width: 100%;
  background-color: #fbfbfb;
  position: relative;
  z-index: 2;
  @media (max-width: 768px) {
    background-color: #ffffff;
  }
`;
const OnlineShopContainer = styled.div`
  position: relative;
  z-index: 3;
  margin: 100px auto;
  width: 1180px;
  background-color: #ffffff;
  @media (max-width: 1200px) {
    width: 100%;
    margin-top: 0;
  }
  @media (max-width: 768px) {
    margin-top: 40px;
    width: 90%;
  }
`;
const OnlineShopContentSection = styled.div`
  margin: 0px auto;
  width: 1000px;
  @media (max-width: 1200px) {
    width: 100%;
  }
`;
const OnlineShopTitle = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 207px;
  box-sizing: border-box;
  background-color: #ffffff;
  font-size: 35px;
  text-align: center;
  font-weight: bold;
  font-family: FredokaOne-Regular;
  padding-top: 66px;

  @media (max-width: 768px) {
    padding-top: 10px;
    height: 80px;
    font-size: 25px;
  }
`;

const OnlineShopDescSction = styled.div`
  width: 100%;
  height: 222px;
  box-sizing: border-box;

  font-size: 1.5em;
  text-align: center;
  padding-top: 45px;
  background-color: #fffceb;
  @media (max-width: 1200px) {
    font-size: 1.3em;
  }
  @media (max-width: 768px) {
    font-size: 0.7em;
    height: 120px;
  }
`;
const ShopContentContainer = styled.div``;
const OnlineShopAdvertisementSection = styled.div`
  width: 100%;
  height: 486px;
  margin-top: 54px;
  background-image: url(${onlineAdevertisementImg});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  @media (max-width: 768px) {
    margin-top: 20px;
    height: 300px;
    background-size: cover;
    background-image: url(${onlineAdevertisementImg02});
    background-position: center;
  }
`;
const OnlineSelectShopSection = styled.div`
  margin-top: 50px;
  @media (max-width: 1200px) {
    margin-top: 30px;
  }
  @media (max-width: 1100px) {
    margin-top: 20px;
  }
`;
const OnlineSelectShopTitle = styled.ul`
  text-align: center;
`;
const OnlineSelectShopTitleview = styled.li`
  &:nth-child(1) {
    font-size: 35px;
    font-weight: bold;
    color: #222;
    @media (max-width: 1200px) {
      font-size: 55px;
    }
    @media (max-width: 968px) {
      font-size: 35px;
    }
    @media (max-width: 768px) {
      font-size: 25px;
    }
  }
  &:nth-child(2) {
    margin-top: 10px;
    font-size: 18px;
    color: #878c91;
    @media (max-width: 768px) {
      font-size: 15px;
    }
  }
`;

const ShopListGroupContainer = styled.div`
  width: 100%;
  background-color: #ffffff;
`;

const ShopListGroupManageContainer = styled.div`
  width: 1000px;
  margin: 50px auto;
  display: flex;
  flex-wrap: wrap;
  background-color: #ffffff;
  @media (max-width: 1200px) {
  }
  @media (max-width: 1100px) {
    width: 100%;
  }
`;
const ShopListGroup = styled.div`
  width: 50%;
  height: 150px;

  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const ImgSection = styled.img`
  width: 196px;
  height: 114px;

  @media (max-width: 1200px) {
    transform: scale(80%);
  }
  @media (max-width: 768px) {
    transform: scale(100%);
    width: 250px;
    height: 155px;
  }
`;
const ShopListGroupText = styled.div`
  box-sizing: border-box;
  position: relative;
  margin-left: 30px;
  width: 220px;
  height: 50px;
  /* background-color: #ccc; */

  @media (max-width: 1100px) {
    margin-left: 5px;
    /* transform: scale(80%); */
  }
`;
const ShopListGroupTitle = styled.span`
  color: #3db4f2;
  font-size: 1em;
`;
const ShopListGroupSubTitle = styled.span`
  font-size: 0.8em;
`;
const KelloggAdvertisementImg = styled.div`
  margin: 0 auto;
  width: 1180px;
  height: 560px;
  background-image: url(${kelloggAdvertisementImg});
  background-size: cover;
  background-repeat: no-repeat;
  @media (max-width: 1200px) {
    width: 95%;
  }
  @media (max-width: 968px) {
    background-image: url(${kelloggAdvertisementImg02});
  }
  @media (max-width: 768px) {
    height: 300px;
  }
`;
const ShopTitleStyle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  position: absolute;
  z-index: -1;
  top: -30px;
  left: 50px;
  filter: blur(30px);

  background-image: linear-gradient(90deg, #fff, #fcfcfc, #fff);
  background-repeat: no-repeat;
  background-clip: text;
  background-size: 100% 100%;
  @media (max-width: 1200px) {
    top: -60px;
    left: 30px;
    width: 200px;
    height: 200px;
  }
  @media (max-width: 768px) {
    opacity: 0.5;
  }
`;
const ShopTitle = styled.div`
  position: absolute;
  left: 100px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 65px;
  font-weight: bold;

  @media (max-width: 1200px) {
    top: 120px;
    font-size: 45px;
  }
  @media (max-width: 968px) {
    font-size: 40px;
  }
  @media (max-width: 768px) {
    font-size: 25px;
    top: 75px;
    left: 20px;
  }
`;

class KelloggonlineShop extends React.Component {
  shopList = [
    {
      id: 1,
      path: "./onlineshopImg/kelloggs_shop_coupang.png",
      title: "[??????]",
      subtitle: "????????? ????????? ???",
    },
    {
      id: 2,
      path: "./onlineshopImg/kelloggs_shop_gsshop.png",
      title: "[Gs shop]",
      subtitle: "????????? ?????? ?????????",
    },
    {
      id: 3,
      path: "./onlineshopImg/kelloggs_shop_gmarket.png",
      title: "[G??????]",
      subtitle: "????????? ????????? ?????? ????????????",
    },
    {
      id: 4,
      path: "./onlineshopImg/kelloggs_shop_interpark.png",
      title: "[????????????]",
      subtitle: "????????? ?????? ?????????",
    },
    {
      id: 5,
      path: "./onlineshopImg/kelloggs_shop_auction.png",
      title: "[??????]",
      subtitle: "????????? ????????? ?????? ?????????",
    },
    {
      id: 6,
      path: "./onlineshopImg/kelloggs_shop_lotteOn.png",
      title: "[?????????]",
      subtitle: "????????? ????????????",
    },
    {
      id: 7,
      path: "./onlineshopImg/kelloggs_shop_11st.png",
      title: "[11??????]",
      subtitle: "????????? ?????? ?????????",
    },
    {
      id: 8,
      path: "./onlineshopImg/kelloggs_shop_kakao.png",
      title: "[????????? ????????????]",
      subtitle: "????????? ?????? ?????????",
    },
    {
      id: 9,
      path: "./onlineshopImg/kelloggs_shop_wemakeprice.png",
      title: "[?????????]",
      subtitle: "????????? ?????? ?????????",
    },
    {
      id: 10,
      path: "./onlineshopImg/kelloggs_shop_cj.png",
      title: "[CJ MALL]]",
      subtitle: "????????? ????????????",
    },
    {
      id: 11,
      path: "./onlineshopImg/kelloggs_shop_tmon.png",
      title: "[??????]",
      subtitle: "????????? ?????? ????????? ????????????",
    },
    {
      id: 12,
      path: "./onlineshopImg/kelloggs_shop_akmall.png",
      title: "[Ak MALL]",
      subtitle: "????????? ????????????",
    },
    {
      id: 13,
      path: "./onlineshopImg/kelloggs_shop_naver.png",
      title: "[????????? ??????]",
      subtitle: "????????? ?????? ?????????",
    },
    {
      id: 14,
      path: "./onlineshopImg/kelloggs_shop_marketkurly.png",
      title: "[????????????]",
      subtitle: "????????? ?????? ?????????",
    },
  ];
  render() {
    const onlineShopImg = this.shopList.map((v) => {
      return (
        <>
          <ShopListGroup>
            <ImgSection src={require(`${v.path}`).default} />
            <ShopListGroupText>
              <ShopListGroupTitle>{v.title}</ShopListGroupTitle>
              <p>
                <ShopListGroupSubTitle>{v.subtitle}</ShopListGroupSubTitle>
              </p>
            </ShopListGroupText>
          </ShopListGroup>
        </>
      );
    });
    return (
      <>
        <Header />
        <OnlineShopImg>
          <ShopTitle>
            Kellogg's<p> Online Shop</p>
            <ShopTitleStyle></ShopTitleStyle>
          </ShopTitle>
        </OnlineShopImg>
        <OnlineShopEntireContainer>
          <OnlineShopContainer>
            <OnlineShopContentSection>
              <OnlineShopTitle>Kellog's Online Shop???????</OnlineShopTitle>

              <OnlineShopDescSction>
                ???????????? ???????????? ?????? ????????? ????????? ?????????{" "}
                <p>
                  ??????, G?????? ??? ????????? ????????? ???????????? ?????? ????????? ?????????
                  ???????????? ????????????.
                </p>
                ?????? ????????? ?????? ?????? ????????? ????????? ??????????????? ?????????
                ???????????????!
              </OnlineShopDescSction>

              <OnlineShopAdvertisementSection />
            </OnlineShopContentSection>
            <ShopContentContainer>
              <OnlineSelectShopSection>
                <OnlineSelectShopTitle>
                  <OnlineSelectShopTitleview>
                    ????????? ????????? ????????? ????????????
                  </OnlineSelectShopTitleview>
                  <OnlineSelectShopTitleview>
                    *??????????????? ??????????????? ???????????? ????????? ?????? ????????????
                    ???????????????.
                  </OnlineSelectShopTitleview>
                </OnlineSelectShopTitle>
                <ShopListGroupContainer>
                  <ShopListGroupManageContainer>
                    {onlineShopImg}
                  </ShopListGroupManageContainer>
                </ShopListGroupContainer>
              </OnlineSelectShopSection>
            </ShopContentContainer>
          </OnlineShopContainer>
          <KelloggAdvertisementImg />
        </OnlineShopEntireContainer>
        <FooterLayout />
      </>
    );
  }
}

export default KelloggonlineShop;
