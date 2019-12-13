// Import dependencies
import React, { Component } from "react";
import { ContextProvider } from "../Context";

// My Context provider
class MyProvider extends Component {
  // Below are state variables available context-wide
  state = {
    isLoggedIn: false,
    userID: false
  };

  render() {
    return (
      // Accessible using context as object with three values: {state, setUsername(), setUserId()}
      <ContextProvider
        value={{
          state: this.state,
          // Function to set isloggedin to true
          toggleLogin: newNameToSet => {
            this.setState({
              isLoggedIn: true
            });
          },
          // Function to set isloggedin to false
          toggleLogout: newNameToSet => {
            this.setState({
              isLoggedIn: false
            });
          }
        }}
      >
        {/* Place all children within context */}
        {this.props.children}
      </ContextProvider>
    );
  }
}

export default MyProvider;
