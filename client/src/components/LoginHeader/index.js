// Import dependencies
import React, { useContext } from "react";
import Context from "../Context";
import { Link } from "react-router-dom";

// Login Header
function LoginHeader(props) {
  const contextState = useContext(Context);
  console.log("props for login header", props);

  // logout handler
  const handleLogOut = e => {
    e.preventDefault();
    console.log(props.cookies);
    props.cookies.remove("authorization");
    contextState.toggleLogout();
  };

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
    // Else, display Logged in info and Log out button
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
