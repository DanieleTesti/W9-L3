import React, { Component } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

class MyNavBar extends Component {
  render() {
    return (
      <div>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css"
          integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
          integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <nav
          className="navbar navbar-expand-lg navbar-dark"
          style={{ backgroundColor: "#221f1f" }}
        >
          <a className="navbar-brand" href="#">
            <img src={logo} style={{ width: "100px", height: "55px" }} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <Link className="nav-link font-weight-bold" to="/Home">
                Home
              </Link>
              <Link className="nav-link font-weight-bold" to="/TvSeries">
                Tv Series
              </Link>
              <Link className="nav-link font-weight-bold" to="">
                Movies
              </Link>
              <Link className="nav-link font-weight-bold" to="/*">
                Recently Added
              </Link>
              <Link className="nav-link font-weight-bold" to="/*">
                My List
              </Link>
            </ul>
            <i className="fa fa-search icons" />
            <div id="kids">KIDS</div>
            <i className="fa fa-bell icons" />
            <i className="fa fa-user icons" />
          </div>
        </nav>
      </div>
    );
  }
}
export default MyNavBar;
