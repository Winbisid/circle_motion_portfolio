import { motion } from "framer-motion";
import DirectionImage from "../directionImage/DirectionImage";

interface CardInterface {
  id: number;
  name: string;
  image: string;
  languages: string[];
}

export default function SecondaryCard({ project }: { project: CardInterface }) {
  const { name, image, languages } = project;

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
