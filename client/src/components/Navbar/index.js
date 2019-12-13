// Import dependencies
import React, { Component } from "react";
import LoginHeader from "../LoginHeader";
import { Link } from "react-router-dom";
import Context from "../Context";

// Navbar
class Navbar extends Component {
  // Check on cookie presence and toggle login status if found
  checkCurrentLoginStatusBasedOnCookie() {
    // If it's found that there is a cookie
    if (this.props.cookies.get("authorization")) {
      // Toggle login status
      this.context.toggleLogin();
    }
  }

  componentDidMount() {
    // Before mounting check login status
    this.checkCurrentLoginStatusBasedOnCookie();
  }

  render() {
    // Check login status whenever rendering
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        {/* Make brand redirect to home */}
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
          {/* Link List */}
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>

            {/* Login Display status */}
            <LoginHeader cookies={this.props.cookies} />
          </ul>
        </div>
      </nav>
    );
  }
}

// Make the navbar have access to the context
Navbar.contextType = Context;

export default Navbar;
