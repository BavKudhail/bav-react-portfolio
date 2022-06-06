import React, { useState, useEffect } from "react";
import "./Projects.css";
import { Wrapper } from "../../hoc";
import { motion } from "framer-motion";
import defaultIMG from "../../assets/defaultIMG.jpg";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import ProjectData from "../../data/ProjectData";
import BlobAnimation from "../../components/BlobAnimation";

const filterButtons = ["Front-end", "Back-end", "Full-stack", "All"];

const Projects = () => {
  const [filterProject, setFilterProject] = useState(ProjectData);

  // set active button
  const [activeFilter, setActiveFilter] = useState("All");

  // animate card
  const [cardTransition, setCardTransition] = useState({ y: 0, opacity: 1 });

  const projectFilter = (button) => {
    setActiveFilter(button);
    setCardTransition([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setCardTransition([{ y: 0, opacity: 1 }]);
      if (button === "All") {
        setFilterProject(ProjectData);
      } else {
        setFilterProject(
          ProjectData.filter((project) => {
            return project.tags.includes(button);
          })
        );
      }
    }, 500);
  };

  return (
    <>
      <div className="projects">
        <BlobAnimation />
        <div className="projects__intro">
          <h2 className="head-text">
            See More <span>🔥</span>
          </h2>
          <h4 className="sub-text">Others worth a mention</h4>
        </div>
        <div className="projects__filter">
          {filterButtons.map((button, index) => {
            return (
              <div
                className={`projects__filter-button ${
                  activeFilter === button ? "item-active" : ""
                }`}
                key={index}
                onClick={() => projectFilter(button)}
              >
                {button}
              </div>
            );
          })}
        </div>
        {/* project card */}
        <motion.div
          className="projects__card-container"
          transition={{ duration: 0.4 }}
          animate={cardTransition}
        >
          {/* {ProjectData.map((project) => { */}
          {filterProject.map((project, index) => {
            return (
              <div className="projects-item app__flex" key={index}>
                <div className="projects-img app__flex">
                  <img src={project.image} />
                  <motion.div
                    whileHover={{ opacity: [0, 1] }}
                    transition={{
                      duration: 0.25,
                      ease: "easeInOut",
                    }}
                    className="projects-hover app__flex"
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
