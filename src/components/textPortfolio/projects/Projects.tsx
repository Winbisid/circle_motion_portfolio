import { useState } from "react";
import ProjectCard from "./projectCard/ProjectCard";
import { featuredCards } from "../../../utils";
import "./Projects.css";

export default function Projects() {
  // const [selectedProject, setSelectedProject] =
  //   useState<ProjectInterface | null>(null);

  const [idx, setIdx] = useState<number>(0);

  function switchCardRight() {
    if (idx === featuredCards.length - 1) {
      setIdx(0);
    } else {
      setIdx((prev) => prev + 1);
    }
  }

  function switchCardLeft() {
    if (idx === 0) {
      setIdx(featuredCards.length - 1);
    } else {
      setIdx((prev) => prev - 1);
    }
  }

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
        <button
          style={{ borderRadius: 20, border: 0, padding: 15 }}
          onClick={switchCardLeft}
        >
          {"<-"}
        </button>

        <ProjectCard project={featuredCards[idx]} />

        <button
          style={{ borderRadius: 20, border: 0, padding: 15 }}
          onClick={switchCardRight}
        >
          {"->"}
        </button>

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
