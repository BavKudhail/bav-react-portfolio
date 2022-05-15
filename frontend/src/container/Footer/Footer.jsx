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
        <p className="sub-text">Let's build something awesome!</p>
        <div className="contact__cards">
          <div className="contact__card">
            {/* email */}
            <img className="contact__img" src={emailIMG} />
            <a href="mailto:bavkudhail@gmail.com">bavkudhail@gmail.com</a>
          </div>
          <div className="contact__card">
            {/* phone */}
            <img className="contact__img" src={phoneIMG} />
            <a href="tel: +44 (774653912)">07446835912</a>
          </div>
        </div>
        {/* contact form */}
        <div className="contact__form-container">
          <div className="contact__form app__flex">
            <div className="app__flex">
              <input
                className="p-text input-field"
                name="name"
                type="text"
                placeholder="Your Name"
              />
            </div>
            <div className="app__flex">
              <input
                className="p-text input-field"
                name="name"
                type="text"
                placeholder="Your Email"
              />
            </div>
            <div className="app__flex">
              <textarea
                className="p-text input-field "
                placeholder="Your Message"
                name="message"
              />
            </div>
            <button type="button" className="msg-button">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wrapper(Footer, "contact");
