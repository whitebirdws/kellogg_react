import React, { Component } from "react";
import styled from "styled-components";

/*이미지 임포트  */
import DescSliderImg from "../../img/slider1.png";
import DescSliderImg02 from "../../img/slider2.png";
import DescSliderImg03 from "../../img/slider3.png";
import DescSliderImg04 from "../../img/slider4.png";

import CategoryTitleImg from "../../img/slider_choco.png";
import CategoryTitleImg02 from "../../img/sldier_grenola.png";
import CategoryTitleImg03 from "../../img/sldier_grenola.png";
import CategoryTitleImg04 from "../../img/slider_kellogg.png";

import ProductWeight from "../../img/product_weight.png";
import ProductEndDate from "../../img/product_end_date.png";
import ProductCalory from "../../img/product_calory.png";

import prevBtnImg from "../../img/btn_content_prev.png";
import nextBtnImg from "../../img/btn_content_next.png";

import ExtensionText from "../component/ExtensionText.js";
import { Link } from "react-router-dom";
const EntireDescSliderLayout = styled.div`
  position: relative;
  width: 100%;
  height: 573px;
  @media (max-width: 1180px) {
    height: 1200px;
  }
  @media (max-width: 768px) {
    height: 960px;
  }

  overflow: hidden;
`;
const DescSliderLayout = styled.div`
  position: relative;
  display: flex;
  margin-top: 46px;
  background-color: #ccc;
  transition: all 0.5s ease-in-out;
  @media (max-width: 980px) {
    display: none;
  }
`;
const DescSliderLayout980 = styled.div`
  display: none;
  position: absolute;
  margin-top: 15px;
  background-color: #ccc;
  transition: all 0.5s ease-in-out;
  @media (max-width: 980px) {
    display: block;
    width: 100%;

    background-color: tomato;
  }
`;
const DescSliderSection01 = styled.div``;
const Detail01TextlLayout = styled.div`
  margin-left: 20px;
`;

const CategoryImg = styled.div`
  width: 194px;
  height: 58px;
  margin-top: 20px;
  margin-bottom: 40px;
`;
const Detail01Text = styled.div`
  font-size: 1.3em;
  font-weight: bold;

  color: #222;
  width: 420px;
  text-overflow: ellipsis;
  /* white-space: nowrap; */
  overflow: hidden;
`;
const DescContainer = styled.div`
  height: 220px;
  position: relative;
  top: -20px;
`;
const DescUl = styled.ul`
  display: flex;
  margin-top: 60px;
`;
const DescLi = styled.li`
  &:nth-child(1) {
    width: 40px;
    height: 59px;
    background-image: url(${ProductWeight});
    background-size: cover;
    background-repeat: no-repeat;
    margin-left: 25px;
    margin-right: 70px;

    @media (max-width: 768px) {
      margin-left: 20px;
      margin-right: 62px;
    }
  }
  &:nth-child(2) {
    width: 60px;
    height: 60px;
    background-image: url(${ProductEndDate});
    background-size: contain;
    background-repeat: no-repeat;
    margin-left: 50px;
    margin-right: 60px;
    @media (max-width: 768px) {
      margin-right: 58px;
    }
  }
  &:nth-child(3) {
    width: 60px;
    height: 60px;
    background-image: url(${ProductCalory});
    background-size: cover;
    background-repeat: no-repeat;
    margin-left: 50px;
  }
`;
const DescUl02 = styled.ul`
  display: flex;
`;
const DescLi02 = styled.li`
  margin-top: 5px;
  &:nth-child(1) {
    margin-left: 30px;
    margin-right: 50px;
    @media (max-width: 768px) {
      margin-left: 24px;
      margin-right: 45px;
    }
  }
  &:nth-child(2) {
    margin-left: 72px;
    margin-right: 60px;
    @media (max-width: 768px) {
      margin-right: 56px;
    }
  }
  &:nth-child(3) {
    margin-left: 52px;
  }
`;
const DescUl03 = styled.ul`
  display: flex;
`;

const DescLi03 = styled.li`
  font-weight: 700;
  margin-top: 5px;

  &:nth-child(1) {
    width: 90px;
    height: 53px;
    background-color: #ededed;
    text-align: center;
    line-height: 53px;
    margin-right: 70px;
    @media (max-width: 768px) {
    }
  }
  &:nth-child(2) {
    width: 97px;
    height: 53px;
    background-color: #ededed;
    text-align: center;
    line-height: 53px;
    margin-right: 70px;
    @media (max-width: 768px) {
      width: 90px;
      height: 53px;
    }
  }
  &:nth-child(3) {
    width: 97px;
    height: 53px;

    background-color: #ededed;
    text-align: center;
    line-height: 53px;
    @media (max-width: 768px) {
      width: 90px;
      height: 53px;
    }
  }
`;
const LiSpan = styled.span`
  margin-top: 0;
  margin-left: 348px;
  font-size: 14px;
  @media (max-width: 768px) {
    margin-left: 330px;
  }
`;
const PrevBtn = styled.div`
  position: absolute;
  top: 300px;
  width: 50px;
  height: 50px;

  background-image: url(${prevBtnImg});
  background-size: cover;
  background-position: center;
  cursor: pointer;
`;
const NextBtn = styled.div`
  width: 50px;
  height: 50px;
  position: absolute;
  top: 300px;
  right: 0;
  background-image: url(${nextBtnImg});
  background-size: cover;
  background-position: center;
  cursor: pointer;
`;
const DescSliderUl = styled.ul`
  display: flex;
  @media (max-width: 1180px) {
    flex-direction: column;
  }
`;
const DescSliderLi = styled.li`
  width: 590px;
  &:nth-child(1) {
  }
  &:nth-child(2) {
    background-color: #fdf3f3;
  }
  @media (max-width: 980px) {
    &:nth-child(1) {
      width: 960px;
      height: 580px;
    }
    &:nth-child(2) {
      width: 960px;
      height: 620px;
      background-color: #fdf3f3;
    }
  }
  @media (max-width: 960px) {
    &:nth-child(1) {
      width: 100%;
    }
    &:nth-child(2) {
      width: 100%;
    }
  }
  @media (max-width: 768px) {
    &:nth-child(1) {
      height: 384px;
    }
    &:nth-child(2) {
      height: 576px;
    }
  }
`;

class DescSlider extends Component {
  DescSliderArr = [
    {
      id: 1,
      path: DescSliderImg,
      categoryImg: CategoryTitleImg,
      title: "부드럽고 달콤한 화이트크림과 알록달록한 레인보우 첵스초코의 만남",
      subtitle: "30g당 함량",
      weight: "380g",
      expirationDate: "12개월",
      calorie: "117kcal",
    },
    {
      id: 2,
      path: DescSliderImg02,
      categoryImg: CategoryTitleImg02,
      title:
        "리얼 블루베리에 통아몬드 슬라이스가 더해진 맛과 영양가득한 그래놀라",
      subtitle: "100g당 함량",
      weight: "450g",
      expirationDate: "12개월",
      calorie: "439kcal",
    },
    {
      id: 3,
      path: DescSliderImg03,
      categoryImg: CategoryTitleImg03,
      title:
        "단백질이 강화된 그래놀라에 검정약콩과 입에서 사를르 녹는 미숫가루 큐브까지",
      subtitle: "100g당 함량",
      weight: "330g",
      expirationDate: "12개월",
      calorie: "428kcal",
    },
    {
      id: 4,
      path: DescSliderImg04,
      categoryImg: CategoryTitleImg04,
      title:
        "영양 가득 그래놀라와 단백질을 담은 켈로그 프로틴 그래놀라바 고소한맛",
      subtitle: "50g당 함량",
      weight: "50g",
      expirationDate: "12개월",
      calorie: "242kcal",
    },
  ];
  descSlider;
  descSlider980;
  descSliderImg;
  descSliderImg2;

  currentCounter = 1;
  initSlider = () => {
    this.descSliderImg.style.left = 100 + "%";
  };

  excueteSlider = (idx) => {
    this.descSlider.style.left = -100 * idx + "%";
    this.descSlider980.style.top = -100 * idx + "%";

    this.currentCounter = idx;
  };
  movingPrevSlider = () => {
    this.excueteSlider(this.currentCounter - 1);
    if (this.currentCounter === -1) {
      this.excueteSlider((this.currentCounter = 3));
    }
  };
  movingNextSlider = () => {
    this.excueteSlider(this.currentCounter + 1);

    if (this.currentCounter === 4) {
      this.excueteSlider((this.currentCounter = 0));
    }
  };
  componentDidMount() {
    this.initSlider();
  }
  componentDidUpdate() {}

  render() {
    const tempLayout = (v, sliderStyle) => {
      const categoryStyle = {
        backgroundImage: `url(${v.categoryImg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      };
      return (
        <>
          <DescSliderLi>
            <DescSliderSection01 style={sliderStyle} />
          </DescSliderLi>
          <DescSliderLi>
            <Detail01TextlLayout>
              <CategoryImg style={categoryStyle} />
              <Detail01Text>{v.title}</Detail01Text>
              <Link to="/BrandAndProducts">
                <ExtensionText></ExtensionText>
              </Link>
              <DescContainer>
                <DescUl>
                  <DescLi></DescLi>
                  <DescLi></DescLi>
                  <DescLi></DescLi>
                </DescUl>
                <DescUl02>
                  <DescLi02>중량</DescLi02>
                  <DescLi02>유통기한</DescLi02>
                  <DescLi02>열량</DescLi02>
                </DescUl02>
                <LiSpan>{v.subtitle}</LiSpan>
                <DescUl03>
                  <DescLi03>{v.weight}</DescLi03>
                  <DescLi03>{v.expirationDate}</DescLi03>
                  <DescLi03>{v.calorie}</DescLi03>
                </DescUl03>
              </DescContainer>
            </Detail01TextlLayout>
          </DescSliderLi>
        </>
      );
    };
    const DescSliderGroup = this.DescSliderArr.map((v) => {
      const sliderStyle = {
        backgroundImage: `url(${v.path})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "580px",
      };

      return (
        <React.Fragment key={v.id}>
          <DescSliderUl
            className="descSliderImg"
            ref={(ref) => (this.descSliderImg = ref)}
          >
            {tempLayout(v, sliderStyle)}
          </DescSliderUl>
        </React.Fragment>
      );
    });
    const DescSliderGroup980 = this.DescSliderArr.map((v) => {
      const sliderStyle = {
        backgroundImage: `url(${v.path})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top",
        height: "580px",
      };

      return (
        <React.Fragment key={v.id}>
          <DescSliderUl
            className="descSliderImg"
            ref={(ref) => (this.descSliderImg2 = ref)}
          >
            {tempLayout(v, sliderStyle)}
          </DescSliderUl>
        </React.Fragment>
      );
    });
    return (
      <>
        <EntireDescSliderLayout>
          <DescSliderLayout ref={(ref) => (this.descSlider = ref)}>
            {DescSliderGroup}
          </DescSliderLayout>
          <DescSliderLayout980 ref={(ref) => (this.descSlider980 = ref)}>
            {DescSliderGroup980}
          </DescSliderLayout980>
          <PrevBtn onClick={this.movingPrevSlider} />
          <NextBtn onClick={this.movingNextSlider} />
        </EntireDescSliderLayout>
      </>
    );
  }
}

export default DescSlider;
