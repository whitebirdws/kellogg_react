import React, { Component } from "react";
import styled from "styled-components";

import SliderGroup from "./SliderGroup";
const HeaderSliderContainer = styled.div`
  width: 1800px;
  position: relative;
  margin: 0 auto;
  overflow: hidden;
  @media (max-width: 1900px) {
    width: 100%;
  }

  @media (max-width: 500px) {
    min-width: 465px;
  }
`;
class HeaderSection extends Component {
  render() {
    return (
      <HeaderSliderContainer>
        <SliderGroup />
      </HeaderSliderContainer>
    );
  }
}

export default HeaderSection;
