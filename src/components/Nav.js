import React, { Component } from "react";
import {Link} from 'react-router-dom';
import '../App.css';
import logo from "../pages/logo.png";
import './Nav.css';

class Nav extends Component {

  state = { clicked: false };
  
  handleClick = () => {
    this.setState ({clicked:!this.state.clicked})
  }
render () {
  return (
    <>
    <nav className="nav">
      <div><ul id="topnav"
      className={this.state.clicked ?
      "#topnav active" : "#topnav"}>
        <li><Link to="/" onClick={this.handleClick}>Home</Link></li>
        <li><Link to="/Explore" onClick={this.handleClick}>Explore-Hawaii </Link></li>
        <li><Link to="/Login" onClick={this.handleClick}>ContactUs</Link></li>
      </ul>
      </div>
      <div id="mobile" onClick={this.handleClick}>
        <i id="bar" className= {this.state.clicked ?
        "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <div className="logo-text">
          <h1>Hawaii Landing</h1>
        <img src={logo} alt="site-logo"/>
      </div>
    </nav>
    </>
  );
};
};

export default Nav;