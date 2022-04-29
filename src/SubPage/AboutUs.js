import React, { Component } from "react";
import FooterLayout from "./SubPageFooter/FooterLayout";
import Header from "../MainPage/Header/Header";

import styled from "styled-components";

import aboutUslBackgroundImg from "./aboutUsImg/key_visual_about_1920.png";
import aboutUsBackgroundImg02 from "./aboutUsImg/key_visual_about_768.png";
import aboutUsBackgroundImg03 from "./aboutUsImg/key_visual_about_360.png";

const AboutUsSectionImg = styled.div`
  min-width: 450px;
  height: 340px;
  background-image: url(${aboutUslBackgroundImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  position: relative;
  z-index: 10;
  top: 72px;

  @media (max-width: 1200px) {
    top: 50px;
    width: 100%;
    background-image: url(${aboutUsBackgroundImg02});
    background-size: cover;
    background-position: center;
  }
  @media (max-width: 768px) {
    width: 100%;
    height: 140px;
    background-image: url(${aboutUsBackgroundImg03});
    background-size: cover;
    background-position: top;
  }
`;

const TitleStyle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  position: absolute;
  top: 10px;
  left: 10px;
  filter: blur(80px);
  z-index: -1;
  background-image: linear-gradient(90deg, #fcfcfc, #fcfcfc, #fcfcfc);
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
const AboutUsTitle = styled.div`
  position: absolute;
  left: 100px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 65px;
  font-weight: bold;
  color: #fcfcff;
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
const BehindContainer = styled.div`
  top: 600px;
  width: 100%;

  background-color: #fbfbfb;
`;

const AboutUsDescptionContainer = styled.div`
  margin: 50px auto;
  width: 1180px;
  min-width: 450px;
  background-color: #ffffff;
  @media (max-width: 1200px) {
    position: relative;
    width: 90%;
  }
`;
const AboutUsDescriptionTitle = styled.div`
  font-size: 2em;
  width: 234px;
  box-sizing: border-box;
  padding-top: 60px;
  padding-bottom: 20px;
  margin: 0px auto;
  font-weight: bold;

  @media (max-width: 768px) {
    text-align: center;
    font-size: 1.4em;
    width: 100%;
    padding-top: 20px;

    background-color: #fbfbfb;
  }
`;

const AboutUsSubContainer = styled.div`
  width: 100%;
  @media (max-width: 1200px) {
    margin: 0 auto;
    width: 100%;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const AboutUsDescriptionUl = styled.ul`
  width: 80%;
  margin: 0 auto;

  &:after {
    content: "";
    display: table;
    clear: both;
  }
  @media (max-width: 1200px) {
    width: 100%;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

const AboutUsDescriptionList = styled.li`
  &:nth-child(1) {
    width: 100%;
    height: 2px;
    margin-bottom: 20px;
    background-color: #d20b2f;
  }
  &:nth-child(2) {
    font-size: 1em;
    @media (max-width: 768px) {
      font-size: 0.9em;
    }
  }
  &:nth-child(3) {
  }
  &:nth-child(4) {
    font-size: 1.2em;

    text-align: center;
    @media (max-width: 968px) {
      font-size: 0.9em;
    }
  }
  &:nth-child(5) {
    margin-top: 30px;
    width: 100%;
    height: 1px;
    background-color: #ccc;
  }
  &:nth-child(6) {
    margin-top: 30px;
    margin-bottom: 30px;
    text-align: center;
    color: #353535;
    font-size: 1.2em;
    font-weight: bold;
    font-family: "Kanit-Regular";
  }
  &:nth-child(7) {
    font-size: 0.9em;
  }
  &:nth-child(8) {
  }
  &:nth-child(9) {
    font-size: 0.9em;
    text-align: center;
    @media (max-width: 768px) {
      font-size: 0.7em;
    }
  }
  &:nth-child(11) {
    margin-top: 30px;
    margin-bottom: 30px;
    width: 100%;
    height: 1px;
    background-color: #ccc;
  }
  &:nth-child(12) {
    text-align: center;
    font-size: 1.2em;
    font-weight: 600;
    font-family: "Kanit-Regular";
    margin-bottom: 30px;
  }
`;
const AboutUsDescriptionSubUl = styled.ul`
  display: flex;
  text-align: center;
`;
const AboutUsDescriptionSubList = styled.li`
    font-size: 0.9em;
@media (max-width: 768px) {
      font-size: 0.7em;
    }
  }
 
`;
const KellogsVisionSubUl = styled.ul`
  display: flex;
  text-align: center;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const KellogsVisionSubList = styled.li`
  font-size: 0.9em;
  @media (max-width: 768px) {
    font-size: 0.7em;
  }

  &:nth-child(1) {
    display: flex;
    flex-direction: column;
  }
  &:nth-child(2) {
    display: flex;
    flex-direction: column;
    margin-left: 20px;
  }
  &:nth-child(3) {
    display: flex;
    flex-direction: column;

    margin-left: 20px;
  }
`;
const AboutUsImg01 = styled.img`
  width: 100%;
  min-height: 237px;
  @media (max-width: 1900px) {
    min-height: 130px;
  }
`;
const AboutUsImg02 = styled.img`
  width: 100%;
  min-height: 237px;
  margin-top: 30px;
  @media (max-width: 1900px) {
    min-height: 130px;
  }
`;
const AboutUsImg03 = styled.img`
  width: 100%;
  min-height: 237px;
  margin-top: 30px;
  @media (max-width: 1900px) {
    min-height: 130px;
  }
`;
const AboutUsImg04 = styled.img`
  width: 100%;
  min-height: 237px;
  margin-top: 30px;
  @media (max-width: 1900px) {
    min-height: 130px;
  }
`;
const AboutUsImg05 = styled.img`
  width: 100px;
  min-height: 100px;
  margin-top: 30px;
  margin: 0 auto;
`;

const AboutUsSpan = styled.span`
  font-size: 5em;
  color: #d20b2f;
  font-family: Arial, Helvetica, sans-serif;
  @media (max-width: 968px) {
    font-size: 2em;
  }
`;

const Ptitle = styled.p`
  font-size: 2.25em;
  font-family: "Kanit-Regular";
`;
const Pbar = styled.p`
  width: 100%;
  height: 2px;
  background-color: #ccc;
`;
const P1 = styled.p`
  font-size: 1.2em;
`;
const P2 = styled.p`
  font-size: 0.8em;
  color: #878c91;
`;
const P3 = styled.p`
  font-size: 0.8em;
  margin-top: 20px;
  margin-bottom: 30px;
  &:nth-child(3) {
    margin-bottom: 0;
  }
`;

class AboutUs extends Component {
  render() {
    return (
      <>
        <Header />
        <AboutUsSectionImg>
          <AboutUsTitle>
            About & <p> Kellogg's</p>
            <TitleStyle></TitleStyle>
          </AboutUsTitle>
        </AboutUsSectionImg>
        <BehindContainer>
          <AboutUsDescptionContainer>
            <AboutUsDescriptionTitle>회사소개</AboutUsDescriptionTitle>

            <AboutUsSubContainer>
              <AboutUsDescriptionUl>
                <AboutUsDescriptionList></AboutUsDescriptionList>
                <AboutUsDescriptionList>
                  켈로그는 전 세계 180여개국에서 1,800여개의 다양한 제품을 생산
                  및 제공하는 세계 최대의 시리얼 기업으로 2018년 기준으로 135억
                  달러(약 16조) 매출을 달성했습니다. 또한 켈로그는 전 세계
                  두번째 규모의 쿠키, 크래커, 스낵 제조업체입니다. 켈로그는
                  다양한 영양 프로그램도 지속적으로 실시해 식사와 건강에 대한
                  인식을 높여왔습니다.
                  <p style={{ marginTop: "20px", marginBottom: "20px" }}>
                    켈로그의 창업자 W.K. Kellogg는 ‘최고 품질의 제품을 통해
                    고객을 건강하게 하자’라는 철학 아래 회사를 경영했습니다.
                  </p>
                </AboutUsDescriptionList>
                <AboutUsDescriptionList>
                  <AboutUsImg01
                    src={require("./aboutUsImg/about_us_img_1.png").default}
                  />
                </AboutUsDescriptionList>
                <AboutUsDescriptionList>
                  <p style={{ fontWeight: 600, fontFamily: "PlayfairDisplay" }}>
                    <AboutUsSpan>&#8220;</AboutUsSpan>We are a company of
                    dedicated people making quality products
                    <AboutUsSpan>&#8221;</AboutUsSpan>
                    <p> for a healthier world.- W. K. Kellogg</p>
                  </p>

                  <p style={{ fontSize: "0.8em", marginTop: "20px" }}>
                    우리는 품질 좋은 제품을 만들어 더 건강한 세상을 만드는 데에
                    기여하는 헌신적인 사람들의 회사입니다.
                  </p>
                </AboutUsDescriptionList>
                <AboutUsDescriptionList></AboutUsDescriptionList>
                <AboutUsDescriptionList>
                  Kellogg’s Heritage &#38; Mascot
                </AboutUsDescriptionList>
                <AboutUsDescriptionList>
                  켈로그는 115년 동안 창업자의 이념과 역사가 깊은 경영 가치를
                  바탕으로 더 좋은 상품과 서비스로 풍요로운 삶을 만들어나가는데
                  공헌하기 위해 최선을 다하고 있습니다. 특히 영양학적으로 제품을
                  더욱 발전시키기 위해 칼슘과 비타민 첨가, 나트륨과 설탕 함량
                  줄이기, 트랜스지방 제거, 식이섬유 함유량 증가 등 여러 방면에서
                  다양한 노력을 기울여 오고 있습니다.
                </AboutUsDescriptionList>
                <AboutUsDescriptionList>
                  <AboutUsImg02
                    src={
                      require("./aboutUsImg/about_us_mascot_img_1.png").default
                    }
                  />
                </AboutUsDescriptionList>

                <AboutUsDescriptionList> Tony the Tiger</AboutUsDescriptionList>
                <AboutUsDescriptionList>
                  <AboutUsDescriptionSubUl>
                    <AboutUsDescriptionSubList>
                      <AboutUsImg03
                        src={
                          require("./aboutUsImg/about_us_mascot_img_2.png")
                            .default
                        }
                      />
                      Toucan Sam
                    </AboutUsDescriptionSubList>
                    <AboutUsDescriptionSubList>
                      <AboutUsImg04
                        src={
                          require("./aboutUsImg/about_us_mascot_img_3.png")
                            .default
                        }
                      />
                      Toucan Sam
                    </AboutUsDescriptionSubList>
                  </AboutUsDescriptionSubUl>
                </AboutUsDescriptionList>
                <AboutUsDescriptionList></AboutUsDescriptionList>
                <AboutUsDescriptionList>
                  Kellogg’s Vision
                </AboutUsDescriptionList>
                <AboutUsDescriptionList>
                  <KellogsVisionSubUl>
                    <KellogsVisionSubList>
                      <AboutUsImg05
                        src={
                          require("./aboutUsImg/about_us_vision_bg_1.png")
                            .default
                        }
                      />
                      <Ptitle>OUR VISION</Ptitle>

                      <Pbar></Pbar>
                      <P1>
                        A good and just world where people are not just fed but
                        fulfilled
                      </P1>
                      <P2>
                        전세계 사람들에게 단지 식사가 아닌 풍요로움과 만족감을
                        주는 올바르고 좋은 세상을 추구합니다.
                      </P2>
                    </KellogsVisionSubList>
                    <KellogsVisionSubList>
                      <AboutUsImg05
                        src={
                          require("./aboutUsImg/about_us_vision_bg_2.png")
                            .default
                        }
                      />
                      <Ptitle>OUR PURPOSE</Ptitle>

                      <Pbar></Pbar>
                      <P1>
                        Creating better days and a place at the table for
                        everyone through our trusted food brands
                      </P1>
                      <P2>
                        신뢰할 수 있는 우리의 식품 브랜드를 통해 모두의 식탁에서
                        더 나은 미래와 세상을 만들고자 합니
                      </P2>
                    </KellogsVisionSubList>
                    <KellogsVisionSubList>
                      <AboutUsImg05
                        src={
                          require("./aboutUsImg/about_us_vision_bg_3.png")
                            .default
                        }
                      />
                      <Ptitle>KOREA VISION</Ptitle>
                      <Pbar></Pbar>
                      <P1>Be the 1st choice of breakfast, snacks and people</P1>
                      <P2>
                        켈로그는 아침식사, 스낵시장과 사람들을 위한 최상의
                        선택이 되는 회사가 될 것입니다.
                      </P2>
                    </KellogsVisionSubList>
                  </KellogsVisionSubUl>
                </AboutUsDescriptionList>
                <AboutUsDescriptionList>
                  <P3>
                    한국에서는 1981년 3월에 켈로그와 농심의 합작으로
                    농심켈로그(주)가 탄생했습니다. 1983년 9월 안성 공장 설립을
                    시작으로 국내 최초로 구운 옥수수로 만든 플레이크 형태의
                    시리얼인 콘푸레이크를 생산했으며, 이후 매년 꾸준히
                    괄목할만한 성장을 하며 다양한 제품을 선보이고 있습니다.{" "}
                  </P3>
                  <P3>
                    농심켈로그의 주요 제품으로는 ‘콘푸로스트’, ‘첵스초코’, ‘리얼
                    그래놀라’, ‘아몬드 푸레이크’ 등이 있으며, 2012년부터는
                    세계적인 감자칩 브랜드인 ‘프링글스’를 통해 국내 스낵
                    시장에서도 영역을 확장 시키고 있습니다. 또한 2016년부터는
                    ‘켈로그 바’ 제품, 2019년에는 ‘프로틴 그래놀라’, ‘프로틴
                    그래놀라 쉐이크’ 등 제품을 출시하는 등 제품 포트폴리오를
                    확장해 나가고 있습니다.
                  </P3>
                  <P3>
                    켈로그는 ‘더 나은 내일(Better Days)’ 캠페인을 통해 사회공헌
                    활동도 전세계적으로 펼치고 있습니다. 켈로그 글로벌은 14억
                    인분의 시리얼과 스낵을 도움의 손길을 필요로 하는 전세계
                    어린이들과 가정에 제공해오고 있습니다. 농심켈로그는 국내에서
                    세계 식량의 날(10월 16일)을 기념해 매년 세계 식량의 날
                    캠페인을 진행해오며 식품 나눔에 적극적으로 앞장서고
                    있습니다. 또한 오는 2025년까지는 총 30억 인분의 시리얼을
                    전세계 결식아동 및 도움이 필요한 사람들에게 제공할
                    계획입니다.
                  </P3>
                </AboutUsDescriptionList>
              </AboutUsDescriptionUl>
            </AboutUsSubContainer>
          </AboutUsDescptionContainer>
        </BehindContainer>
        <FooterLayout />
      </>
    );
  }
}
export default AboutUs;
