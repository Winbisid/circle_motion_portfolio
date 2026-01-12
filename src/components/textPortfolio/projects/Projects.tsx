import { useState } from "react";
import { motion, AnimatePresence, easeInOut } from "framer-motion";
import ProjectCard from "./projectCard/ProjectCard";
import { featuredCards } from "../../../utils";
import "./Projects.css";

export default function Projects() {
  const [idx, setIdx] = useState<number>(0);
  const [clickRight, setClickRight] = useState<true | false>(true);
  const [clickedImage, setClickedImage] = useState<boolean>(false);

  function switchCardRight() {
    if (idx === featuredCards.length - 1) {
      setIdx(0);
    } else {
      setIdx((prev) => prev + 1);
    }

    setClickRight(true);
  }

  function switchCardLeft() {
    if (idx === 0) {
      setIdx(featuredCards.length - 1);
    } else {
      setIdx((prev) => prev - 1);
    }

    setClickRight(false);
  }

  return (
    <div className="projects" id="projects">
      <div className="margin-wrapper">
        <h1 className="heading">Projects</h1>
        <p className="string-text">
          A handful of recent builds—from playful visuals to product flows. Each
          ships with clean handoff, solid accessibility, and fast interactions.
        </p>
      </div>

      <div className="projects-wrapper">
        <motion.button
          aria-label="Previous project"
          onClick={switchCardLeft}
          initial={{ opacity: 0.5 }}
          whileHover={{ opacity: 1 }}
        >
          {"👈"}
        </motion.button>

        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={featuredCards[idx].id}
            initial={{ x: clickRight ? 80 : -80, opacity: 0 }}
            animate={{ x: 0, opacity: clickedImage ? 0 : 1 }}
            exit={{ x: clickRight ? -80 : 80, opacity: 0 }}
            transition={{ type: "spring", stiffness: 140, damping: 18 }}
            style={{ pointerEvents: clickedImage ? "none" : "auto" }}
          >
            <ProjectCard
              project={featuredCards[idx]}
              clickDir={clickRight}
              setClickedImage={setClickedImage}
            />
          </motion.div>
        </AnimatePresence>

        <motion.button
          aria-label="Next project"
          onClick={switchCardRight}
          initial={{ opacity: 0.5 }}
          whileHover={{ opacity: 1 }}
        >
          {"👉"}
        </motion.button>

        <AnimatePresence>
          {clickedImage && (
            <motion.div
              className="selected-project-card"
              layoutId={`${featuredCards[idx].id}`}
            >
              <div className="spc_img-div">
                <motion.img src={featuredCards[idx].image} />

                <motion.button
                  onClick={() => setClickedImage(false)}
                  initial={{ opacity: 0.5 }}
                  whileHover={{ opacity: 1 }}
                  aria-label="Close project preview"
                >
                  ❌
                </motion.button>

                <div className="spc_options-div">
                  {featuredCards[idx].repo && (
                    <a
                      href={featuredCards[idx].repo}
                      target="_blank "
                      rel="noreferrer noopener"
                    >
                      <img src="/github-96.png" alt="github repository" />
                    </a>
                  )}

                  {featuredCards[idx].webLink && (
                    <a
                      href={featuredCards[idx].webLink}
                      target="_blank "
                      rel="noreferrer noopener"
                    >
                      <img src="/link-96-black.png" alt="project link" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
