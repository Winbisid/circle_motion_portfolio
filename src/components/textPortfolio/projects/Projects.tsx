import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
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

/*
  3D CURSOR
*/

interface CursorXYInterface {
  x: number | null;
  y: number | null;
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
        <DirectionImage imageSrc={image} text={name} />
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

export function DirectionImage({
  imageSrc,
  text,
}: {
  imageSrc: string;
  text: string;
}) {
  const [hoverStatus, setHoverStatus] = useState<"in" | "out">("out");
  const [cursorXY, setCursorXY] = useState<CursorXYInterface>({
    x: null,
    y: null,
  });
  const listRef = useRef<HTMLInputElement>(null);

  let w: number | undefined,
    h: number | undefined,
    l: number | undefined,
    t: number | undefined;

  useEffect(() => {
    let box = listRef?.current;
    w = box?.offsetWidth;
    h = box?.offsetHeight;
    l = box?.offsetLeft;
    // l = box?.getBoundingClientRect().left;
    // t = box?.offsetTop;
    t = box?.getBoundingClientRect().top;
  });

  useEffect(() => {
    const moveCursor = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      setCursorXY({ x, y });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  function getDirection(pos: CursorXYInterface): string {
    const directions = ["-top", "-right", "-bottom", "-left"];

    const x = pos.x! - l! - (w! / 2) * (w! > h! ? h! / w! : 1);
    const y = pos.y! - t! - (h! / 2) * (h! > w! ? w! / h! : 1);
    const d = Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;

    return directions[d];
  }

  function addClass(pos: CursorXYInterface, status: "in" | "out") {
    const direction = getDirection(pos);

    listRef.current!.className = "";
    listRef?.current!.classList.add(status + direction);
  }

  useEffect(() => {
    addClass(cursorXY, hoverStatus);
  }, [hoverStatus]);

  return (
    // <div className="wrap">
    <ul
      className="-center"
      style={{ background: "coral", borderRadius: "1rem" }}
    >
      <motion.li
        id="list"
        ref={listRef}
        onHoverStart={() => setHoverStatus("in")}
        onHoverEnd={() => setHoverStatus("out")}
        // style={{ background: "coral", borderRadius: "1rem" }}
      >
        <div className="w">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: hoverStatus === "out" ? 1 : 0 }}
            style={{ borderRadius: "1rem" }}
            className="f"
          >
            {/* <svg viewBox="0 0 180 180" style={{ borderRadius: "2rem" }}>
                <image
                  xlinkHref={imageSrc}
                  preserveAspectRatio="xMidYMid slice"
                  width={"100%"}
                  height={"100%"}
                  style={{ borderRadius: "2rem" }}
                />
              </svg> */}
            <img
              style={{ borderRadius: "1rem" }}
              src={imageSrc}
              width={"100%"}
              height={"100%"}
              alt={text + "project image"}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: hoverStatus === "in" ? 1 : 0 }}
            style={{ borderRadius: "1rem" }}
            className="b"
          >
            <h1>{text.toUpperCase()}</h1>
          </motion.div>
        </div>
      </motion.li>
    </ul>
    // </div>
  );
}
