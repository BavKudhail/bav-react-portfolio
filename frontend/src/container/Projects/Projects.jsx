import React from "react";
import "./Projects.css";
import { Wrapper } from "../../hoc";
import { motion } from "framer-motion";
import defaultIMG from "../../assets/defaultIMG.jpg";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import ProjectData from "../../data/ProjectData";

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
          {filterButtons.map((button, index) => {
            return (
              <div className="projects__filter-button" key={index}>
                {button}
              </div>
            );
          })}
        </div>
        {/* project card */}
        <motion.div className="projects__card-container">
          {ProjectData.map((project) => {
            return (
              <div className="projects-item app__flex">
                <div className="projects-img app__flex">
                  <img src={project.image} />
                  <motion.div
                    whileHover={{ opacity: [0, 1] }}
                    transition={{
                      duration: 0.25,
                      ease: "easeInOut",
                    }}
                    className="app__work-hover app__flex"
                  >
                    <a href={project.githubUrl} target="_blank" rel="norefer">
                      <motion.div
                        whileInView={{ scale: [0, 1] }}
                        transition={{ duration: 0.25 }}
                        className="app__flex"
                      >
                        <AiFillEye />
                      </motion.div>
                    </a>
                    <a href={project.deployedUrl} target="_blank" rel="norefer">
                      <motion.div
                        whileInView={{ scale: [0, 1] }}
                        transition={{ duration: 0.25 }}
                        className="app__flex"
                      >
                        <AiFillGithub />
                      </motion.div>
                    </a>
                  </motion.div>
                </div>

                <div className="projects-content app__flex">
                  <h4 className="bold-text">{project.title}</h4>
                  <p className="p-text">{project.description}</p>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </>
  );
};

export default Wrapper(Projects, "projects");
