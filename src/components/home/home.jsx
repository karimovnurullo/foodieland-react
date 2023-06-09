import React, {Component} from "react";

import img1 from "./photos/image-1.png";
import img2 from "./photos/image-2.png";
import img3 from "./photos/Timer.png";
import img4 from "./photos/ForkKnife.png";
import img5 from "./photos/avatar.png";
import img6 from "./photos/PlayCircle.png";
import img7 from "./photos/Mask-Group.png";


import "./home.scss"
class Home extends Component {
   render() { 
      return (
         <div class="home">
        <div class="radius">
            <div class="left">
                <div class="island">
                    <img src={img1} alt="" />
                    <p>Hot Recipes</p>
                </div>
                <h1>Spicy delicious chicken wings</h1>
                <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqut enim ad minim </p>
                <div class="island_box">
                    <div class="island">
                        <img src={img3} alt="" />
                        <p>Hot Recipes</p>
                    </div>
                    <div class="island">
                        <img src={img4} alt="" />
                        <p>Hot Recipes</p>
                    </div>
                </div>
                <div class="flex_box">
                    <div class="profile">
                        <img src={img5} alt="" />
                        <div>
                            <h3 class="name">John Smith</h3>
                            <p>15 March 2022</p>
                        </div>
                    </div>
                    <div class="view">
                        <p>View Recipes</p>
                        <img src={img6} alt="" />
                    </div>
                </div>
                <img src={img2} class="absolute" alt="" />
            </div>
            <div class="right">
                <img src={img7} alt="" />
            </div>
        </div>
    </div>
      )
   }
}
 
export default Home;