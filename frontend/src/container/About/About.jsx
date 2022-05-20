import React from "react";
import "./About.css";
import { Wrapper } from "../../hoc";
import aboutAvatar from "../../assets/about_avatar.JPG";
import resume from "../../assets/Resume.pdf";

// resume-link
const resumeUrl =
  "https://drive.google.com/drive/folders/1rgMF55-8A6_ffDPgnIzpBk-_yENj4jgn?usp=sharing";

const About = () => {
  return (
    <>
      <div className="about">
        <div>
          <h2 className="head-text">
            Creative developer. <br></br> With a designers eye.{" "}
          </h2>
          <h5 className="sub-text">About Me</h5>
        </div>
        <div className="about__container">
          <div className="about__me">
            <img className="avatar-back" src={aboutAvatar} />
            <div className="about__me-background" />
            <img src={aboutAvatar} />
          </div>
          <div className="about__content">
            <div className="about__cards">
              <article className="about__card">
                <p className="p-text">
                  I am an Architectural designer turned Software Developer.
                  Currently enrolled in a full-stack web development course at
                  The University of Birmingham. I am very curious by nature,
                  learning new technologies and solving problems is what makes
                  me excited to get out of bed in the morning. My curiosity
                  combined with my passion for building drives me to ponder the
                  future of tech, and bring together design and code to build
                  elegant web applications.
                </p>
              </article>
            </div>
          </div>
        </div>
        <div className="btn-container">
          <a href={resume} target="_blank">
            Resume
          </a>
        </div>
      </div>
    </>
  );
};

export default Wrapper(About, "about");
