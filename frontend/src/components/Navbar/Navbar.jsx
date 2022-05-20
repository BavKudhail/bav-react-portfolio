import React, { useState } from "react";
import "./Navbar.css";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

const Navbar = () => {
  const navLinks = ["home", "about", "work", "skills", "contact"];
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
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <div className="cross">
              <HiX onClick={() => setToggle(false)} />
            </div>
            <ul>
              {navLinks.map((item) => (
                <li key={item}>
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
