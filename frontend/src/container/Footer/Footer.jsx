import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Footer.css";
import { Wrapper } from "../../hoc";
import phoneIMG from "../../assets/phone-call.png";
import emailIMG from "../../assets/mail.png";

const Result = () => {
  return (
    <div>
      <p className="sub-text">
        Your message has been sent. ✈️<br></br>I will contact you soon.
      </p>
      ;
    </div>
  );
};

const Footer = () => {
  const [result, setResult] = useState(false);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_i1m7827",
        "template_cgm9jol",
        form.current,
        "qjylWPQJ2oNjKBUnB"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    setResult(true);
  };

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
        <form
          ref={form}
          action=""
          onSubmit={sendEmail}
          className="contact__form-container"
        >
          <div className="contact__form app__flex">
            <div>{result ? <Result /> : null}</div>
            <div className="app__flex">
              <input
                className="p-text input-field"
                name="name"
                type="text"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="app__flex">
              <input
                className="p-text input-field"
                name="email"
                type="text"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="app__flex">
              <textarea
                className="p-text input-field "
                placeholder="Your Message"
                name="message"
                required
              />
            </div>
            <button type="submit" className="msg-button">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Wrapper(Footer, "contact");
