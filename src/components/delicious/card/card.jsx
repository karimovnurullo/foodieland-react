import React, { Component } from "react";
import timer from "../photos/Timer.png";
import knife from "../photos/ForkKnife.png";
import img1 from "../photos/image1.png";
import img2 from "../photos/image2.png";

// export default function Card({ one, two }) {
//   return (
//     <div class="card">
//       <div class="img_box">
//         <img src={one} class="img" alt="" />
//         <img src={two} class="like" alt="" />
//       </div>
//       <div class="content_box">
//         <h3 class="title">Fresh Lime Roasted Salmon with Ginger Sauce</h3>
//         <div class="flex">
//           <div>
//             <img src={timer} alt="" />
//             <p>30 Minutes</p>
//           </div>
//           <div>
//             <img src={knife} alt="" />
//             <p>Fish</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

class Card extends Component {
  constructor(props) {
    super(props);
    this.img = props.img;
    this.like = props.like;
  }
  render() {
    return (
      <div class="card">
        <div class="img_box">
          <img src={this.img} class="img" alt="" />
          <img src={this.like} class="like" alt="" />
        </div>
        <div class="content_box">
          <h3 class="title">Fresh Lime Roasted Salmon with Ginger Sauce</h3>
          <div class="flex">
            <div>
              <img src={timer} alt="" />
              <p>30 Minutes</p>
            </div>
            <div>
              <img src={knife} alt="" />
              <p>Fish</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
