import React from "react";
import { Link } from "react-router-dom";
import logo from "../pages/Img/Logo.png"

function Header(){
     return(
        <header className="header">
          <img alt=" " src={logo} />
          <nav id='nav'>
            <Link id="nav-nav"to="/About">About Us</  Link>
            <Link id="nav-nav" to="/Blog">Blog</Link>
            <Link id="nav-nav" to="/Contact">Contact Us</Link>
          </nav>
          <a href=" " id="sign">Sign up</a>
          <a href=" " id="login">Login</a>
        
        </header>
     );
}

export default Header;