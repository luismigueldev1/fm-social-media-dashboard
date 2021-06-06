import React, { useContext } from "react";
import CardLargeList from "../../components/CardLargeList";
import CardSmallList from "../../components/CardSmallList";
import Header from "../../components/Header";
import { ThemeContext } from "../../theme/ThemeProvider";
import "./styles.scss";

export default function HomePage() {
  const { theme } = useContext(ThemeContext);
  const isDarkMode = theme.darkMode ? "dark" : "light";
  return (
    <div className={`container ${isDarkMode}`}>
      <Header />
      <CardLargeList />

      <CardSmallList />
    </div>
  );
}
