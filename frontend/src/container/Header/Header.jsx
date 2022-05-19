import React from "react";
import { motion } from "framer-motion";
import "./Header.css";
import { Wrapper } from "../../hoc";
import BlobAnimation from "../../components/BlobAnimation";

// images
import bavAvatar from "../../assets/bav-avatar.gif";
import javascriptGlow from "../../assets/javascript-glow.png";
import reactGlow from "../../assets/react-glow.png";
import lightBulb from "../../assets/light-bulb.png";
import aboutAvatar from "../../assets/about_avatar.JPG";
import redux from "../../assets/redux.png";

const Header = () => {
  return (
    <>
      <div className="header">
        {/* <BlobAnimation /> */}
        <div>
          <div className="header__container">
            <div>
              <div className="sub-text-container">
                <p className="sub-text">Hey there, I'm </p>
              </div>
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
            <div className="tech-logo redux-logo">
              <img className="tech-logo-img" src={redux} />
              <img className="tech-logo-img blurred" src={redux} />
              <img className="tech-logo-img blurred" src={redux} />
            </div>
            <div className="header_badge_container">
              <motion.div
                className="header__badge"
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.3 },
                }}
              >
                {/* image */}
                <div className="memoji_container">
                  <img className="memoji" src={bavAvatar} />
                </div>
                <div className="memoji-line" />
                {/* content */}
                <div className="badge_content_container">
                  <div className="badge_content">
                    <div>
                      <span className="code-text">creator ID card</span>
                    </div>
                    <div>
                      <h1 className="head-text">Bav Kudhail</h1>
                    </div>
                    <div>
                      <p className="sub-text">
                        I design and code awesome stuff
                      </p>
                    </div>
                    <div>
                      <span className="code-text">ID: 0001112203033</span>
                    </div>
                    <div>
                      <span className="code-text">valid untill 3075</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            <motion.div
              className="fixed-blur"
              whileInView={{ scale: [0, 1] }}
              transition={{ duration: 1, ease: "easeInOut" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Wrapper(Header, "home");
