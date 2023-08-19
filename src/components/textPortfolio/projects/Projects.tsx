import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./Projects.css";

interface ProjectInterface {
  id: number;
  name: string;
  image: string;
}

export default function Projects() {
  const [selectedProject, setSelectedProject] =
    useState<ProjectInterface | null>(null);

  // data
  const featuredProjects: ProjectInterface[] = [
    {
      id: 1,
      name: "Blerry",
      // image: "/developer-arcade-96.png",
      // image: "code-programing-symbol.svg",
      image: "/work-desk-ai.jpg",
    },
    {
      id: 2,
      name: "FroGo",
      image: "code-programing-symbol.svg",
    },
    {
      id: 3,
      name: "UpMet",
      image: "code-programing-symbol.svg",
    },
    {
      id: 4,
      name: "ShortPort",
      image: "code-programing-symbol.svg",
    },
  ];

  return (
    <div className="projects">
      <div className="margin-wrapper">
        <h1 className="heading">PROJECTS</h1>
        {/* <p className="string-text">
          They say even the trickiest bugs tremble under the fingertips of this
          developer. Armed with a serious dose of wit and puzzling prowess, this
          programmer cultivates inventive solutions with ease.
        </p> */}
        <p className="string-text">
          Venture into the labyrinth of featured projects to discover
          mind-bending programming adventures. From solving intricate code
          conundrums to architecting digital marvels, unravel the mysteries
          behind these awe-inducing creations.
        </p>
      </div>

      <div className="projects-wrapper">
        <motion.div
          className="projects-container"
          // onClick={() => selectedProject && setSelectedProject(null)}
          style={
            {
              // filter: selectedProject && "blur(2px)",
              //   pointerEvents: selectedProject && "none",
              // cursor: selectedProject && "pointer",
            }
          }
          // animate={{ opacity: selectedProject ? 0.5 : 1 }}
          // transition={{ duration: 1 }}
        >
          {featuredProjects.map((project) => (
            <motion.div
              className="project-card"
              layoutId={`${project.id}`}
              // onClick={() => setSelectedProject(project)}
              style={{
                borderRadius: "1rem",
              }}
            >
              <div className="img-div">
                <motion.img src={project.image} />
              </div>
              {/* <div> */}
              <motion.h1>{project.name}</motion.h1>
              {/* </div> */}
            </motion.div>
          ))}
        </motion.div>

        {/* <AnimatePresence>
          <div className="selected-project-container">
            {selectedProject && (
              <motion.div
                className="selected-project-card"
                layoutId={`${selectedProject.id}`}
                style={{
                  borderRadius: "1rem",
                }}
                // transition={{ duration: 0.5 }}
              >
                <div>
                  <motion.img
                    src={selectedProject.image}
                    animate={{ width: [300, 500] }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                  />
                </div>
                <motion.h1>{selectedProject.name}</motion.h1>
                <motion.button
                  onClick={() => setSelectedProject(null)}
                  //   style={{ alignSelf: "flex-end" }}
                >
                  X
                </motion.button>
              </motion.div>
            )}
          </div>
        </AnimatePresence> */}
      </div>
    </div>
  );
}
