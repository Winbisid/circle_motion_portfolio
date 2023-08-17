import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./Projects.css";

interface ProjectInterface {
  id: number;
  name: string;
  image: string;
}

export default function Projects() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  // data
  const featuredProjects: ProjectInterface[] = [
    {
      id: 1,
      name: "Blerry",
      //   image: "/code-programing-symbol.svg",
      image: "../../../assets/abstract_liquid_marble.jpeg",
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

      <div className="projects-container">
        {featuredProjects.map(({ id, name, image }) => (
          <motion.div
            layoutId={id}
            onClick={() => setSelectedId(id)}
            // style={{ display: "flex", flexDirection: "column" }}
          >
            <motion.img src={image} width={180} />
            <motion.h1>{name}</motion.h1>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
