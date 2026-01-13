import { motion } from "framer-motion";
import { colors } from "../../../../utils";
import "./ProjectCard.css";

interface CardInterface {
  id: number;
  name: string;
  image: string;
  languages: string[];
  role?: string;
  outcome?: string;
}

export default function ProjectCard({
  project,
  clickDir,
  setClickedImage,
}: {
  project: CardInterface;
  clickDir: true | false;
  setClickedImage: any;
}) {
  const { name, image, languages, role, outcome } = project;

  return (
    <div className="project-card">
      <div className="img-div">
        <motion.img
          key={image}
          src={image}
          alt={name + " project image"}
          initial={{ x: clickDir ? 300 : -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          // exit={{ x: clickDir ? -300 : 300, opacity: 0 }}
          onClick={() => setClickedImage(true)}
          layoutId={`${project.id}`}
        />
      </div>

      <div className="title-div">
        <motion.h2
          key={name}
          // initial={{ x: 300, opacity: 0 }}
          // animate={{ x: 0, opacity: 1 }}
          // exit={{ x: -300, opacity: 0 }}
          // style={{ color: "rgba(255,255,255,0.7" }}
        >
          {name}
        </motion.h2>
      </div>

      <div className="languages-div">
        {languages.map((language: string) => {
          const colorEntry = colors[language as keyof typeof colors] || ["#888", "light"];
          return (
            <motion.p
              style={{
                backgroundColor: colorEntry[0],
                color:
                  colorEntry[1] == "dark"
                    ? "rgba(0,0,0,0.7)"
                    : "rgba(255,255,255,0.7)",
              }}
              key={language}
              initial={{ y: 200, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -200, opacity: 0 }}
            >
              {language}
            </motion.p>
          );
        })}
      </div>

      {(role || outcome) && (
        <div className="case-notes">
          {role && (
            <div>
              <p className="case-label">Role</p>
              <p className="case-text">{role}</p>
            </div>
          )}
          {outcome && (
            <div>
              <p className="case-label">Outcome</p>
              <p className="case-text">{outcome}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
