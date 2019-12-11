import React, { Component } from "react";
import LoginHeader from "../LoginHeader";
import { Link } from "react-router-dom";
import axios from "axios";

class Navbar extends Component {
  getAPITest = () => {
    console.log("Getting API Test\nCookies: ");
    console.log(this.props.cookies);
    axios.get("auth/").then(response => {
      console.log("Authentication response", response.data);
    });
  };

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          React Template
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <button onClick={this.getAPITest}>Get Test</button>
            </li>
            <LoginHeader cookies={this.props.cookies} />
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
