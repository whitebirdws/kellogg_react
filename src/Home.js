import React, { Component } from "react";

import MainPage from "./MainPage/MainPage";
import BrandAndProducts from "./SubPage/BrandAndProducts";
import KelloggonlineShop from "./SubPage/KelloggonlineShop";
import Recipes from "./SubPage/Recipes";
import Cereal from "./SubPage/Cereal";
import BetterDays from "./SubPage/BetterDays";
import AboutUs from "./SubPage/AboutUs";

import { Route } from "react-router";
import styled from "styled-components";
const HomeContainer = styled.div``;

class Home extends Component {
  render() {
    return (
      <HomeContainer>
        <Route path="/" component={MainPage} exact={true} />
        <Route path="/BrandAndProducts" component={BrandAndProducts} />
        <Route path="/KelloggonlineShop" component={KelloggonlineShop} />
        <Route path="/Recipes" component={Recipes} />
        <Route path="/CerealAndNutrition" component={Cereal} />
        <Route path="/BetterDays" component={BetterDays} />
        <Route path="/AboutUs" component={AboutUs} />
      </HomeContainer>
    );
  }
}

export default Home;
