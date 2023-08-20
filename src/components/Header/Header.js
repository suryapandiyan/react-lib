import React from "react";
import Nav from "./Nav.js";
import "./Header.css";

const Header = ({ title, hub }) => {
  return (
    <header className="Header">
      <h1>
        {title}
        <u>{hub}</u>{" "}
      </h1>
      <Nav />
    </header>
  );
};

export default Header;