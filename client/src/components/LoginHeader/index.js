import React, { useContext } from "react";
import Context from "../Context";
import { Link } from "react-router-dom";

function LoginHeader(props) {
  const contextState = useContext(Context);
  console.log("props for login header", props);

  // If it's found that there is a cookie
  // if (props.cookies.get("authorization")) {
  //   // Toggle login status
  //   contextState.toggleLoginStatus();
  // }

  console.log(props.cookies.get("authorization"));

  const handleLogOut = e => {
    e.preventDefault();
    console.log(props.cookies);
    props.cookies.remove("authorization");
    contextState.toggleLogout();
  };

  console.log(contextState);
  // If user is not logged in:
  if (!contextState.state.isLoggedIn) {
    return (
      <div>
        {/* Display Register and login buttons */}
        <Link to="/register">
          <button type="button" className="btn btn-warning">
            Register
          </button>
        </Link>

        <Link to="/login">
          <button type="button" className="btn btn-info">
            Login
          </button>
        </Link>
      </div>
    );
    // Else, display Logged in as and Log out button
  } else {
    return (
      <div>
        <p>Logged in.</p>
        <button onClick={handleLogOut} type="button" className="btn btn-info">
          Logout
        </button>
      </div>
    );
  }
}

export default LoginHeader;
