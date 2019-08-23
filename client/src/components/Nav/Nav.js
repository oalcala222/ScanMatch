import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
class Nav extends Component {
  state = {
  }
  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }

  resize() {
    let currentHideNav = (window.innerWidth <= 768);
    if (currentHideNav !== this.state.hideNav) {
      this.setState({ hideNav: currentHideNav });
    }
  }
  render() {
    if (!this.state.hideNav) {
      return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark row justify-content-around">
          <Link className="navbar-brand" to="/">
            Scan Match
      </Link>
          <div className="col-6-md">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  to="/"
                  className={
                    window.location.pathname === "/" || window.location.pathname === "/about"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  [ About ]
            </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/discover"
                  className={window.location.pathname === "/discover" ? "nav-link active" : "nav-link"}
                >
                  [ Discover ]
            </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/search"
                  className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}
                >
                  [ Search ]
            </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/scanning"
                  className={window.location.pathname === "/scanning" ? "nav-link active" : "nav-link"}
                >
                  [ Scan ]
            </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-2">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  to="/signin"
                  className="nav-link"
                >[Sign In]</Link>
              </li>
            </ul>
          </div>
        </nav>
      );
    } else {
      return (<nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">
          Scan Match
        </Link>
        <div class="dropdown">
          <button className="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Navigation
  </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">

            <Link
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/about"
                  ? "nav-link active black"
                  : "nav-link black"
              }
            >
              [ About ]
            </Link>
            <Link
              to="/discover"
              className={window.location.pathname === "/discover" ? "nav-link active black" : "nav-link black"}
            >
              [ Discover ]
            </Link>
            <Link
              to="/search"
              className={window.location.pathname === "/search" ? "nav-link active black" : "nav-link black"}
            >
              [ Search ]
            </Link>
            <Link
              to="/scanning"
              className={window.location.pathname === "/scanning" ? "nav-link active black" : "nav-link black"}
            >
              [ Scan ]
            </Link></div>
        </div>
        <div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to="/signin"
                className="nav-link"
              >[Sign In]</Link>
            </li>
          </ul>
        </div>
      </nav>
      )
    }
  }
}

export default Nav;