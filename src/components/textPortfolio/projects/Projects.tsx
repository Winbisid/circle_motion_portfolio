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
      image: "/code-programing-symbol.svg",
      //   image: "../../../assets/abstract_liquid_marble.jpeg",
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

      <div
        className="projects-wrapper"
        onClick={() => selectedProject && setSelectedProject(null)}
        // style={{ border: "1px solid black", height: "60%" }}
      >
        <div
          className="projects-container"
          style={{
            display: "flex",
            flexWrap: "wrap",
            height: "",
            filter: selectedProject && "blur(2px)",
            opacity: selectedProject && 0.5,
            //   pointerEvents: selectedProject && "none",
            //   cursor: selectedProject && "pointer",
          }}
        >
          {featuredProjects.map((project) => (
            <motion.div
              layoutId={`${project.id}`}
              onClick={() => setSelectedProject(project)}
              style={{
                backgroundColor: "grey",
                flex: 1,
                margin: 10,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                // justifyContent: "center",
                borderRadius: "1rem",
              }}
            >
              <motion.img src={project.image} style={{ width: 120 }} />
              <motion.h1>{project.name}</motion.h1>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {/* <div className="selected-project-container" style={{ width: "100%" }}> */}
          {selectedProject && (
            <motion.div
              layoutId={`${selectedProject.id}`}
              style={{
                backgroundColor: "grey",
                //   flex: 1,
                margin: "0 auto",
                // padding: 10,
                width: "50%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                //   justifyContent: "center",
                borderRadius: "1rem",
                //   position: "absolute",
                // top:
                // left: "50vw",
                // right: "50vw",
              }}
              // initial={{
              //   display: "flex",
              //   flexDirection: "column",
              //   alignItems: "center",
              //   borderRadius: "1.2rem",
              //   backgroundColor: "grey",
              //   margin: "0 auto",
              //   width: "50%",
              // }}
            >
              <motion.img src={selectedProject.image} style={{ width: 250 }} />
              <motion.h1>{selectedProject.name}</motion.h1>
              <motion.button
                onClick={() => setSelectedProject(null)}
                style={{}}
              >
                X
              </motion.button>
            </motion.div>
          )}
          {/* </div> */}
        </AnimatePresence>
      </div>
    </div>
  );
}
