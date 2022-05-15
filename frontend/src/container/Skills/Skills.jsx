import React from "react";
import "./Skills.css";
import { motion } from "framer-motion";
import reactIcon from "../../assets/react.png";
import { Wrapper } from "../../hoc";

const Skills = () => {
  return (
    <>
      <div className="skills">
        <h2 className="head-text">Skills</h2>
        <div className="skills__container">
          <div className="skills-list">
            {/* map over each return motion div */}
            <motion.div className="skills-item app__flex">
              <div className="app__flex">
                <img className="skill-img" src={reactIcon} />
                <img className="skill-img blur" src={reactIcon} />
              </div>
              <p>React</p>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wrapper(Skills, "skills");
