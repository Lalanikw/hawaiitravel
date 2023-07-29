import React from "react";
import logo from "../logo-no-bg.png";
import {Link} from 'react-router-dom';
import '../App.css';

const Nav = () => {
  return (
    <nav className="nav">
      <div className="navlogo">
        {/* <img src={logo} alt="logo" width= "10%" /> */}
      </div>
      <div>
        <ul className="topnav">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Explore">Explore Hawaii</Link></li>
          <li><Link to="/Login">ContactUs</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;