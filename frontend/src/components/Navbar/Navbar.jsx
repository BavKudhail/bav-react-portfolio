import React, { useState } from "react";
import "./Navbar.css";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

const Navbar = () => {
  const navLinks = ["home", "about", "work", "skills", "contact"];
  // react hook for toggle
  const [toggle, setToggle] = useState(false);

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
      {/* mobile navigation */}
      <div className="navbar-menu">
        {/* on click - set toggle to true (open-menu) */}
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <HiX
              style={{ height: "35px", width: "35px", margin: "10px" }}
              onClick={() => setToggle(false)}
            />

            <ul className="navbar-menu-ul">
              {navLinks.map((item) => (
                <li className="navbar-menu-li" key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
