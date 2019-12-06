import React, { useContext } from "react";
import Context from "../Context";

function LoginHeader() {
  const contextState = useContext(Context);
  console.log(contextState);
  return (
    <div>
      <p>Name:{contextState.state.username}</p>
    </div>
  );
}

export default LoginHeader;
