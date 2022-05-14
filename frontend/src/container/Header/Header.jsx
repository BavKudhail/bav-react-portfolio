import React from "react";
import "./Header.css";
import bavAvatar from "../../assets/bav-avatar.jpg";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header__container">
          <a href="#about">
            <div className="header__badge">
              <div>
                <img className="memoji" src={bavAvatar} />
              </div>
              <div>
                <p className="p-text">Hello, I'm</p>
                <h1 className="head-text">Bav Kudhail</h1>
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
