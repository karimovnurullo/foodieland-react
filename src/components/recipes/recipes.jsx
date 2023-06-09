import react, { Component } from "react";
import Card from "./card/card";

import img1 from "./photos/image1.png";
import img2 from "./photos/image2.png";
import img3 from "./photos/image3.png";
import img4 from "./photos/image4.png";
import img5 from "./photos/image5.png";
import img6 from "./photos/image6.png";
import img7 from "./photos/image7.png";
import img8 from "./photos/image8.png";
import img9 from "./photos/image9.png";
import like from "./photos/like.png";
import liked from "./photos/liked.png";
import timer from "./photos/Timer.png";
import knife from "./photos/ForkKnife.png";
import ads from "./photos/ads-background.png";

import "./recipes.scss";

class Recipes extends Component {
  render() {
    return (
      <section class="section_3">
        <h2 class="title">Simple and tasty recipes</h2>
        <p class="subtitle">
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut <br /> labore et
          dolore magna aliqut enim ad minim{" "}
        </p>
        <div class="card_box">
          <Card img={img1} like={like} />
          <Card img={img2} like={like} />
          <Card img={img3} like={like} />
          <Card img={img4} like={like} />
          <Card img={img5} like={like} />
          <div class="card ads">
            <img src={img6} alt="" />
          </div>
          <Card img={img7} like={like} />
          <Card img={img8} like={like} />
          <Card img={img9} like={like} />
        </div>
      </section>
    );
  }
}

export default Recipes;
