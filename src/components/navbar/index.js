import React, { Component , Fragment } from 'react';
import './style.css'
import {Link} from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
library.add(faBars);
class Nav extends Component {
  render(){
  /*
  "navbar-toggler-icon"
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <div className="row">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="col-lg-8">
    <img src="logo.png" width="150" height="80" />
  </div>
  <div className="col-lg-4">
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <Link className="nav-link" to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">About</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/portofolio">Portofolio</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/services">Services</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/price">Price</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/team">Team</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/contact">Contact</Link>
      </li>
    </ul>
  </div>
  </div>
  </div>
  </div>
</nav>
);
*/
return(
  <div className="Nav">
      <nav className="navbar navbar-expand-lg navbar bg" id="navone">
      <div className="container">
      <img src="logo.png" width="150" height="80" />
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"><FontAwesomeIcon className="navtwo" icon="bars" /></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav ml-auto">
    <li className="nav-item">
        <Link className="nav-link" to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">About</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/portofolio">Portofolio</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/services">Services</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/price">Price</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/team">Team</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/contact">Contact</Link>
      </li>
    </ul>
    </div>
  </div>
</nav>
    </div>
  );
  }
}

export default Nav;