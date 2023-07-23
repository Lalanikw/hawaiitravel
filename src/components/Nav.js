import { Link } from "react-router-dom";
import React from 'react';
import logo from "../images/logo.png";

const Nav = () => {

  return (
      <nav>
        <div className="container d-flex jc-space-between">
          <div className="nav_left">
              <Link to = "/" className="logo-link">
              <img src= {logo} className="logo mt-1 ms-4" alt=""></img></Link>
          </div>
          <div className="nav-bar">
            <div className="topnav" id="myTopnav">
              <Link className="active" to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/sun">Explore</Link>
              <Link to="/Kids">For Kids</Link>
              <Link to="/order-online">Store </Link>
              <Link to="/login">Contact Us</Link>
            </div>
          </div>
        </div>
      </nav>
    );
  };

export default Nav;