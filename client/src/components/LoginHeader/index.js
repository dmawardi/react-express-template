import React, { useContext } from "react";
import Context from "../Context";
import { Link } from "react-router-dom";

function LoginHeader(props) {
  const handleLogOut = e => {
    e.preventDefault();
    console.log(props.cookies);
    props.cookies.remove("authorization");
  };

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
        <button onClick={handleLogOut} type="button" className="btn btn-info">
          Logout
        </button>
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
