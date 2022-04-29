import React, { Component } from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

/*이미지 import <start>*/
import Pr1_Img from "../../img/pr1.png";
import Pr2_Img from "../../img/pr2.png";
import Pr3_Img from "../../img/pr3.png";
import Pr4_Img from "../../img/pr4.png";
/*이미지 import<end> */

const ViewProduct = styled.div`
  width: 100%;
  height: 273px;
  background-color: #fffffe;
  border-radius: 50px 0;
  overflow: hidden;
  box-shadow: 10px 5px 20px 10px #ccc;
`;
const Ul = styled.ul`
  display: flex;
  width: 80% auto;
  justify-content: center;
`;
const Li = styled.li`
  margin-top: 37px;
  margin-right: 35px;
  @media (max-width: 960px) {
    margin-right: 15px;
  }
  @media (max-width: 760px) {
    margin-right: 5px;
  }
  &:nth-child(1) {
    margin-left: 62px;
    font-size: 50px;
    font-weight: bold;
    @media (max-width: 1180px) {
      margin-top: 80px;
      font-size: 30px;
    }
    @media (max-width: 960px) {
      margin-left: 10px;
    }
    @media (max-width: 768px) {
      position: absolute;
      display: flex;
      font-size: 16px;
      top: -50px;
      left: 10vw;
    }
    @media (max-width: 680px) {
      transform: scale(80%);
      left: 8vw;
    }
  }
  &:nth-child(5) {
    margin-right: 62px;
  }
`;

const Span = styled.span`
  font-size: 20px;
  position: relative;

  @media (max-width: 1100px) {
    /* font-size: 14px; */
  }
  @media (max-width: 768px) {
    font-size: 14px;
    left: 300px;
    top: -16px;
  }
`;
const P = styled.p`
  @media (max-width: 768px) {
    position: relative;
    left: -10px;
  }
`;
const ArrowSpan = styled.span`
  font-size: 50px;
  position: relative;
  z-index: 20;
  color: #222;
  top: 7px;
  left: -3px;

  @media (max-width: 1100px) {
    top: 3px;

    font-size: 30px;
  }
  @media (max-width: 760px) {
  }
`;
const RoundDiv = styled.div`
  width: 50px;
  height: 30px;
  background-color: #fad900;
  position: absolute;
  top: -2px;
  left: 75px;
  border-radius: 30px;
  @media (max-width: 1100px) {
    width: 30px;
    height: 20px;
    left: 73px;
    top: 5px;
  }

  @media (max-width: 768px) {
    top: 0;
    left: 50px;
  }
`;
const Img = styled.div`
  width: 150px;
  height: 188px;
  background-image: url(${Pr1_Img});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  @media (max-width: 1100px) {
    width: 120px;
    height: 158px;
    margin-top: 30px;
  }
  @media (max-width: 768px) {
    margin-left: 80px;
  }
  @media (max-width: 680px) {
    margin-left: 50px;
    width: 100px;
    height: 138px;
  }
`;
const Img02 = styled.div`
  width: 150px;
  height: 188px;
  background-image: url(${Pr2_Img});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  @media (max-width: 1100px) {
    width: 120px;
    height: 158px;
    margin-top: 30px;
  }
  @media (max-width: 680px) {
    width: 100px;
    height: 138px;
  }
`;
const Img03 = styled.div`
  width: 150px;
  height: 188px;
  background-image: url(${Pr3_Img});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  @media (max-width: 1100px) {
    width: 120px;
    height: 158px;
    margin-top: 30px;
  }
  @media (max-width: 680px) {
    width: 100px;
    height: 138px;
  }
`;
const Img04 = styled.div`
  width: 150px;
  height: 188px;
  background-image: url(${Pr4_Img});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  @media (max-width: 1100px) {
    width: 120px;
    height: 158px;
    margin-top: 30px;
  }
  @media (max-width: 680px) {
    width: 100px;
    height: 138px;
  }
`;
class DisplayProd extends Component {
  render() {
    return (
      <ViewProduct>
        <Ul>
          <Li>
            켈로그<P>&#160;&#160;&#160;제품</P>
            <Link to="/BrandAndProducts">
              <Span>
                &#160;&#160;&#160;더보기 <ArrowSpan>&#x2192;</ArrowSpan>
                <RoundDiv />
              </Span>
            </Link>
          </Li>
          <Li>
            <Img />
          </Li>
          <Li>
            <Img02 />
          </Li>
          <Li>
            <Img03 />
          </Li>
          <Li>
            <Img04 />
          </Li>
        </Ul>
      </ViewProduct>
    );
  }
}

export default DisplayProd;
