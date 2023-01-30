import React, { useState } from "react";

export const MyContext = React.createContext();

export const ApplicationContextProvider = ({ children }) => {
  const [profile, setProfile] = useState();

  const value = {
    profile,
    setProfile,
  };

  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};
