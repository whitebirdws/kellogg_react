import React, { Component } from "react";
import Header from "./Header/Header";
import BodySection from "./BodySection/BodySection";
import HeaderSection from "./Header/HeaderSection";
import FooterLayout from "./Footer/FooterLayout";
import styled from "styled-components";
const MainPageContainer = styled.div``;

class MainPage extends Component {
  render() {
    return (
      <>
        <MainPageContainer>
          <Header />
          <HeaderSection />
          <BodySection />
          <FooterLayout />
        </MainPageContainer>
      </>
    );
  }
}

export default MainPage;
