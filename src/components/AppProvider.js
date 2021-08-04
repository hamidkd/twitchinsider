import React, { useState, createContext } from "react";

export const AppContext = createContext(null);

const AppProvider = ({ children }) => {
  const [channels, setChannels] = useState(null);

  return (
    <AppContext.Provider value={{ channels, setChannels }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
