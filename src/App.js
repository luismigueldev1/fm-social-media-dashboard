import React from "react";
import HomePage from "./pages/HomePage";
import ThemeProvider from "./theme/ThemeProvider";

export default function App() {
  return (
    <ThemeProvider>
      <HomePage />
    </ThemeProvider>
  );
}
