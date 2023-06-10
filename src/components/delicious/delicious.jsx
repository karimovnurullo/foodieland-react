import react, { Component } from "react";
import Card from "../recipes/card/card";

import img1 from "../recipes/photos/image1.png";
import img2 from "../recipes/photos/image2.png";
import img3 from "../recipes/photos/image3.png";
import img4 from "../recipes/photos/image4.png";
import img5 from "../recipes/photos/image5.png";
import img6 from "../recipes/photos/image6.png";
import img7 from "../recipes/photos/image7.png";
import img8 from "../recipes/photos/image8.png";
import img9 from "../recipes/photos/image9.png";
import like from "../recipes/photos/like.png";
import liked from "../recipes/photos/liked.png";
import "../recipes/recipes.scss";
import "./delicious.scss";

class Delicious extends Component {
  render() {
    return (
      <section class="recipes delicious">
        <h2 class="title">Simple and tasty recipes</h2>
        <p class="subtitle">
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut <br /> labore et
          dolore magna aliqut enim ad minim{" "}
        </p>
        <div class="card_box">
          <Card img={img1} like={like} />
          <Card img={img2} like={liked} />
          <Card img={img3} like={like} />
          <Card img={img4} like={like} />
          <Card img={img5} like={liked} />
          <Card img={img7} like={liked} />
          <Card img={img8} like={like} />
          <Card img={img9} like={liked} />
        </div>
      </section>
    );
  }
}

export default Delicious;
