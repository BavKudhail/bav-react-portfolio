import React from "react";
import "./Navbar.css";

const Navbar = () => {
  const navLinks = ["home", "about", "work", "skills", "contact"];

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <div className="navbar__logo-container">
          <span>BK</span>
        </div>
      </div>
      <ul className="navbar__links">
        {navLinks.map((link) => {
          return (
            <li key={link} className="navbar_link ">
              <a href={`#${link}`}>{link}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
