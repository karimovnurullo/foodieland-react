import React from "react";
import Header from "./components/header/header";
import Home from "./components/home/home";
import Categories from "./components/categories/categories";

export default class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Home />
        <Categories />
      </>
    );
  }
}
