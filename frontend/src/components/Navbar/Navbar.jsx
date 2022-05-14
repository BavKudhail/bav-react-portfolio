import React from "react";
import "./Navbar.css";

const Navbar = () => {
  const navLinks = ["home", "about", "work", "skills", "contact"];

  return (
    <ul>
      {navLinks.map((link) => {
        return (
          <li key={link}>
            <a href={`#${link}`}>{link}</a>
          </li>
        );
      })}
    </ul>
  );
};

export default Navbar;
