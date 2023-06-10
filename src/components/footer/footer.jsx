import React, { Component } from "react";

import logo from "../header/logo.png";

import "./footer.scss";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div class="flex">
          <div class="top">
            <img src={logo} alt="" />
            <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, </p>
          </div>
          <div class="footer_nav">
            <a href="#">Recipes</a>
            <a href="#">Blog</a>
            <a href="#">Contact</a>
            <a href="#">About us</a>
          </div>
        </div>
        <hr />
        <div class="flex_2">
          <p>
            © 2023 Flowbase. Created by{" "}
            <span>
              <a href="https://www.nurullokarimov.uz/" target="_blank">
                nurullokarimov.uz
              </a>
            </span>
          </p>
          <div class="links">
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-instagram"></i>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
