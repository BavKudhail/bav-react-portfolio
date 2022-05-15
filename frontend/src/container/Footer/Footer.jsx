import React from "react";
import "./Footer.css";
import { Wrapper } from "../../hoc";
import phoneIMG from "../../assets/phone-call.png";
import emailIMG from "../../assets/mail.png";

const Footer = () => {
  return (
    <>
      <div className="contact__container">
        <h2 className="head-text">Get in touch 💬</h2>
        <div className="contact__cards">
          <div className="contact__card">
            {/* email */}
            <img src={emailIMG} />
            <a href="mailto:bavkudhail@gmail.com" className="p-text">
              bavkudhail@gmail.com
            </a>
          </div>
          <div className="contact__card">
            {/* phone */}
            <img src={phoneIMG} />
            <a href="tel: +44 (774653912)" className="p-text">
              07446835912
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wrapper(Footer, "contact");
