import { useState } from "react";
import { motion } from "framer-motion";
import DirectionImage from "./directionImage/DirectionImage";
import "./Projects.css";

interface CardInterface {
  id: number;
  name: string;
  image: string;
  languages: string[];
}

export default function Projects() {
  // const [selectedProject, setSelectedProject] =
  //   useState<ProjectInterface | null>(null);

  // data for project card
  const featuredCards: CardInterface[] = [
    {
      id: 1,
      name: "Angus Young",
      image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/9473/i-angus.png",
      languages: ["HTML", "CSS"],
    },
    {
      id: 2,
      name: "Aurora",
      image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/9473/i-aurora.png",
      languages: ["HTML", "CSS", "JavaScript", "React"],
    },
    {
      id: 3,
      name: "Visualization",
      image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/9473/i-v.png",
      languages: ["HTML", "CSS", "TypeScript", "Next.js"],
    },
    {
      id: 4,
      name: "Visualization II",
      image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/9473/i-v2.png",
      languages: ["TypeScript", "React Native", "Expo"],
    },
    {
      id: 5,
      name: "Visualization III",
      image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/9473/i-v3.png",
      languages: ["HTML", "CSS"],
    },
    {
      id: 6,
      name: "Zombie",
      image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/9473/i-worms.png",
      languages: ["HTML", "CSS", "JavaScript", "React"],
    },
    {
      id: 7,
      name: "X-Rays",
      image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/9473/i-xrays.png",
      languages: ["HTML", "CSS", "TypeScript", "Next.js"],
    },
    {
      id: 8,
      name: "Blerry",
      image: "/project-images/work-desk-ai.jpg",
      languages: ["HTML", "CSS"],
    },
    {
      id: 9,
      name: "FroGo",
      image: "code-programing-symbol.svg",
      languages: ["HTML", "CSS", "JavaScript", "React"],
    },
    {
      id: 10,
      name: "UpMet",
      image: "/developer-arcade-96.png",
      languages: ["HTML", "CSS", "TypeScript", "Next.js"],
    },
    {
      id: 11,
      name: "ShortPort",
      image: "code-programing-symbol.svg",
      languages: ["TypeScript", "React Native", "Expo"],
    },
  ];

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
        {/* <SecondaryCard project={card} /> */}
        <button
          style={{ borderRadius: 20, border: 0, padding: 15 }}
          onClick={switchCardLeft}
        >
          {"<-"}
        </button>
        <SecondaryCard project={featuredCards[idx]} />
        {/* <CursorProjects /> */}
        {/* <DirectionImage
          imageSrc="https://s3-us-west-2.amazonaws.com/s.cdpn.io/9473/i-dali.png"
          text="Salvador Dali"
        /> */}
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

export function SecondaryCard({ project }: { project: CardInterface }) {
  const { name, image, languages } = project;

  const colors = {
    HTML: "red",
    CSS: "crimson",
    JavaScript: "orange",
    TypeScript: "blue",
    React: "lightblue",
    "React Native": "skyblue",
    "Next.js": "grey",
    Expo: "aqua",
  };

  return (
    // <AnimatePresence>
    <div className="project-card">
      <div className="img-div">
        {/* <img src={image} alt={name + " project image"} /> */}
        {/* <motion.img
          key={image}
          src={image}
          alt={name + " project image"}
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -300, opacity: 0 }}
          // transition={{duration: 2}}
        /> */}
        <DirectionImage /*key={image}*/ imageSrc={image} text={name} />
      </div>

      <div className="title-div">
        <motion.h2
          key={name}
          // initial={{ x: 300, opacity: 0 }}
          // animate={{ x: 0, opacity: 1 }}
          // exit={{ x: -300, opacity: 0 }}
        >
          {name}
        </motion.h2>
      </div>

      <div className="languages-div">
        {languages.map((language: string) => (
          <motion.p
            style={{
              backgroundColor: `${colors[language as keyof typeof colors]}`,
            }}
            key={language}
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -200, opacity: 0 }}
            // transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            {language}
          </motion.p>
        ))}
      </div>
    </div>
    // </AnimatePresence>
  );
}
