"use client";
import { createContext, useContext, useState } from "react";

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [user, setUser] = useState(null);
  //   const [theme, setTheme] = useState("light");
  const [currentSection, setCurrentSection] = useState("home");
  const changeSection = (section) => {
    setCurrentSection(section);
  };

  return (
    <AppContext.Provider
      value={{ user, setUser, changeSection, currentSection }}
    >
      {children}
    </AppContext.Provider>
  );
}

// Custom hook (best practice)
export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within AppProvider");
  }
  return context;
}
