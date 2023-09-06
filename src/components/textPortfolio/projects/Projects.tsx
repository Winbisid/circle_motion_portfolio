import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

      <div className="projects-wrapper" style={{ position: "relative" }}>
        <motion.button
          onClick={switchCardLeft}
          initial={{ opacity: 0.5 }}
          whileHover={{ opacity: 1 }}
        >
          {"👈"}
        </motion.button>

        <motion.div
          initial={{ visibility: "", opacity: 1 }}
          animate={{
            opacity: clickedImage ? 0 : 1,
            // visibility: clickedImage ? "hidden" : "visible",
          }}
          transition={{ duration: 1 }}
        >
          <ProjectCard
            project={featuredCards[idx]}
            clickDir={clickRight}
            setClickedImage={setClickedImage}
          />
        </motion.div>

        <motion.button
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
              // layout
              // key={featuredCards[idx].id}
              layoutId={`${featuredCards[idx].id}`}
              // initial={{ opacity: 0 }}
              // animate={{ opacity: 1 }}
              // transition={{ duration: 2.5 }}
            >
              <div className="spc_img-div">
                <motion.img
                  src={featuredCards[idx].image}
                  // animate={{ width: [300, 500] }}
                  // transition={{ duration: 1, ease: "easeInOut" }}
                />

                <motion.button
                  onClick={() => setClickedImage(false)}
                  initial={{ opacity: 0.5 }}
                  whileHover={{ opacity: 1 }}
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
