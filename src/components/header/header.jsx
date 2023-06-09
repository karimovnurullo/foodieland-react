import React, {Component} from 'react';
import logo from './logo.png';
import "./header.scss";

class Header extends Component {
   render() { 
      return (
         <div className="header" id="header">
            <img src={logo} alt="" />
            <nav className="nav">
               <a href="#home">Home</a>
               <a href="#recipes">Recipes</a>
               <a href="#blog">Blog</a>
               <a href="#contact">Contact</a>
               <a href="#about">About us</a>
            </nav>
            <div className="social">
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-instagram"></i>
            </div>
            <i class="fa-solid fa-bars menu"></i>
         </div>
      );
   }
}
 

export default Header;