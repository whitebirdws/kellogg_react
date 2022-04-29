import React, { Component } from "react";
import styled from "styled-components";
const TextDeco = styled.div``;
const TextSpan = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: #272626;
`;

const ArrowSpan = styled.span`
  font-size: 50px;
  position: relative;
  z-index: 2;
  top: 5px;
  color: #222;
`;
const RoundDiv = styled.div`
  width: 50px;
  height: 30px;
  background-color: #fad900;
  position: absolute;
  z-index: -1;
  top: 3vh;
  left: -2px;
  border-radius: 30px;
`;
class ExtensionText extends Component {
  render() {
    return (
      <TextDeco>
        <TextSpan>더보기</TextSpan>

        <ArrowSpan>
          &#x2192; <RoundDiv />
        </ArrowSpan>
      </TextDeco>
    );
  }
}

export default ExtensionText;
