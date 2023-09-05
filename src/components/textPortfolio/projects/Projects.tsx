import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "./projectCard/ProjectCard";
import { featuredCards } from "../../../utils";
import "./Projects.css";

export default function Projects() {
  const [idx, setIdx] = useState<number>(0);
  const [clickRight, setClickRight] = useState<true | false>(true);
  const [clickedImage, setClickedImage] = useState<boolean>(false);

  console.log(clickedImage);

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

      <div className="projects-wrapper">
        <button onClick={switchCardLeft}>{"👈"}</button>

        <ProjectCard
          project={featuredCards[idx]}
          clickDir={clickRight}
          setClickedImage={setClickedImage}
        />

        <button onClick={switchCardRight}>{"👉"}</button>

        <AnimatePresence>
          <div className="selected-project-container">
            {clickedImage && (
              <motion.div
                className="selected-project-card"
                layoutId={`${featuredCards[idx].id}`}
                style={{
                  borderRadius: "1rem",
                }}
                // transition={{ duration: 0.5 }}
              >
                <div>
                  <motion.img
                    src={featuredCards[idx].image}
                    // animate={{ width: [300, 500] }}
                    // transition={{ duration: 1, ease: "easeInOut" }}
                  />
                </div>

                {/* <motion.h1>{featuredCards[idx].name}</motion.h1> */}

                {featuredCards[idx].repo && (
                  <a
                    href={featuredCards[idx].repo}
                    target="_blank "
                    rel="noreferrer noopener"
                  >
                    <img
                      width={70}
                      src="/icons/github.svg"
                      alt="github repository"
                    />
                  </a>
                )}

                {featuredCards[idx].webLink && (
                  <a
                    href={featuredCards[idx].webLink}
                    target="_blank "
                    rel="noreferrer noopener"
                  >
                    <img width={70} src="/icons/replit.svg" alt="web link" />
                  </a>
                )}

                <motion.button
                  onClick={() => setClickedImage(false)}
                  //   style={{ alignSelf: "flex-end" }}
                >
                  X
                </motion.button>
              </motion.div>
            )}
          </div>
        </AnimatePresence>
      </div>
    </div>
  );
}
