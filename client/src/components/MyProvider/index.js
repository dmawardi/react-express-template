import React, { Component } from "react";
import { ContextProvider } from "../Context";

// My Context provider
class MyProvider extends Component {
  // Below are state variables available context-wide
  state = {
    username: "Bas Routen",
    userID: false
  };

  render() {
    return (
      // Accessible using context as object with three values: {state, setUsername(), setUserId()}
      <ContextProvider
        value={{
          state: this.state,
          setUsername: newNameToSet => {
            this.setState({
              username: newNameToSet
            });
          },
          setUserId: newIdToSet => {
            this.setState({
              userID: newIdToSet
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
