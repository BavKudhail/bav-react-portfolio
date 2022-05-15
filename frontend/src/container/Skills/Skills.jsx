import React from "react";
import "./Skills.css";
import { motion } from "framer-motion";
import reactIcon from "../../assets/react.png";

const Skills = () => {
  return (
    <>
      <div className="skills">
        <h2 className="head-text">Skills</h2>
        <div className="skills__container">
          <div>
            {/* map over each return motion div */}
            <motion.div>
              <div>
                <img src={reactIcon} />
                <img src={reactIcon} />
              </div>
              <p>React</p>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
