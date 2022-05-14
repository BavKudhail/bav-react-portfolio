import React from "react";
import { motion } from "framer-motion";
import "./Header.css";
import { Wrapper } from "../../hoc";

// images
import bavAvatar from "../../assets/bav-avatar.jpg";
import javascriptGlow from "../../assets/javascript-glow.png";
import reactGlow from "../../assets/react-glow.png";
import lightBulb from "../../assets/light-bulb.png";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header__container">
          <div>
            <a href="#about">
              <motion.div
                className="header__badge"
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.3 },
                }}
              >
                <div>
                  <img className="memoji" src={bavAvatar} />
                </div>
                <div>
                  <p className="p-text">Hello, I'm</p>
                  <h1 className="head-text">Bav Kudhail</h1>
                </div>
              </motion.div>
            </a>
          </div>
        </div>
        <div className="blob-container">
          <div className="tech-logo bulb-logo">
            <img src={lightBulb} />
          </div>
          <div className="tech-logo react-logo">
            <img className="tech-logo-img" src={reactGlow} />
          </div>
          <div className="tech-logo javascript-logo">
            <img className="tech-logo-img" src={javascriptGlow} />
          </div>
          <motion.div
            className="fixed-blur"
            whileInView={{ scale: [0, 1] }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
        </div>
      </div>
    </>
  );
};

export default Wrapper(Header, "home");
