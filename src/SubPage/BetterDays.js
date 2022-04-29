import React, { Component } from "react";
import FooterLayout from "./SubPageFooter/FooterLayout";
import Header from "../MainPage/Header/Header";
import styled from "styled-components";

import beteterDaysBackgroundImg from "./betterdaysImg/key_visual_betterdays_1920.png";
import beteterDaysBackgroundImg02 from "./betterdaysImg/key_visual_betterdays_768.png";
import beteterDaysBackgroundImg03 from "./betterdaysImg/key_visual_betterdays_360.png";

import betterDaysSubImg01 from "./betterdaysImg/better_days_img_1_1180.png";
import betterDaysSubImg02 from "./betterdaysImg/better_days_img_1_360.png";

import betterDaysSubImg03 from "./betterdaysImg/better_days_img_2_1180.png";
import betterDaysSubImg04 from "./betterdaysImg/better_days_img_2_360.png";

import betterDaysSubImg05 from "./betterdaysImg/better_days_img_3_1180.png";
import betterDaysSubImg06 from "./betterdaysImg/better_days_img_3_360.png";

import betterDaysSubImg07 from "./betterdaysImg/better_days_img_4.jpg";

const BetterDaysSectionImg = styled.div`
  min-width: 450px;
  height: 340px;
  background-image: url(${beteterDaysBackgroundImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  position: relative;
  z-index: 10;
  top: 72px;

  @media (max-width: 1200px) {
    top: 50px;
    width: 100%;
    height: 235px;
    background-image: url(${beteterDaysBackgroundImg02});
    background-size: cover;
    background-position: center;
  }

  @media (max-width: 768px) {
    background-image: url(${beteterDaysBackgroundImg03});
    background-size: cover;
    background-position: center;
    height: 140px;
  }
`;

const BetterDaysTitle = styled.img`
  position: absolute;
  left: 50%;
  top: 25%;
  transform: translateX(-50%);

  @media (max-width: 1200px) {
    display: none;
  }
`;
const BetterDaysTitle02 = styled.img`
  display: none;
  position: absolute;
  left: 50%;
  top: 35%;
  transform: translateX(-50%);

  @media (max-width: 1200px) {
    display: block;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
const BetterDaysTitle03 = styled.img`
  display: none;
  position: absolute;
  left: 50%;
  top: 35%;
  transform: translateX(-50%);

  @media (max-width: 768px) {
    display: block;
  }
`;
const BehindContainer = styled.div`
  top: 600px;
  width: 100%;

  background-color: #fbfbfb;
`;
const BetterDaysContainer = styled.div`
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
    width: 100%;
    margin-top: 65px;
  }
`;
const BetterDaysMenuTitle = styled.div`
  font-size: 2em;
  font-weight: bold;
  @media (max-width: 1200px) {
    display: none;
  }
`;

const BetterDaysMenu = styled.ul`
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  @media (max-width: 1200px) {
    margin-top: 0px;
  }
`;
const BetterDaysMenuList = styled.li`
  box-sizing: border-box;
  text-align: center;
  padding: 19px;
  width: 20%;

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
  &:nth-child(4) {
    border-right: 0;
  }
  @media (max-width: 1200px) {
    height: 56px;
    font-size: 0.7em;
  }
  @media (max-width: 968px) {
    font-size: 0.6em;
  }

  @media (max-width: 768px) {
    height: 35px;
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
      border: 1px solid#ccc;
    }
    &:nth-child(5) {
      border-top: 0;

      width: 50%;
    }
  }
`;
const BetterDaysDescptionContainer = styled.div`
  margin: 50px auto;
  width: 1180px;
  min-width: 450px;
  background-color: #ffffff;
  @media (max-width: 1200px) {
    position: relative;
    width: 90%;
  }
`;
const BetterDaysDescriptionTitle = styled.div`
  font-size: 2em;
  width: 300px;
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

const BetterDaysSubContainer = styled.div`
  width: 100%;
  @media (max-width: 1200px) {
    margin: 0 auto;
    width: 100%;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const BetterDaysDescription = styled.ul`
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
    margin-top: 20px;
    display: flex;
    flex-direction: column;
  }
`;

const BetterDaysDescriptionList = styled.li`
  &:nth-child(1) {
    float: right;
    margin-left: 20px;
    @media (max-width: 1200px) {
      float: none;
      margin-left: 0px;
    }
  }
  &:nth-child(2) {
    font-size: 1em;
    font-weight: bold;
    @media (max-width: 1200px) {
      margin-top: 20px;
      margin-bottom: 10px;
    }
  }
  &:nth-child(3) {
    margin-top: 10px;
    font-size: 0.9em;
    color: #878c91;
    @media (max-width: 1200px) {
      width: 100%;
    }
  }
  &:nth-child(4) {
    margin-top: 60px;
    margin-bottom: 30px;
    width: 100%;
    height: 1px;
    background-color: #ccc;
  }
  &:nth-child(5) {
    float: left;
    margin-right: 20px;
    @media (max-width: 1200px) {
      float: none;
      margin-right: 0;
    }
  }
  &:nth-child(6) {
    font-weight: bold;
  }
  &:nth-child(7) {
    font-size: 0.9em;
    color: #878c91;
  }
  &:nth-child(8) {
    margin-top: 60px;
    margin-bottom: 30px;
    width: 100%;
    height: 1px;
    background-color: #ccc;
  }
  &:nth-child(9) {
    float: right;
    margin-left: 20px;
    @media (max-width: 1200px) {
      float: none;
      margin-left: 0px;
    }
  }
  &:nth-child(10) {
    font-weight: bold;
  }
  &:nth-child(11) {
    font-size: 0.9em;
    color: #878c91;
  }
  &:nth-child(12) {
    margin-top: 65px;
  }
  &:nth-child(13) {
    margin-top: 20px;
    font-size: 0.9em;
    color: #878c91;
  }
  &:nth-child(14) {
    margin-top: 20px;
  }
`;
const BetterDaysImg01 = styled.div`
  background-image: url(${betterDaysSubImg01});
  background-size: cover;
  background-repeat: no-repeat;
  width: 300px;
  height: 300px;

  @media (max-width: 1200px) {
    display: none;
  }
`;
const BetterDaysImg02 = styled.div`
  display: none;
  min-width: 400px;
  @media (max-width: 1200px) {
    background-image: url(${betterDaysSubImg02});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    min-height: 380px;
    display: block;
  }
  @media (max-width: 768px) {
    width: 100%;

    min-height: 250px;
    display: block;
  }
`;
const BetterDaysImg03 = styled.div`
  background-image: url(${betterDaysSubImg03});
  background-size: cover;
  background-repeat: no-repeat;
  width: 300px;
  height: 300px;

  @media (max-width: 1200px) {
    display: none;
  }
`;
const BetterDaysImg04 = styled.div`
  display: none;
  width: 100%;

  @media (max-width: 1200px) {
    background-image: url(${betterDaysSubImg04});
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 500px;
    display: block;
  }
  @media (max-width: 968px) {
    min-height: 350px;
  }
  @media (max-width: 768px) {
    display: block;
    min-height: 250px;
  }
`;
const BetterDaysImg05 = styled.div`
  background-image: url(${betterDaysSubImg05});
  background-size: cover;
  background-repeat: no-repeat;
  width: 300px;
  height: 300px;
  border: none;
  @media (max-width: 1200px) {
    display: none;
  }
`;
const BetterDaysImg06 = styled.div`
  display: none;
  width: 100%;

  @media (max-width: 1200px) {
    background-image: url(${betterDaysSubImg06});
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 500px;
    display: block;
  }
  @media (max-width: 968px) {
    min-height: 350px;
  }
  @media (max-width: 768px) {
    display: block;
    min-height: 250px;
  }
`;
const BetterDaysImg07 = styled.div`
  background-image: url(${betterDaysSubImg07});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  min-height: 550px;
  @media (max-width: 1200px) {
    min-height: 400px;
  }
  @media (max-width: 768px) {
    min-height: 250px;
  }
`;
const TestMedia = styled.div`
  position: relative;
  padding: 56.25% 0 0 0;
  @media (max-width: 1200px) {
  }
`;

class BetterDays extends Component {
  render() {
    return (
      <>
        <Header />
        <BetterDaysSectionImg>
          <BetterDaysTitle
            src={
              require("./betterdaysImg/key_visual_txt_betterdays_1920.png")
                .default
            }
          ></BetterDaysTitle>
          <BetterDaysTitle02
            src={
              require("./betterdaysImg/key_visual_txt_betterdays_768.png")
                .default
            }
          ></BetterDaysTitle02>
          <BetterDaysTitle03
            src={
              require("./betterdaysImg/key_visual_txt_betterdays_360.png")
                .default
            }
          ></BetterDaysTitle03>
        </BetterDaysSectionImg>
        <BehindContainer>
          <BetterDaysContainer>
            <BetterDaysMenuTitle> BetterDays</BetterDaysMenuTitle>
            <BetterDaysMenu>
              <BetterDaysMenuList>더나은 내일 캠페인</BetterDaysMenuList>
              <BetterDaysMenuList>건강한땅, 건강한 쌀</BetterDaysMenuList>
              <BetterDaysMenuList>고그린 친환경 캠페인</BetterDaysMenuList>
              <BetterDaysMenuList>리얼 시리얼 캠페인</BetterDaysMenuList>
              <BetterDaysMenuList>사회공헌 보고서</BetterDaysMenuList>
            </BetterDaysMenu>
          </BetterDaysContainer>
          <BetterDaysDescptionContainer>
            <BetterDaysDescriptionTitle>
              더나은내일캠페인
            </BetterDaysDescriptionTitle>

            <BetterDaysSubContainer>
              <BetterDaysDescription>
                <BetterDaysDescriptionList>
                  <BetterDaysImg01 />
                  <BetterDaysImg02 />
                </BetterDaysDescriptionList>
                <BetterDaysDescriptionList>
                  더나은 내일을 만들기 위해 110년동안 기울여온 켈로그의 노력
                </BetterDaysDescriptionList>

                <BetterDaysDescriptionList>
                  <p style={{ marginBottom: "30px" }}>
                    켈로그는 1906년 설립 당시부터 열정이 가득한 다양한 사람들이
                    모여 만든 건강한 식품 제공으로 세상을 변화시키기 위해
                    노력해온 ‘Heart & Soul’을 지닌 회사입니다. 켈로그의 창업자인
                    W.K.Kellogg는 진보적인 자선가이자 최초의 웰빙 선지자였으며,
                    켈로그는 이러한 창립자의 확고한 철학과 가치에 따라 110여년이
                    넘는 세월동안 맛과 영양이 풍부한 좋은 먹거리를 제공하고
                    소비자, 지역 사회 그리고 지구에 긍정적인 변화를 가져올 수
                    있도록 지속적인 노력을 기울여 오고 있습니다.
                  </p>
                  <p style={{ marginBottom: "30px" }}>
                    특히 아침식사 시리얼의 개척자인 W.K. 켈로그가 지난 1930년에
                    설립한 W.K. 켈로그 재단 (Kellogg Foundation)은 미국에서 가장
                    큰 독립적인 자선 재단 중 하나로, 어린이들의 건강을
                    증진시키고 더욱 성장할 수 있는 환경을 조성하기 위해
                    지원해오고 있습니다.
                  </p>
                </BetterDaysDescriptionList>
                <BetterDaysDescriptionList></BetterDaysDescriptionList>
                <BetterDaysDescriptionList>
                  <BetterDaysImg03 />
                  <BetterDaysImg04 />
                </BetterDaysDescriptionList>
                <BetterDaysDescriptionList>
                  켈로그, 지속가능성 위한 차세대 사회공헌활동에 박차
                </BetterDaysDescriptionList>
                <BetterDaysDescriptionList>
                  <p style={{ marginTop: "20px" }}>
                    켈로그는 2019년 6월, 차세대 지속가능성을 위한 글로벌
                    사회공헌 캠페인, ‘더 나은 내일(Kellogg’s® Better Days)’를
                    발표하고, 식량 안보와 기후, 복지 등 사회문제 해결에 한 걸음
                    더 앞장서기로 했습니다.
                  </p>
                  <p style={{ marginTop: "20px" }}>
                    켈로그는 해당 캠페인을 통해 유엔의 지속가능발전목표(SDGs)와
                    연계해 오는 2030년까지 총 30억명의 사람들과 지역사회 그리고
                    지구에 긍정적인 변화를 가져오기 위해 노력할 계획입니다.
                  </p>
                  <p style={{ marginTop: "20px" }}>
                    해당 공약 아래 10억명의 결식 예방, 3억 7천 5백만명에게 식량
                    기부, 여성농업인과 소농가 등 1백만명의 농부 지원, 책임감
                    있는 원료 공급, 음식물 쓰레기 절감, 재활용 가능한 패키지
                    공급, 직원들의 자원봉사 등 다양한 활동을 펼쳐 나가고
                    있습니다.
                  </p>
                </BetterDaysDescriptionList>
                <BetterDaysDescriptionList></BetterDaysDescriptionList>
                <BetterDaysDescriptionList>
                  <BetterDaysImg05 />
                  <BetterDaysImg06 />
                </BetterDaysDescriptionList>
                <BetterDaysDescriptionList>
                  농심켈로그, 책임감 있는 기업시민으로 한국지역사회에 기여
                </BetterDaysDescriptionList>
                <BetterDaysDescriptionList>
                  <p style={{ marginTop: "20px" }}>
                    농심켈로그도 이에 동참해 한국사회복지협의회 전국푸드뱅크,
                    초록우산 어린이재단, 자연의벗연구소, 대한적십자사,
                    굿네이버스 등과 긴밀히 협력하여 지역 사회와 도움의 손길이
                    필요한 소외된 이웃을 돕기 위한 사회공헌 활동을 적극적으로
                    전개해오고 있습니다.
                  </p>
                  <p style={{ marginTop: "20px" }}>
                    푸드뱅크 ‘희망 나눔 팩’, '이머전시 푸드 팩' 활동,
                    어린이재단과 보육원 지원 활동, 산불 화재 이재민 대상 기부,
                    결식 아동을 위한 시리얼 나눔, 세계 식량의 날 식품 전달 등
                    최근 4년간 약백만인분이 넘는 시리얼을 지원했으며, 2013년부터
                    총 기부 누적액은 76억원 상당에 달합니다. 지난해에는 코로나19
                    때문에 어려움에 처한 소외계층을 위한 식품 지원에
                    앞장섰습니다. 특히 급증하는 환자 치료에 힘을 쏟고 있는
                    의료진들에게도 제품을 전달하고 이들에게 감사와 응원의 마음을
                    전달하는 ‘#덕분에챌린지’ 캠페인에도 동참했습니다.
                  </p>
                </BetterDaysDescriptionList>
                <BetterDaysDescriptionList>
                  <BetterDaysImg07 />
                </BetterDaysDescriptionList>
                <BetterDaysDescriptionList>
                  <p>
                    농심켈로그는 이와 같은 재난 상황 뿐만 아니라, 평소
                    어린이들의 건강한 삶 지원을 위해서도 다양한 나눔 활동을
                    전개해오고 있습니다. 2017년에는 초록우산 어린이재단과 함께
                    ‘어린이들을 위한 건강한 식사 나누기’ 사회 공헌 협약을
                    체결하고 2018년에는 아동들을 위한 지원 사업을 약 3배
                    확대했습니다. 2020년에는 신체적∙정신적 건강 측면에서
                    불평등을 경험하는 보육원 아이들을 지원하기 위해 ‘하트 앤
                    소울 플레이(Heart & Soul Play) 프로젝트’를 시작했습니다.
                    해당 프로그램을 통해 보육원 아동 및 청소년들의 우울증이나
                    자살을 예방할 수 있는 미술심리치료와 함께 시리얼 지원을 통해
                    마음과 몸 모두 건강하게 성장할 수 있도록 이끌어줄
                    계획입니다.
                  </p>
                  <p style={{ marginTop: "20px" }}>
                    농심켈로그는 앞으로도 책임 있는 기업시민으로서 식량 안보와
                    기후, 복지 등 다양한 사회문제 해결에 책임을 다하고, 나눔으로
                    더 큰 가치를 만들기 위해 지속적인 노력을 기울이겠습니다.
                  </p>
                </BetterDaysDescriptionList>
                <BetterDaysDescriptionList>
                  <TestMedia>
                    <iframe
                      style={{
                        position: "absolute",
                        top: "0",
                        left: "0",
                        width: "100%",
                        height: "100%",
                      }}
                      src="https://www.youtube.com/embed/8c8RUnnvs0c"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </TestMedia>
                </BetterDaysDescriptionList>
              </BetterDaysDescription>
            </BetterDaysSubContainer>
          </BetterDaysDescptionContainer>
        </BehindContainer>
        <FooterLayout />
      </>
    );
  }
}
export default BetterDays;
