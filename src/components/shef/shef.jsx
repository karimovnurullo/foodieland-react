import React, { Component } from "react";

import img from "./img.png";

import "./shef.scss";

class Shef extends Component {
  render() {
    return (
      <section class="shef">
        <div>
          <h2>Everyone can be a chef in their own kitchen</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do br eiusmod tempor incididunt ut labore et
            dolore magna aliqut enim ad minim
          </p>
          <a href="#">Learn More</a>
        </div>
        <img src={img} alt="" />
      </section>
    );
  }
}

export default Shef;
