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
      <section class="instagram">
        <h2 class="title">Check out @foodieland on Instagram</h2>
        <p class="subtitle">
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore{" "}
          <br /> magna aliqut enim ad minim
        </p>
        <div class="card_box">
          <Post img={img1} text={"The vegetables dishes need to have certain vitamin for those people"} />
          <Post img={img2} text={"The vegetables dishes need to have certain vitamin for those people"} />
          <Post img={img3} text={"The vegetables dishes need to have certain vitamin for those people"} />
          <Post img={img4} text={"The vegetables dishes need to have certain vitamin for those people"} />
        </div>
        <a href="https://www.instagram.com/karimov_nurullo" className="a">
          <div class="visit">
            <p>Visit Our Instagram</p>
            <i class="fa-brands fa-instagram"></i>
          </div>
        </a>
      </section>
    );
  }
}

export default Instagram;
