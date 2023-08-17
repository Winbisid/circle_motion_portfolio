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
      name: "",
      image: "",
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
          <motion.div layoutId={id}></motion.div>
        ))}
      </div>
    </div>
  );
}
