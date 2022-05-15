import React from "react";
import "./Projects.css";
import { Wrapper } from "../../hoc";
import { motion } from "framer-motion";
import defaultIMG from "../../assets/defaultIMG.jpg";
import { AiFillEye, AiFillGithub } from "react-icons/ai";

const Projects = () => {
  const filterButtons = [
    "Front-end",
    "Back-end",
    "Full-stack",
    "Design",
    "All",
  ];

  return (
    <>
      <div className="projects">
        <div className="projects__intro">
          <h2 className="head-text">
            See More <span>🔥</span>
          </h2>
          <h4 className="sub-text">Others worth a mention</h4>
        </div>
        <div className="projects__filter">
          {filterButtons.map((button) => {
            return <div className="projects__filter-button">{button}</div>;
          })}
        </div>
        {/* project card */}
        <motion.div className="projects__card-container">
          <div className="app__work-item app__flex">
            <div className="app__work-img app__flex">
              <img src={defaultIMG} />
            </div>
            <div className="app__work-content app__flex">
              <h4 className="bold-text">Project Title</h4>
              <p className="p-text">Project Description</p>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Wrapper(Projects, "projects");
