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
  margin-top: 73px;
  width: 100%;
  height: 832px;
  background-size: cover;
  background-position: center;

  @media (max-width: 968px) {
    height: 380px;
  }
`;

const ImgTextLogo = styled.div`
  position: absolute;
  top: 200px;
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
    display: none;
  }
`;
const ImgTextLogo2 = styled.div`
  display: none;
  position: absolute;
  top: 200px;
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
    color: #fff;
    display: block;
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
    top: 20%;
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
    top: 20%;
  }
`;

class SliderGroup extends Component {
  state = {
    fade: false,
    background: img01,
    left: "10vw",
    top: "320px",
    color: "#fff",
    responsiveTop: "150px",
    responsiveLeft: "50%",
    transformX: "translateX(-50%)",
  };

  mainSliderRef;
  imgTextLogoRef;
  imgTextLogoRef980;
  currentCount = 1;

  tempImg = {
    img01: { id: 1, path: img01, left: "10vw", top: "320px", color: "#fff" },
    img02: { id: 2, path: img02, left: "25vw", top: "200px", color: "#ea3232" },
    img03: { id: 3, path: img03, left: "10vw", top: "200px", color: "#ea3232" },
    img04: { id: 4, path: img04, left: "10vw", top: "300px", color: "#ea3232" },
    img05: { id: 5, path: img05, left: "10vw", top: "300px", color: "#ea3232" },
  };
  resImg = {
    img01: {
      id: 1,
      path: img01,
      left: "50%",
      top: "150px",
      transformX: "translateX(-50%)",
      color: "#fff",
    },
    img02: {
      id: 2,
      path: img02,
      left: "25vw",
      top: "100px",
      transformX: "translateX(-30%)",
      color: "#ea3232",
    },
    img03: {
      id: 3,
      path: img03,
      left: "10vw",
      top: "90px",
      transformX: "translateX(0%)",
      color: "#ea3232",
    },
    img04: {
      id: 4,
      path: img04,
      left: "10vw",
      top: "100px",
      transformX: "translateX(-20%)",
      color: "#ea3232",
    },
    img05: {
      id: 5,
      path: img05,
      left: "50%",
      top: "150px",
      transformX: "translateX(-50%)",
      color: "#fff",
    },
  };

  initSlider = (idx) => {
    this.mainSliderRef.style.backgroundImage = `url(${this.state.background})`;
    this.imgTextLogoRef.style.color = this.state.color;
    this.imgTextLogoRef.style.left = this.state.left;
    this.imgTextLogoRef.style.top = this.state.top;
    if (window.innerWidth <= 980) {
      this.imgTextLogoRef980.style.left = this.state.responsiveLeft;
      this.imgTextLogoRef980.style.top = this.state.responsiveTop;
      this.imgTextLogoRef980.style.color = this.state.color;
      this.imgTextLogoRef980.style.transform = this.state.transformX;
    }
  };
  sliderStyleManger = () => {
    let contactImg = `img0${this.currentCount}`;
    this.setState({ top: this.tempImg[contactImg].top });
    this.setState({ left: this.tempImg[contactImg].left });
    this.setState({ background: this.tempImg[contactImg].path });
    this.setState({ color: this.tempImg[contactImg].color });
    if (window.innerWidth <= 980) {
      this.setState({ responsiveTop: this.resImg[contactImg].top });
      this.setState({ responsiveLeft: this.resImg[contactImg].left });
      this.setState({ transformX: this.resImg[contactImg].transformX });
      this.setState({ color: this.resImg[contactImg].color });
    }
  };
  movingPrevSlide = () => {
    this.currentCount -= 1;
    if (this.currentCount === 0) {
      this.currentCount = 5;
    }
    this.sliderStyleManger();
  };

  movingNextSlide = () => {
    this.currentCount += 1;

    if (this.currentCount === 6) {
      this.currentCount = 1;
    }
    this.sliderStyleManger();
  };

  componentDidMount() {
    this.initSlider();
  }

  componentDidUpdate() {
    this.initSlider();
  }

  render() {
    return (
      <>
        <EntireSliderContainer>
          <SliderGroupContainer>
            <SliderSectionImg
              className="selectSlider"
              ref={(ref) => (this.mainSliderRef = ref)}
            >
              <ImgTextLogo ref={(ref) => (this.imgTextLogoRef = ref)}>
                #좋은것만 드려요~
              </ImgTextLogo>
              <ImgTextLogo2 ref={(ref) => (this.imgTextLogoRef980 = ref)}>
                #좋은것만 드려요~
              </ImgTextLogo2>
            </SliderSectionImg>
          </SliderGroupContainer>

          <BtnPrev onClick={this.movingPrevSlide} />
          <BtnNext onClick={this.movingNextSlide} />
        </EntireSliderContainer>
      </>
    );
  }
}
export default SliderGroup;
