import React, { createContext } from "react";
import useHooks from "./useHooks";
export const authContext = createContext();
const Context = ({ children }) => {
  const value = useHooks();
  return <authContext.Provider value={value}>{children}</authContext.Provider>;
};

export default Context;
