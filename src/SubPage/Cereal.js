import React, { Component } from "react";
import FooterLayout from "./SubPageFooter/FooterLayout";
import Header from "../MainPage/Header/Header";

import styled from "styled-components";

import cerialBackgroundImg from "./cerealImg/key_visual_cereal_nutrition_1920.png";
import cerialBackgroundImg02 from "./cerealImg/key_visual_cereal_nutrition_768.png";
import nutrionImg01 from "./cerealImg/cereal_nutrition_img_1.png";

const CerialSectionImg = styled.div`
  min-width: 450px;
  height: 340px;
  background-image: url(${cerialBackgroundImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  position: relative;
  z-index: 10;
  top: 72px;

  @media (max-width: 1200px) {
    top: 50px;
    width: 100%;
    background-image: url(${cerialBackgroundImg02});
    background-size: cover;
    background-position: center;
  }

  @media (max-width: 768px) {
    height: 140px;
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
const CerealTitle = styled.div`
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
const CerealContainer = styled.div`
  margin: 100px auto 0;
  width: 1180px;
  min-width: 430px;
  background-color: #fbfbfb;
  padding-top: 70px;

  @media (max-width: 1200px) {
    width: 80%;
    margin-top: 80px;
    padding-top: 0px;
  }
  @media (max-width: 768px) {
    margin-top: 65px;
  }
`;
const CeralMenuTitle = styled.div`
  font-size: 2em;
  font-weight: bold;
  @media (max-width: 1200px) {
    display: none;
  }
`;

const CerealMenu = styled.ul`
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  @media (max-width: 1200px) {
    margin-top: 0px;
  }
`;
const CerealMenuList = styled.li`
  box-sizing: border-box;
  text-align: center;
  padding: 19px;
  width: 25%;
  background-color: #ffffff;
  border: 1px solid#ccc;
  font-size: 1em;
  font-weight: 500;
  &:nth-child(1) {
    background-color: #d20b2f;
    color: #ffffff;
    border-right: 0;
  }
  &:nth-child(2) {
    border-right: 0;
  }
  &:nth-child(3) {
    border-right: 0;
  }

  @media (max-width: 968px) {
    font-size: 0.7em;
  }
  @media (max-width: 768px) {
    padding: 5px;
    &:nth-child(1) {
      width: 50%;
      border-bottom: 0;
    }
    &:nth-child(2) {
      width: 50%;
      border: 1px solid#ccc;
      border-bottom: 0;
    }
    &:nth-child(3) {
      width: 50%;
    }
    &:nth-child(4) {
      width: 50%;
    }
  }
`;
const CerealDescptionContainer = styled.div`
  margin: 50px auto;
  width: 1180px;
  min-width: 450px;
  background-color: #ffffff;
  @media (max-width: 1200px) {
    position: relative;
    width: 90%;
  }
`;
const CerealDescriptionTitle = styled.div`
  font-size: 2em;
  width: 234px;
  box-sizing: border-box;
  padding-top: 60px;
  padding-bottom: 60px;
  margin: 0px auto;
  font-weight: bold;

  @media (max-width: 768px) {
    text-align: center;
    font-size: 1.2em;
    width: 100%;
    padding-top: 0px;
    padding-bottom: 30px;
    background-color: #fbfbfb;
  }
`;
const CerealDescriptionSubDesc = styled.div`
  padding: 60px;
  text-align: center;
  background-color: #fffceb;
`;
const CerealSubContainer = styled.div`
  width: 100%;
  @media (max-width: 1200px) {
    margin: 0 auto;
    width: 100%;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const CerealDescriptionNutrion = styled.ul`
  width: 80%;
  margin: 0 auto;
  margin-top: 100px;

  &:after {
    content: "";
    display: table;
    clear: both;
  }
  @media (max-width: 1200px) {
    width: 100%;
  }

  @media (max-width: 768px) {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
  }
`;

const CerealDescriptionNutrionList = styled.li`
  &:nth-child(1) {
    font-size: 1.8em;
    font-weight: bold;
    @media (max-width: 768px) {
      font-size: 1.2em;
      text-align: center;
      margin-bottom: 20px;
    }
  }
  &:nth-child(2) {
    float: right;
  }
  &:nth-child(3) {
    margin-top: 30px;
    width: 440px;
    font-size: 1em;
    color: #878c91;
    @media (max-width: 1200px) {
      width: 100%;
    }
  }
`;
const CerealImg01 = styled.div`
  background-image: url(${nutrionImg01});
  background-size: cover;
  background-repeat: no-repeat;
  width: 400px;
  height: 400px;
  border: none;
  @media (max-width: 1200px) {
    width: 310px;
    height: 315px;
  }
  @media (max-width: 768px) {
    width: 100%;
    height: 710px;
    display: none;
  }
`;
const CerealImg02 = styled.img`
  display: none;
  min-width: 400px;
  @media (max-width: 768px) {
    width: 100%;

    min-height: 380px;
    display: block;
  }
  @media (max-width: 768px) {
    width: 100%;

    min-height: 380px;
    display: block;
  }
`;

const CerealDescriptionNutrion02 = styled.ul`
  width: 80%;
  margin: 30px auto 0;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
const CerealDescriptionNutrion02List = styled.li`
  font-size: 0.9em;
  &:nth-child(1) {
    font-size: 1.2em;

    @media (max-width: 768px) {
      text-align: center;
    }
  }
  &:nth-child(2) {
    float: left;
    @media (max-width: 768px) {
      float: none;
    }
  }
  &:nth-child(3) {
    font-weight: bold;
  }
  &:nth-child(4) {
    margin-bottom: 46px;
  }
  &:nth-child(5) {
    font-weight: bold;
  }
  &:nth-child(6) {
  }
  &:nth-child(7) {
    clear: both;
  }
  &:nth-child(8) {
    margin-bottom: 46px;
  }
  &:nth-child(9) {
    font-weight: bold;
  }
  &:nth-child(10) {
    margin-bottom: 46px;
  }
  &:nth-child(11) {
    font-weight: bold;
  }
  &:nth-child(12) {
    margin-bottom: 26px;
  }
  &:nth-child(13) {
    display: flex;
    gap: 20px;
    margin-bottom: 26px;
    @media (max-width: 1200px) {
      gap: 10px;
    }
  }
  &:nth-child(14) {
    font-weight: bold;
  }
  &:nth-child(15) {
    margin-bottom: 26px;
  }
  &:nth-child(16) {
    font-weight: bold;
  }
  &:nth-child(17) {
    margin-bottom: 26px;
  }
  &:nth-child(18) {
    font-weight: bold;
  }
  &:nth-child(19) {
    margin-bottom: 26px;
  }
  &:nth-child(20) {
    font-weight: bold;
  }
  &:nth-child(21) {
    font-weight: bold;
  }
  &:nth-child(22) {
    margin-bottom: 26px;
  }
  &:nth-child(23) {
    font-weight: bold;
  }
  &:nth-child(24) {
    margin-bottom: 26px;
  }
  &:nth-child(25) {
    font-weight: bold;
  }
`;
const CerealImg03 = styled.img`
  width: 265px;
  height: 345px;
  @media (max-width: 768px) {
    display: none;
  }
`;
const CerealImg04 = styled.img`
  display: none;
  @media (max-width: 768px) {
    width: 100%;
    min-width: 380px;
    min-height: 574px;
    display: block;
  }
`;
const CerealImg05 = styled.img`
  min-width: 130px;
  min-height: 200px;
`;
const CerealImg06 = styled.img`
  width: 100%;
  min-height: 320px;
`;
const Span = styled.span`
  color: #d20b2f;
`;

class Cereal extends Component {
  render() {
    return (
      <>
        <Header />
        <CerialSectionImg>
          <CerealTitle>
            Cereal & <p> Nutrition</p>
            <TitleStyle></TitleStyle>
          </CerealTitle>
        </CerialSectionImg>
        <BehindContainer>
          <CerealContainer>
            <CeralMenuTitle> Cereal & Nutrition</CeralMenuTitle>
            <CerealMenu>
              <CerealMenuList>시리얼의 영향</CerealMenuList>
              <CerealMenuList>씨앗에서 식탁까지</CerealMenuList>
              <CerealMenuList>영양정보 들여다보기</CerealMenuList>
              <CerealMenuList>시리얼의 혁신</CerealMenuList>
            </CerealMenu>
          </CerealContainer>
          <CerealDescptionContainer>
            <CerealDescriptionTitle>시리얼의 영양</CerealDescriptionTitle>
            <CerealDescriptionSubDesc>
              John Harvey Kellogg와 Will Keith Kellogg 형제는 115년 전에 건강한
              식단의 중요한 식재료 중 하나인 <p>곡물의</p> 가능성을 발견하고,
              구운 옥수수를 플레이크 형태로 만들어 세계 최초로 아침 식사용
              시리얼을 선보였습니다.
              <p>
                그 이래 시리얼은 건강한 식단을 위해 전세계 수많은 사람들이 즐겨
                찾는 식사가 되었습니다.
              </p>
            </CerealDescriptionSubDesc>
            <CerealSubContainer>
              <CerealDescriptionNutrion>
                <CerealDescriptionNutrionList>
                  비타민과 미네랄
                </CerealDescriptionNutrionList>
                <CerealDescriptionNutrionList>
                  <CerealImg01 />
                  <CerealImg02
                    src={
                      require("./cerealImg/cereal_nutrition_img_1.png").default
                    }
                  />
                </CerealDescriptionNutrionList>
                <CerealDescriptionNutrionList>
                  <p style={{ marginBottom: "30px" }}>
                    건강한 일상을 위하여 우리는 다양한 영양소를 골고루 섭취하는
                    것이 중요합니다.
                  </p>
                  <p style={{ marginBottom: "30px" }}>
                    곡물의 장점을 한껏 살린 켈로그 시리얼은 다양하고 풍부한
                    영양소를 함유하고 있습니다. 특히 복합 탄수화물과 식이섬유가
                    풍부하고 지방이 적으며 주요 비타민과 미네랄의 공급도
                    도와줍니다.
                  </p>
                  <p>
                    켈로그 시리얼로 하루 동안 필요한 다양한 영양소를 보충하며
                    풍요롭고 건강한 일상을 즐겨보세요.
                  </p>
                </CerealDescriptionNutrionList>
              </CerealDescriptionNutrion>

              <CerealDescriptionNutrion02>
                <CerealDescriptionNutrion02List>
                  시리얼에 대해 당신이 몰랐던 진실 10가지
                </CerealDescriptionNutrion02List>
                <CerealDescriptionNutrion02List>
                  <CerealImg03
                    src={
                      require("./cerealImg/cereal_nutrition_img_2.png").default
                    }
                  />
                  <CerealImg04
                    src={
                      require("./cerealImg/cereal_nutrition_img_2.png").default
                    }
                  />
                </CerealDescriptionNutrion02List>
                <CerealDescriptionNutrion02List>
                  1. 시리얼은 여신의 이름이다?- <Span>YES</Span>
                </CerealDescriptionNutrion02List>
                <CerealDescriptionNutrion02List>
                  시리얼곡물을 의미하는 라틴어 단어 케레알리스(cerealis)에서
                  파생된 풍요를 상징하는 로마 추수의 여신 세레스(Ceres)에서
                  유래된 이름입니다. 로마 시대 동안 세레스(Ceres)의 이름은 곡물,
                  빵과 동의어로 쓰이기도 했다고 합니다.
                </CerealDescriptionNutrion02List>
                <CerealDescriptionNutrion02List>
                  2. 시리얼은 실수로 탄생한 음식이다? – <Span>YES</Span>
                </CerealDescriptionNutrion02List>
                <CerealDescriptionNutrion02List>
                  켈로그 창업자인 Will Keith Kellogg와 그의 형 John Harvey
                  Kellogg 박사는 요양원에서 환자들을 위한 식품을 개발하는
                  과정에서 롤러 압축기에 밀가루를 넣어 놓았다가 우연히 반죽이
                  건조되어 부서져 탄생한 얇은 밀 푸레이크를 발견했습니다. 이는
                  뛰어난 맛으로 환자들에게 인기가 좋았고, 시리얼이 탄생하게 된
                  배경이 되었습니다.
                </CerealDescriptionNutrion02List>
                <CerealDescriptionNutrion02List></CerealDescriptionNutrion02List>
                <CerealDescriptionNutrion02List></CerealDescriptionNutrion02List>
                <CerealDescriptionNutrion02List>
                  3. 시리얼은 튀겨서 만든다? – <Span>NO</Span>
                </CerealDescriptionNutrion02List>
                <CerealDescriptionNutrion02List>
                  시리얼은 천연 곡물 그대로의 맛과 향을 살리기 위해 구워서
                  만들어집니다. 곡물을 수확한 후 찌기, 압착하여 바삭하게 굽기,
                  다양한 비타민과 무기질을 첨가 후 코팅하고 건조하면 끝! 소화도
                  잘되고 우유와 곁들여 먹을 때 기름띠도 생기지 않아요.
                </CerealDescriptionNutrion02List>
                <CerealDescriptionNutrion02List>
                  4. 시리얼은 탄수화물 덩어리다? – <Span>NO</Span>
                </CerealDescriptionNutrion02List>
                <CerealDescriptionNutrion02List>
                  시리얼은 비타민, 무기질, 식이섬유, 항산화제 등 다양한 영양소를
                  포함하고 있습니다. 시리얼의 곡물에서 발견되는 천연 항산화
                  물질과 식이섬유는 전반적인 건강에 도움을 줍니다.
                </CerealDescriptionNutrion02List>
                <CerealDescriptionNutrion02List>
                  <CerealImg05
                    src={
                      require("./cerealImg/cereal_nutrition_img_3.png").default
                    }
                  />
                  <CerealImg05
                    src={
                      require("./cerealImg/cereal_nutrition_img_4.png").default
                    }
                  />
                  <CerealImg05
                    src={
                      require("./cerealImg/cereal_nutrition_img_5.png").default
                    }
                  />
                </CerealDescriptionNutrion02List>
                <CerealDescriptionNutrion02List>
                  5. 시리얼은 서양인 아침 식사다? – <Span>NO</Span>
                </CerealDescriptionNutrion02List>
                <CerealDescriptionNutrion02List>
                  시리얼은 한끼 식사로 충분한 맛과 영양을 골고루 갖춘 리얼
                  푸드로 누구든지 바쁜 일상 속에서 언제 어디서나 간편하게 즐길
                  수 있는 식사로 국내에서도 많은 사랑을 받고 있습니다.
                </CerealDescriptionNutrion02List>
                <CerealDescriptionNutrion02List>
                  6. 시리얼은 설탕 덩어리다? – <Span>NO</Span>
                </CerealDescriptionNutrion02List>
                <CerealDescriptionNutrion02List>
                  한끼에 섭취하는 시리얼에 들어있는 당류는 8~10g 내외로 1일 영양
                  성분 기준치의 8% 정도입니다. 오렌지 주스 한 컵에 포함된 당류는
                  20g, 요구르트는 40g이 넘는 점과 비교해보세요
                </CerealDescriptionNutrion02List>
                <CerealDescriptionNutrion02List>
                  7.시리얼은 성의 없는 차가운 음식이다? – <Span>NO</Span>
                </CerealDescriptionNutrion02List>
                <CerealDescriptionNutrion02List>
                  시리얼을 따뜻하게 먹으면 뜨겁게 조리한 평상 시 식사와 더
                  유사해 든든한 한끼를 먹은 듯한 포만감과 만족감을 느낄 수 있고
                  부드러운 식감과 색다른 맛도 느낄 수 있습니다. 특히 그래놀라는
                  따뜻한 우유와 함께 먹으면 한 끼 식사로 손색없는 맛과 영양을
                  느낄 수 있습니다
                </CerealDescriptionNutrion02List>
                <CerealDescriptionNutrion02List>
                  <CerealImg06
                    src={
                      require("./cerealImg/cereal_nutrition_img_6.png").default
                    }
                  />
                </CerealDescriptionNutrion02List>
                <CerealDescriptionNutrion02List>
                  8. 시리얼에 우유보다 많은 비타민D가 들어있다? –{" "}
                  <Span>YES</Span>
                </CerealDescriptionNutrion02List>
                <CerealDescriptionNutrion02List>
                  같은 양의 시리얼과 우유를 비교해보면 시리얼에 더 많은
                  비타민D가 함유되어 있습니다. 비타민D가 함유된 음식 중에 가장
                  간편하게 먹을 수 있는 우유의 경우 100g당 약1µg, 버터는 약1µg이
                  함유된데 반해 시리얼의 경우(켈로그 콘프로스트 기준) 8.3µg가
                  함유되어 있습니다
                </CerealDescriptionNutrion02List>
                <CerealDescriptionNutrion02List>
                  9. 시리얼은 어린이용 간식이다? – <Span>NO</Span>
                </CerealDescriptionNutrion02List>
                <CerealDescriptionNutrion02List>
                  시리얼은 요양원에 있는 환자들의 건강식 대용으로
                  만들어졌습니다. 지방은 적고 다양한 비타민과 무기질을 함유하고
                  있으며, 콜레스테롤이 없어 균형 잡힌 한끼 식사로 영양학적인
                  설계가 잘 되어 있는 음식입니다
                </CerealDescriptionNutrion02List>
                <CerealDescriptionNutrion02List>
                  10. 시리얼은 운동 전/후에 먹으면 좋다? – <Span>YES</Span>
                </CerealDescriptionNutrion02List>
                <CerealDescriptionNutrion02List>
                  운동을 하기 전 지방이 적고 단백질이 낮은 풍부한 탄수화물을
                  섭취하는 것은 운동 중 지구력 운동 수행 능력을 향상시켜줍니다.
                  운동 후 근육 생성을 위해서는 단백질과 적절한 양의 탄수화물을
                  함께 섭취해 주는 것이 효과적입니다. 일반적인 시리얼은 운동 전,
                  단백질 함량이 강화된 시리얼은 운동 후 섭취하게 되면 일반인들도
                  쉽게 필요한 영양소를 섭취할 수 있습니다.
                </CerealDescriptionNutrion02List>
              </CerealDescriptionNutrion02>
            </CerealSubContainer>
          </CerealDescptionContainer>
        </BehindContainer>
        <FooterLayout />
      </>
    );
  }
}
export default Cereal;
