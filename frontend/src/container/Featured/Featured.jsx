import React from "react";
import "./Featured.css";
import { motion } from "framer-motion";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { Wrapper } from "../../hoc";
// images
import Profile from "../../assets/Profile.gif";
import FeaturedData from "../../data/FeaturedData.js";

console.log(FeaturedData[0].title);

export const Featured = () => {
  return (
    <>
      <div>Featured</div>
      <h2 className="head-text">
        Alright.... Talk is cheap. <br />
        Show me the code.
        <span>💻</span>
      </h2>
      <div className="quote-container">
        <span className="quote">🎯 Insert cool but cheesy quote here</span>
      </div>
      <h4 className="sub-text">
        Featured Projects <span>📍</span>{" "}
      </h4>
      <div>
        {FeaturedData.map((project) => {
          return (
            <motion.div
              className="project-container"
              whileHover={{ scale: 1.03, duration: 0.1 }}
              transition={{ duration: 1 }}
              whileInView={{ x: [-100, 0], opacity: [0, 1] }}
            >
              <div>
                <img
                  className="project-image"
                  alt="project screenshot"
                  src={project.image}
                />
              </div>
              <div className="text-container">
                <h5 className="project-title">{project.title}</h5>
                <p className="project-description">{project.description}</p>
              </div>
              {/* test */}
              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className="app__featured-hover app__flex"
              >
                {/* deployed site link */}
                <a target="_blank" rel="norefer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                {/*  github repository link */}
                <a target="_blank" rel="norefer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </>
  );
};

export default Wrapper(Featured, "featured");
