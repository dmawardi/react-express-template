import React from "react";

// Create context
const Context = React.createContext({});

// If destructured allow these values to be taken
export const ContextProvider = Context.Provider;
export const ContextConsumer = Context.Consumer;

// If not, export the entire context object
export default Context;
