import React, { Component } from "react";
import styled from "styled-components";

import ChannelLogo from "./ChannelLogo";
import ChannelSns from "./ChannelSns";
import NutritionSection from "./NutritionSection";
import DescSlider from "./DescSlider";

import DisplayProd from "./DisplayProd";

const Container = styled.div`
  width: 1180px;
  margin: 0 auto;
  position: relative;
  max-width: 100%;

  @media (max-width: 968px) {
    top: -380px;
  }
  @media (max-width: 768px) {
    max-width: 465px;
  }
`;
const EmptySection = styled.div`
  width: 100%;
  height: 100px;
  background-color: #ffffff;
  @media (max-width: 1180px) {
    height: 2px;
  }
`;

class BodySection extends Component {
  render() {
    return (
      <>
        <Container>
          <DisplayProd />
          <DescSlider />
          <NutritionSection />
          <ChannelLogo />
          <ChannelSns />
          <EmptySection />
        </Container>
      </>
    );
  }
}

export default BodySection;
