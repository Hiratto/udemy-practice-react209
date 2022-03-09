import React, { createContext, useState } from "react";

export const UserContext = createContext({});

export const UserProvider = (props) => {
  const { children } = props;

  const [useInfo, setUseInfo] = useState(null);

  return (
    <UserContext.Provider value={{ useInfo, setUseInfo }}>
      {children}
    </UserContext.Provider>
  );
};
