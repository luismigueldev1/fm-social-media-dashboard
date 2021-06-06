import React from "react";
import Switch from "../Switch";
import "./styles.scss";

export default function Header() {
  return (
    <header className="header">
      <div className="header_title">
        <h1>Social Media Dashboard</h1>
        <h3>Total Followers: 23,004</h3>
      </div>

      <div className="header_darkmode">
        <h3>Dark Mode</h3>
        <Switch />
      </div>
    </header>
  );
}
