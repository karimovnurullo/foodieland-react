import React, { Component } from "react";
import Post from "./post/post";

import img1 from "./photos/image1.png";
import img2 from "./photos/image2.png";
import img3 from "./photos/image3.png";
import img4 from "./photos/image4.png";

import "./instagram.scss";

class Instagram extends Component {
  render() {
    return (
      <section class="section_5">
        <h2 class="title">Check out @foodieland on Instagram</h2>
        <p class="subtitle">
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore{" "}
          <br /> magna aliqut enim ad minim
        </p>
        <div class="card_box">
          {/* <Post text={"Sasasas"} /> */}
          <div class="card">
            <div class="card-header">
              <div class="left">
                <img src={img1} alt="" />
                <div>
                  <h2 class="name">Foodieland.</h2>
                  <p>Tokyo, Japan</p>
                </div>
                <img src="./assets/images/section 5/Official Icon.png" class="more" alt="" />
              </div>
              <div class="right">
                <img src="./assets/images/section 5/burger icon.png" alt="" />
              </div>
            </div>
            <div class="img_box">
              <img src="./assets/images/section 5/image 1.png" class="img" alt="" />
              <img src="./assets/images/section 5/Photo Number.png" class="img_2" alt="" />
            </div>
            <div class="content_box">
              <div class="icons">
                <div class="flex">
                  <img src="./assets/images/section 5/Like.png" alt="" />
                  <img src="./assets/images/section 5/Comment.png" alt="" />
                  <img src="./assets/images/section 5/Messanger.png" alt="" />
                </div>
                <img src="./assets/images/section 5/Pagination.png" class="Pagination" alt="" />
                <img src="./assets/images/section 5/Save.png" alt="" />
              </div>
              <div class="likes">
                <img src="./assets/images/section 5/like avatar.png" alt="" />
                <p>
                  Liked by <span>craig_love</span> and <span>44,686 others</span>
                </p>
              </div>
              <p class="description">
                <span>Foodieland.</span> The vegetables dishes need to have certain vitamin for those people
              </p>
              <p class="date">September 19</p>
            </div>
          </div>
        </div>
        <a href="#">
          <div class="a">
            <p>Visit Our Instagram</p>
            <img src="./assets/images/section 5/instagram.png" alt="" />
          </div>
        </a>
      </section>
    );
  }
}

export default Instagram;
