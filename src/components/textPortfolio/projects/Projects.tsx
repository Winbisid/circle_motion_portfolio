import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./Projects.css";

interface ProjectInterface {
  id: number;
  name: string;
  image: string;
}

interface CardInterface {
  id: number;
  name: string;
  image: string;
  languages: string[];
}

export default function Projects() {
  const [selectedProject, setSelectedProject] =
    useState<ProjectInterface | null>(null);

  // temp state for secondary card
  // const [card, setCard] = useState<CardInterface | null>(null);

  // data
  const featuredProjects: ProjectInterface[] = [
    {
      id: 1,
      name: "Blerry",
      // image: "/developer-arcade-96.png",
      // image: "code-programing-symbol.svg",
      image: "/work-desk-ai.jpg",
    },
    {
      id: 2,
      name: "FroGo",
      // image: "code-programing-symbol.svg",
      image: "/work-desk-ai.jpg",
    },
    {
      id: 3,
      name: "UpMet",
      // image: "code-programing-symbol.svg",
      image: "/work-desk-ai.jpg",
    },
    {
      id: 4,
      name: "ShortPort",
      // image: "code-programing-symbol.svg",
      image: "/work-desk-ai.jpg",
    },
  ];

  // temp data for secondary card
  const featuredCards: CardInterface[] = [
    {
      id: 1,
      name: "Blerry",
      image: "/work-desk-ai.jpg",
      languages: ["HTML", "CSS"],
    },
    {
      id: 2,
      name: "FroGo",
      image: "code-programing-symbol.svg",
      languages: ["HTML", "CSS", "JavaScript", "React"],
    },
    {
      id: 3,
      name: "UpMet",
      image: "/developer-arcade-96.png",
      languages: ["HTML", "CSS", "TypeScript", "Next.js"],
    },
    {
      id: 4,
      name: "ShortPort",
      image: "code-programing-symbol.svg",
      languages: ["TypeScript", "React Native", "Expo"],
    },
  ];

  const [idx, setIdx] = useState<number>(0);
  const [card, setCard] = useState<CardInterface | null>(featuredCards[idx]);

  function switchCardRight() {
    if (idx === featuredCards.length - 1) {
      setIdx(0);
    } else {
      // setIdx((prev) => prev + 1);
      setIdx(idx + 1);
    }

    setCard(featuredCards[idx]);
  }

  function switchCardLeft() {
    if (idx === 0) {
      setIdx(featuredCards.length - 1);
    } else {
      // setIdx((prev) => prev - 1);
      setIdx(idx - 1);
    }

    setCard(featuredCards[idx]);
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
        {/* <motion.div
          className="projects-container"
          // onClick={() => selectedProject && setSelectedProject(null)}
          style={
            {
              // filter: selectedProject && "blur(2px)",
              //   pointerEvents: selectedProject && "none",
              // cursor: selectedProject && "pointer",
            }
          }
          // animate={{ opacity: selectedProject ? 0.5 : 1 }}
          // transition={{ duration: 1 }}
        >
          {featuredProjects.map((project) => (
            <motion.div
              className="project-card"
              layoutId={`${project.id}`}
              style={{
                borderRadius: "1rem",
              }}
            >
              <div className="img-div">
                <motion.img src={project.image} />
              </div>
              <motion.h1>{project.name}</motion.h1>
            </motion.div>
          ))}
        </motion.div> */}

        {/* <div className="secondary-card">
          <div className="img-div">
            <img src={card?.image} alt="project image" />
          </div>

          <div className="title-div">
            <h2>{card?.name}</h2>
          </div>

          <div className="languages-div">
            {card?.languages.map((lang) => (
              <p>{lang}</p>
            ))}
          </div>
        </div> */}

        <SecondaryCard project={card} />

        <div>
          <button onClick={switchCardLeft}>{"<-"}</button>
          <button onClick={switchCardRight}>{"->"}</button>
        </div>

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

interface ProjectDataInterface {
  id: number;
  name: string;
  image: string;
}

interface CursorXYInterface {
  x: number | null;
  y: number | null;
}

export function CursorProjects() {
  // data
  const featuredProjects: ProjectDataInterface[] = [
    {
      id: 1,
      name: "Angus Young",
      image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/9473/i-angus.png",
    },
    {
      id: 2,
      name: "Aurora",
      image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/9473/i-aurora.png",
    },
    {
      id: 3,
      name: "Bride of Frankenstein",
      image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/9473/i-bride.png",
    },
    {
      id: 4,
      name: "Dracula",
      image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/9473/i-d.png",
    },
    // {
    //   id: 1,
    //   name: "Salvador Dalí",
    //   image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/9473/i-dali.png",
    // },
    // {
    //   id: 1,
    //   name: "Ilhuicatl Xoxouhqui",
    //   image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/9473/i-huitzi.png",
    // },
    // {
    //   id: 1,
    //   name: "L'Homme qui rit",
    //   image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/9473/i-man.png",
    // },
    // {
    //   id: 1,
    //   name: "Visualization",
    //   image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/9473/i-v.png",
    // },
    // {
    //   id: 1,
    //   name: "Visualization II",
    //   image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/9473/i-v2.png",
    // },
    // {
    //   id: 1,
    //   name: "Visualization III",
    //   image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/9473/i-v3.png",
    // },
    // {
    //   id: 1,
    //   name: "Zombie",
    //   image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/9473/i-worms.png",
    // },
    // {
    //   id: 1,
    //   name: "X-Rays",
    //   image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/9473/i-xrays.png",
    // },
  ];

  const listRef = useRef();

  const [w, setW] = useState<number | null>(null);
  const [h, setH] = useState<number | null>(null);
  const [l, setL] = useState<number | null>(null);
  const [t, setT] = useState<number | null>(null);

  const [hoverStatus, setHoverStatus] = useState<"in" | "out">("out");
  const [cursorXY, setCursorXY] = useState<CursorXYInterface>({
    x: null,
    y: null,
  });

  useEffect(() => {
    let box = listRef?.current;
    setW(box?.offsetWidth);
    setH(box?.offsetHeight);
    setL(box?.offsetLeft);
    setT(box?.offsetTop);

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

  function getDirection(pos: CursorXYInterface): number {
    const x = pos.x! - l! - (w! / 2) * (w! > h! ? h! / w! : 1);
    const y = pos.y! - t! - (h! / 2) * (h! > w! ? w! / h! : 1);
    const d = Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;
    console.log("-----------");
    console.log("-----------");
    console.log(w, h, l, t);
    console.log("-----------");
    console.log(x, y, d);
    console.log("-----------");
    console.log("-----------");
    return d;
  }

  function addClass(pos: CursorXYInterface, status: "in" | "out") {
    const direction = getDirection(pos);

    let classNameSuffix = "";
    switch (direction) {
      case 0:
        classNameSuffix = "-top";
        break;
      case 1:
        classNameSuffix = "-right";
        break;
      case 2:
        classNameSuffix = "-bottom";
        break;
      case 3:
        classNameSuffix = "-left";
        break;
    }

    listRef.current.className = "";
    listRef.current.classList.add(status + classNameSuffix);
    // this.element.className = "";
    // this.element.classList.add(state + classNameSuffix);
  }

  useEffect(() => {
    // console.log(listRef.current.className);
    // listRef.current.className = "do";
    addClass(cursorXY, hoverStatus);
  }, [cursorXY, hoverStatus]);

  return (
    // <div className="projects">
    //   <div className="margin-wrapper">
    //     <h1 className="heading">PROJECTS</h1>
    //     <p className="string-text">
    //       Venture into the labyrinth of featured projects to discover
    //       mind-bending programming adventures. From solving intricate code
    //       conundrums to architecting digital marvels, unravel the mysteries
    //       behind these awe-inducing creations.
    //     </p>
    // </div>

    <div className="wrap" style={{ border: "1px solid grey" }}>
      <ul className="-center" style={{ border: "1px solid red" }}>
        {featuredProjects.map((project) => (
          <motion.li
            id="list"
            ref={listRef}
            // whileHover={() => console.log("a")}
            onHoverStart={() => setHoverStatus("in")}
            onHoverEnd={() => setHoverStatus("out")}
          >
            <div className="w">
              <div className="f">
                <svg viewBox="0 0 180 180">
                  <image
                    xlinkHref={project.image}
                    preserveAspectRatio="xMidYMid slice"
                    width={"100%"}
                    height={"100%"}
                  />
                </svg>
              </div>
              <div className="b">
                <h3>{project.name}</h3>
              </div>
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
    // </div>
  );
}

export function SecondaryCard({ project }) {
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
    <div className="secondary-card">
      <div className="img-div">
        {/* <img src={image} alt={name + " project image"} /> */}
        <motion.img
          key={image}
          src={image}
          alt={name + " project image"}
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -300, opacity: 0 }}
          // transition={{duration: 2}}
        />
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
            style={{ backgroundColor: `${colors[language]}` }}
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
