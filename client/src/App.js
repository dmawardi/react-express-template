import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./components/MyProvider";
// Context Provider
import MyProvider from "./components/MyProvider";
// Components
import Navbar from "./components/Navbar";
import Form from "./components/Form";
// Router
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
// Cookies
import { withCookies } from "react-cookie";

class App extends Component {
  render() {
    console.log(this.props.cookies.cookies);
    return (
      <MyProvider>
        <Router>
          <div className="App">
            {/* Navbar Router section */}
            <Switch>
              <Route
                path="/"
                component={() => {
                  return <Navbar cookies={this.props.cookies} />;
                }}
              ></Route>
            </Switch>
            {/* Body Router section */}
            <Switch>
              <Route
                exact
                path="/"
                component={() => {
                  return (
                    <header className="App-header">
                      <img src={logo} className="App-logo" alt="logo" />
                      <p>
                        Edit <code>src/App.js</code> and save to reload.
                      </p>
                      <p>{this.props.cookies.toString()}</p>
                      <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Learn React
                      </a>
                    </header>
                  );
                }}
              />
              <Route
                path="/login"
                component={() => {
                  return <Form cookies={this.props.cookies} />;
                }}
              />
            </Switch>
          </div>
        </Router>
      </MyProvider>
    );
  }
}

// Export encased withCookies to provide access to cookies throughout app
export default withCookies(App);
