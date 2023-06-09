import React from "react";
import Header from "./components/header/header";
import Home from "./components/home/home";

export default class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Home />
      </>
    );
  }
}
