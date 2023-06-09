import React from "react";
import Header from "./components/header/header";
import Home from "./components/home/home";
import Categories from "./components/categories/categories";
import Recipes from "./components/recipes/recipes";
import Shef from "./components/shef/shef";
import Instagram from "./components/instagram/instagram";

export default class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Home />
        <Categories />
        <Recipes />
        <Shef />
        <Instagram />
      </>
    );
  }
}
