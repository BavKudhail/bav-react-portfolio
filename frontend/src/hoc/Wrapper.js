import React from "react";
import { SocialLinks } from "../components";

const Wrapper = (Component, idName, classNames) =>
  function HOC() {
    return (
      <div id={idName} className={`app__container ${classNames}`}>
        <SocialLinks />
        <div className="app__wrapper app__flex">
          <Component />
        </div>
      </div>
    );
  };

export default Wrapper;
