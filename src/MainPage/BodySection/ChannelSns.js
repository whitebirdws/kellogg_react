import React, { Component } from "react";
import styled from "styled-components";

import youtubeImg from "../../img/img_youtube.jpg";

import instaImg01 from "../../img/img_Instagram_1.jpg";
import instaImg02 from "../../img/img_Instagram_2.jpg";

import blogImg01 from "../../img/img_naver_blog_1.png";
import blogImg02 from "../../img/img_naver_blog_2.jpg";

const SnsMenuLayout = styled.div`
  width: 100%;
  height: auto;
  margin-top: 18px;
  display: flex;
  background-color: white;
  @media (max-width: 1200px) {
    height: 250px;
  }
`;

const SnsGridContainer = styled.div`
  width: 100%;

  display: grid;
  grid-gap: 20px;
  grid-template-areas: "main  sub00 sub01" "main sub02 sub03";
  grid-template-columns: 700px 1fr 1fr;
  grid-template-rows: 200px 200px;

  @media (max-width: 1200px) {
    grid-gap: 0.85vw;
    grid-template-areas: "main  main main" "sub00 sub01 sub02";
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 300px 300px;
  }
  @media (max-width: 968px) {
    min-width: 380px;
    grid-template-rows: 300px 200px;
  }
`;

const ImgDiv01 = styled.div`
  border: 1px solid #222;
  grid-area: main;
  background-color: aliceblue;
  background-image: url(${youtubeImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
const ImgDiv02 = styled.div`
  min-height: 150px;
  border: 1px solid #222;
  grid-area: sub00;
  background-color: aliceblue;
  background-image: url(${instaImg01});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
const ImgDiv03 = styled.div`
  min-height: 430px;
  min-height: 150px;
  border: 1px solid #222;
  grid-area: sub01;
  background-color: aliceblue;
  background-image: url(${instaImg02});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
const ImgDiv04 = styled.div`
  min-height: 430px;
  min-height: 150px;
  border: 1px solid #222;
  grid-area: sub02;
  background-color: aliceblue;
  background-image: url(${blogImg01});
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;
`;
const ImgDiv05 = styled.div`
  border: 1px solid #222;
  grid-area: sub03;
  background-color: aliceblue;
  background-image: url(${blogImg02});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

class ChannelSns extends Component {
  render() {
    return (
      <SnsMenuLayout>
        <SnsGridContainer>
          <ImgDiv01 />
          <ImgDiv02 />
          <ImgDiv03 />
          <ImgDiv04 />
          <ImgDiv05 />
        </SnsGridContainer>
      </SnsMenuLayout>
    );
  }
}

export default ChannelSns;
