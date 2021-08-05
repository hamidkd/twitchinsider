import React, { useState, createContext } from "react";

export const AppContext = createContext(null);

const AppProvider = ({ children }) => {
  const [channels, setChannels] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <AppContext.Provider
      value={{ channels, setChannels, isLoading, setIsLoading }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
