import React, { useContext } from "react";
import Context from "../Context";
import { Link } from "react-router-dom";

function LoginHeader() {
  const contextState = useContext(Context);
  console.log(contextState);
  // If user is not logged in:
  if (!contextState.state.username) {
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
        <p>Logged in as:{contextState.state.username}</p>
      </div>
    );
  }
}

export default LoginHeader;
