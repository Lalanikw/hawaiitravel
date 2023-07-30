import React from "react";
import logo from "../pages/logo.png";
import {Link} from 'react-router-dom';
import '../App.css';

const Nav = () => {
  return (
    <nav className="nav grid-2">
      <img src={logo} alt="logo"/>
      <ul className="topnav">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Explore">Explore Hawaii</Link></li>
        <li><Link to="/Login">ContactUs</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;