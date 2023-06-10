import React, { Component } from "react";

import "./inbox.scss";

class Inbox extends Component {
  render() {
    return (
      <section class="section_7">
        <div class="box">
          <h2 class="title">Deliciousness to your inbox</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor <br /> incididunt ut labore et
            dolore magna aliqut enim ad minim{" "}
          </p>
          <div class="email">
            <input type="email" name="" class="input" placeholder="Your email address..." id="" />
            <input type="submit" class="submit" value="Subscribe" />
          </div>
        </div>
      </section>
    );
  }
}

export default Inbox;
