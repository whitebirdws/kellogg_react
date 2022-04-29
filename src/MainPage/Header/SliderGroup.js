import React, { Component } from "react";
import styled from "styled-components";

import img01 from "../../img/desktop_main2.png";
import img02 from "../../img/desktop_main3.png";
import img03 from "../../img/desktop_main1.png";
import img04 from "../../img/desktop_main0.png";
import img05 from "../../img/desktop_main4.png";

import btnNext from "../../img/btn_visual_next.png";
import btnPrev from "../../img/btn_visual_prev.png";

const EntireSliderContainer = styled.div`
  position: relative;
`;
const SliderGroupContainer = styled.div`
  position: relative;
  width: 100%;
  height: 824px;
`;
const SliderSectionImg = styled.div`
  position: absolute;
  top: 73px;
  width: 100%;
  height: 832px;
  background-size: cover;
  background-position: center;

  @media (max-width: 968px) {
    width: 100%;
    height: 380px;
  }
`;

const ImgTextLogo = styled.div`
  position: absolute;
  top: 230px;
  left: 30vw;
  font-size: 3em;
  color: #ea3232;
  font-weight: 600;
  font-family: Salsa-Regular;
  @media (max-width: 1780px) {
    top: 20%;
  }
  @media (max-width: 1500px) {
    text-shadow: 2px 2px 2px gray;
  }
  @media (max-width: 968px) {
    font-size: 20px;
  }
  @media (max-width: 768px) {
  }
`;

const BtnPrev = styled.div`
  position: absolute;
  left: 10px;
  top: 50%;
  width: 30px;
  height: 30px;
  cursor: pointer;
  background-image: url(${btnPrev});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: 968px) {
    top: 30%;
  }
`;

const BtnNext = styled.div`
  position: absolute;

  right: 10px;
  top: 50%;
  width: 30px;
  height: 30px;
  cursor: pointer;
  background-image: url(${btnNext});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: 968px) {
    top: 30%;
  }
`;

class SliderGroup extends Component {
  state = {
    fade: false,
    ImgArr: [
      { id: 1, path: img01, resPath: img01, title: "#좋은것만 드려요~" },
      { id: 2, path: img02, resPath: img02, title: "#좋은것만 드려요~" },
      { id: 3, path: img03, resPath: img03, title: "#좋은것만 드려요~" },
      { id: 4, path: img04, resPath: img04 },
      { id: 5, path: img05, resPath: img05, title: "#좋은것만 드려요~" },
      { id: 6, path: img01, resPath: img01, title: "#좋은것만 드려요~" },
      { id: 7, path: img02, resPath: img02, title: "#좋은것만 드려요~" },
    ],
  };

  mainSlider;
  subSlider;
  entireContainer;
  prevButton;
  nextButton;
  textLogo;
  currentCount = 0;
  tempArr = [];
  initSlider = () => {
    for (let i = 0; i < 6; i++) {
      document.querySelectorAll(".selectSlider")[i].style.left = 100 * i + "%";
    }
  };

  executeMovingSlide = (idx) => {
    this.mainSlider.style.left = idx * -100 + "%";

    this.currentCount = idx;
  };

  movingPrevSlide = () => {
    this.executeMovingSlide(this.currentCount - 1);

    if (this.currentCount === -1) {
      this.executeMovingSlide(this.currentCount + 6);
      this.currentCount = 6;

      console.log("변화:" + this.currentCount);
    }

    console.log(this.mainSlider.style.left);
  };

  movingNextSlide = () => {
    this.executeMovingSlide(this.currentCount + 1);

    console.log(this.mainSlider.classList);
    if (this.currentCount === 6) {
      this.executeMovingSlide(this.currentCount - 6);
      this.currentCount = 0;
    } else if (this.currentCount > 6) {
      this.currentCount = 0;
    }
    console.log(this.mainSlider.style.left);
  };

  sliderImg = this.state.ImgArr.map((v) => {
    const style = {
      backgroundImage: `url(${v.path})`,
      backgroundRepeat: "no-repeat",
    };

    let colorStyle = {};

    switch (v.id) {
      case 3:
        colorStyle = {
          top: "10%",
        };
        break;
      case 5:
        colorStyle = {
          left: "60vw",
        };
        break;
      case 6:
        if (window.innerWidth <= 968) {
          colorStyle = {
            top: "50%",
            transform: "translateY(-50%)",
            color: "#ffffff",
          };
        } else {
          colorStyle = {
            top: "40%",
            transform: "translateY(-40%)",
            color: "#ffffff",
          };
        }

        break;
      default:
        colorStyle = { color: " #d20b2f" };
    }

    return (
      <SliderSectionImg
        key={v.id}
        className="selectSlider"
        style={style}
        ref={(ref) => (this.subSlider = ref)}
      >
        {v.id ? (
          <ImgTextLogo style={colorStyle}>{v.title}</ImgTextLogo>
        ) : (
          <ImgTextLogo>{v.title}</ImgTextLogo>
        )}
      </SliderSectionImg>
    );
  });

  IntervalTimer;
  Timeout;
  timeCount = 1;
  componentDidMount() {
    this.initSlider();
  }

  componentWillUnmount() {}

  render() {
    return (
      <>
        <EntireSliderContainer ref={(ref) => (this.entireContainer = ref)}>
          <SliderGroupContainer ref={(ref) => (this.mainSlider = ref)}>
            {this.sliderImg}
          </SliderGroupContainer>

          <BtnPrev
            onClick={this.movingPrevSlide}
            ref={(ref) => (this.prevButton = ref)}
          ></BtnPrev>
          <BtnNext
            onClick={this.movingNextSlide}
            ref={(ref) => (this.nextButton = ref)}
          />
        </EntireSliderContainer>
      </>
    );
  }
}
export default SliderGroup;
