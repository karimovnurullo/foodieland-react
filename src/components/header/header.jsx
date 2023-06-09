import React, {Component} from 'react';
import logo from './logo.png';
import "./header.scss";
class Header extends Component {
   render() { 
      return (
         <div className="header" id="header">
            <img src={logo} alt="" />
            <nav className="nav">
               <a href="#">Home</a>
               <a href="#">Recipes</a>
            </nav>
         </div>
      );
   }
}
 
export default Header;