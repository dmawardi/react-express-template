import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./components/MyProvider";
import MyProvider from "./components/MyProvider";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { withCookies } from "react-cookie";

class App extends Component {
  render() {
    console.log(this.props.cookies.cookies);
    return (
      <MyProvider>
        <Router>
          <div className="App">
            <Switch>
              <Route
                path="/"
                component={() => {
                  return <Navbar cookies={this.props.cookies} />;
                }}
              ></Route>
            </Switch>
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

export default withCookies(App);
