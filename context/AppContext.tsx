// context/AppContext.tsx
'use client'
import React, { createContext, useContext } from "react";
import { doctors } from "../public/assets/assets";
import { Doctor } from "../types";

export const AppContext = createContext<{ doctors: Doctor[] }>({ doctors: [] });

export const AppContextProvider = ({ children }: { children: React.ReactNode }) => {
  const value = { doctors };
  
  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

// Create a custom hook for easier usage
export const useAppContext = () => {
  return useContext(AppContext);
};