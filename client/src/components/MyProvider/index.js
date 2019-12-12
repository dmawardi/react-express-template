import React, { Component } from "react";
import { ContextProvider } from "../Context";

// My Context provider
class MyProvider extends Component {
  // Below are state variables available context-wide
  state = {
    isLoggedIn: false,
    userID: false
  };

  componentDidMount() {
    // const [cookies, setCookie, removeCookie] = useCookies(["cookie-name"]);
    // console.log("printing cookies on mount: ", cookies);
  }

  render() {
    // console.log("Rendering MyProvider. Printing cookies", this.props);
    return (
      // Accessible using context as object with three values: {state, setUsername(), setUserId()}
      <ContextProvider
        value={{
          state: this.state,
          toggleLogin: newNameToSet => {
            this.setState({
              isLoggedIn: true
            });
          },
          toggleLogout: newNameToSet => {
            this.setState({
              isLoggedIn: false
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
