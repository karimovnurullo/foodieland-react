import React, { Component } from "react";

import img1 from "./photos/image1.png";
import img2 from "./photos/image2.png";
import img3 from "./photos/image3.png";
import img4 from "./photos/image4.png";
import img5 from "./photos/image5.png";
import img6 from "./photos/image6.png";

import "./categories.scss";
class Categories extends Component {
  render() {
    return (
      <div class="categories">
        <div class="row">
          <h2>Categories</h2>
          <div>
            <p>View All Categories</p>
          </div>
        </div>
        <div class="card_box">
          <div class="card">
            <img src={img1} alt="" />
            <p>Breakfast</p>
          </div>
          <div class="card">
            <img src={img2} alt="" />
            <p>Breakfast</p>
          </div>
          <div class="card">
            <img src={img3} alt="" />
            <p>Breakfast</p>
          </div>
          <div class="card">
            <img src={img4} alt="" />
            <p>Breakfast</p>
          </div>
          <div class="card">
            <img src={img5} alt="" />
            <p>Breakfast</p>
          </div>
          <div class="card">
            <img src={img6} alt="" />
            <p>Breakfast</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Categories;
