import React, { Component } from "react";

import img1 from "../photos/image1.png";

class Post extends Component {
  constructor(props) {
    super(props);
    this.text = props.text;
  }
  render() {
    return (
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
    );
  }
}

export default Post;
