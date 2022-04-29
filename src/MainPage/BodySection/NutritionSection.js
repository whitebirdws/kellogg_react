import React, { Component } from "react";
import styled from "styled-components";

import nutritionImg01 from "../../img/img_nutritional_off_1.png";
import nutritionImg02 from "../../img/img_nutritional_off_2.png";
import nutritionImg03 from "../../img/img_nutritional_off_3.png";
import nutritionImg04 from "../../img/img_nutritional_off_4.png";

import layout01 from "../../img/layout01.png";
import layout02 from "../../img/layout02.png";
import layout03 from "../../img/layout03.jpg";
import layout04 from "../../img/layout04.png";

import subImg01 from "../../img/img_m_nutritional_on_1.png";
import subImg02 from "../../img/img_m_nutritional_on_2.png";
import subImg03 from "../../img/img_m_nutritional_on_3.jpg";
import subImg04 from "../../img/img_m_nutritional_on_4.png";

import big_subImg01 from "../../img/big_ico_nutritional_on_1.png";
import big_subImg02 from "../../img/big_ico_nutritional_on_2.png";
import big_subImg03 from "../../img/big_ico_nutritional_on_3.png";
import big_subImg04 from "../../img/big_ico_nutritional_on_4.png";

import icon01_nutrition from "../../img/ico_nutritional_off_1.png";
import icon02_nutrition from "../../img/ico_nutritional_off_2.png";
import icon03_nutrition from "../../img/ico_nutritional_off_3.png";
import icon04_nutrition from "../../img/ico_nutritional_off_4.png";

const InnerOfNutritionLayout = styled.div`
  width: 100%;
  height: auto;
  margin-top: 46px;
  display: flex;
  background-color: #ccc;
  @media (max-width: 1180px) {
    flex-direction: column;
  }
`;
const LayOutOfNutritionImg01 = styled.div`
  width: 25%;
  height: 573px;
  background-image: url(${nutritionImg01});
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 700;

  &:hover {
    background-image: url(${layout01});
    background-size: cover;
    color: #ffffff;
  }

  &:hover {
    background-image: url(${subImg01});
  }

  @media (max-width: 1180px) {
    width: 100%;
    height: 350px;
    background-image: url(${subImg01});
    background-size: cover;
    color: #ffffff;
  }
  @media (max-width: 768px) {
    height: 189px;
  }
`;
const LayOutOfNutritionImg02 = styled.div`
  width: 25%;
  height: 573px;
  background-image: url(${nutritionImg02});
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 700;

  &:hover {
    background-image: url(${layout02});
    background-size: cover;
    color: #ffffff;
  }
  @media (max-width: 1180px) {
    width: 100%;
    height: 350px;
    background-image: url(${subImg02});
    background-size: cover;
    color: #ffffff;
    &:hover {
      background-image: url(${subImg02});
      background-size: cover;
    }
  }
  @media (max-width: 768px) {
    height: 189px;
  }
`;
const LayOutOfNutritionImg03 = styled.div`
  width: 25%;
  height: 573px;
  background-image: url(${nutritionImg03});
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  &:hover {
    background-image: url(${layout03});

    color: #ffffff;
  }
  @media (max-width: 1180px) {
    width: 100%;
    height: 350px;
    background-image: url(${subImg03});
    background-size: cover;
    color: #ffffff;
    &:hover {
      background-image: url(${subImg03});
      background-size: cover;
    }
  }
  @media (max-width: 768px) {
    height: 189px;
  }
`;
const LayOutOfNutritionImg04 = styled.div`
  width: 25%;
  height: 573px;
  background-image: url(${nutritionImg04});
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  &:hover {
    background-image: url(${layout04});
    background-size: cover;
    color: #ffffff;
  }
  @media (max-width: 1180px) {
    width: 100%;
    height: 350px;
    background-image: url(${subImg04});
    background-size: cover;
    color: #ffffff;
    &:hover {
      background-image: url(${subImg04});
      background-size: cover;
    }
  }
  @media (max-width: 768px) {
    height: 189px;
  }
`;

const Icon01 = styled.div`
  width: 100px;
  height: 100px;
  background-image: url(${icon01_nutrition});
  background-size: cover;
  &:hover {
    width: 250px;
    height: 250px;
    background-image: url(${big_subImg01});
    background-size: cover;
  }
  @media (max-width: 1180px) {
    top: 20px;
    position: relative;

    width: 250px;
    height: 250px;

    background-image: url(${big_subImg01});
    background-size: cover;
    background-position: center;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
const Icon02 = styled.div`
  width: 100px;
  height: 100px;
  background-image: url(${icon02_nutrition});
  background-size: cover;
  &:hover {
    width: 250px;
    height: 250px;

    background-image: url(${big_subImg02});
    background-size: cover;
  }
  @media (max-width: 1180px) {
    top: 20px;
    position: relative;

    width: 250px;
    height: 250px;

    background-image: url(${big_subImg02});
    background-size: cover;
    background-position: center;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
const Icon03 = styled.div`
  width: 100px;
  height: 100px;
  background-image: url(${icon03_nutrition});
  background-size: cover;
  &:hover {
    width: 250px;
    height: 250px;

    background-image: url(${big_subImg03});
    background-size: cover;
  }
  @media (max-width: 1180px) {
    top: 20px;
    position: relative;

    width: 250px;
    height: 250px;

    background-image: url(${big_subImg03});
    background-size: cover;
    background-position: center;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
const Icon04 = styled.div`
  width: 100px;
  height: 100px;
  background-image: url(${icon04_nutrition});
  background-size: cover;
  &:hover {
    width: 250px;
    height: 250px;

    background-image: url(${big_subImg04});
    background-size: cover;
  }
  @media (max-width: 1180px) {
    position: relative;
    top: 20px;
    width: 250px;
    height: 250px;

    background-image: url(${big_subImg04});
    background-size: cover;
    background-position: center;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
const ViewTextSpan = styled.span`
  font-size: 16px;

  text-decoration: underline;
  font-weight: 500;
`;
const Text01 = styled.div`
  @media (max-width: 1180px) {
    font-size: 20px;
    position: absolute;
    text-align: center;
  }
  @media (max-width: 768px) {
    left: 20px;
  }
`;
const Text02 = styled.div`
  @media (max-width: 1180px) {
    font-size: 20px;
    position: absolute;
    text-align: center;
  }
  @media (max-width: 768px) {
    left: 20px;
  }
`;
const Text03 = styled.div`
  @media (max-width: 1180px) {
    font-size: 20px;
    position: absolute;
    text-align: center;
  }
  @media (max-width: 768px) {
    left: 20px;
  }
`;
const Text04 = styled.div`
  @media (max-width: 1180px) {
    font-size: 20px;
    position: absolute;
    text-align: center;
  }
  @media (max-width: 768px) {
    left: 20px;
  }
`;
class NutritionSection extends Component {
  render() {
    return (
      <>
        <InnerOfNutritionLayout>
          <LayOutOfNutritionImg01>
            <Icon01 />
            <Text01>
              시리얼의 영양<p>살펴보기</p>
              <ViewTextSpan>
                <p>View more</p>
              </ViewTextSpan>
            </Text01>
          </LayOutOfNutritionImg01>
          <LayOutOfNutritionImg02>
            <Icon02 />
            <Text02>
              씨앗에서 식탁까지<p>책임감 있는 원료 관리</p>
              <ViewTextSpan>
                <p>View more</p>
              </ViewTextSpan>
            </Text02>
          </LayOutOfNutritionImg02>
          <LayOutOfNutritionImg03>
            <Icon03 />
            <Text03>
              더 나은 내일<p>2021 CSR 리포트</p>
              <ViewTextSpan>
                <p>View more</p>
              </ViewTextSpan>
            </Text03>
          </LayOutOfNutritionImg03>
          <LayOutOfNutritionImg04>
            <Icon04 />
            <Text04>
              시리얼의 영양<p>혁신</p>
              <ViewTextSpan>
                <p>View more</p>
              </ViewTextSpan>
            </Text04>
          </LayOutOfNutritionImg04>
        </InnerOfNutritionLayout>
      </>
    );
  }
}

export default NutritionSection;
