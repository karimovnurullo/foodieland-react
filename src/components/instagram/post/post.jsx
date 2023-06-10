import React, { Component } from "react";

import img1 from "../photos/image1.png";
import avatar from "../photos/karimov.JPG";
import verifed from "../photos/official.svg";
import burger from "../photos/more.svg";
import like from "../photos/like.svg";
import comment from "../photos/comment.svg";
import sent from "../photos/sent.svg";
import pavigation from "../photos/pavigation.svg";
import save from "../photos/save.svg";
import likeAvatar from "../photos/madina.jpg";

class Post extends Component {
  constructor(props) {
    super(props);
    this.img = props.img;
    this.text = props.text;
  }
  render() {
    return (
      <div class="card">
        <div class="card-header">
          <div class="left">
            <img src={avatar} alt="" />
            <div>
              <h2 class="name">karimov_nurullo</h2>
              <p>Uzbekistan, Tashkent</p>
            </div>
            {/* <i class="fa-solid fa-certificate more"></i> */}
            <img src={verifed} className="more" alt="" />
          </div>
          <div class="right">
            <img src={burger} alt="" />
          </div>
        </div>
        <div class="img_box">
          <img src={img1} class="img" alt="" />
          <img src="./assets/images/section 5/Photo Number.png" class="img_2" alt="" />
        </div>
        <div class="content_box">
          <div class="icons">
            <div class="flex">
              <img src={like} alt="" />
              <img src={comment} alt="" />
              <img src={sent} alt="" />
            </div>
            <img src={pavigation} class="Pagination" alt="" />
            <img src={save} alt="" />
          </div>
          <div class="likes">
            <img src={likeAvatar} className="liked-avatar" alt="" />
            <p>
              Liked by <span>ya_medinee</span> and <span>924,686 others</span>
            </p>
          </div>
          <p class="description">
            <span>karimov_nurullo.</span>
            {this.text}
          </p>
          <p class="date">June 10</p>
        </div>
      </div>
    );
  }
}

export default Post;
