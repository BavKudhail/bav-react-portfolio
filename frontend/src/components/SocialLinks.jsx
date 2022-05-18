import React from "react";
import { BsTwitter, BsGithub, BsLinkedin } from "react-icons/bs";

const SocialLinks = () => {
  return (
    <div className="app__social">
      <div>
        <a target="_blank" href="https://twitter.com/bavkudhail">
          <BsTwitter />
        </a>
      </div>
      <div>
        <a target="_blank" href="https://www.linkedin.com/in/bavkudhail/">
          <BsLinkedin />
        </a>
      </div>
      <div>
        <a target="_blank" href="https://www.github.com/bavkudhail">
          <BsGithub />
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;
