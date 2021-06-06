import React, { createContext, useReducer } from "react";
export const types = {
  dark: "dark",
  light: "light",
};
export const ThemeContext = createContext();

const state = {
  darkMode: false,
};

const themeReducer = (state, action) => {
  switch (action.type) {
    case types.light:
      return {
        ...state,
        darkMode: false,
      };
    case types.dark:
      return {
        ...state,
        darkMode: true,
      };
    default:
      return state;
  }
};

export default function ThemeProvider({ children }) {
  const [theme, dispatch] = useReducer(themeReducer, state);
  return (
    <ThemeContext.Provider value={{ theme, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
}
