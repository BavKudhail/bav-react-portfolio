import React from "react";
import "./Skills.css";
import { motion } from "framer-motion";
import reactIcon from "../../assets/react.png";
import { Wrapper } from "../../hoc";
import SkillsData from "../../data/SkillsData";

const Skills = () => {
  return (
    <>
      <div className="skills">
        <h2 className="head-text">Skills</h2>
        <div className="skills__container">
          <div className="skills-list">
            {SkillsData.map((skill) => {
              return (
                <motion.div className="skills-item app__flex">
                  <div className="app__flex">
                    <img className="skill-img" src={skill.icon} />
                    <img className="skill-img blur" src={skill.icon} />
                  </div>
                  <p className="p-text">{skill.name}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Wrapper(Skills, "skills");
