import { useState } from "react";
import { motion } from "framer-motion";
import { PATHS, SVG_PATHS } from "../../utils";
import WheelSection from "./section/WheelSection";
import TooltipSwitch from "./tooltip/TooltipSwitch";
import TooltipsContext from "../../utils/wheelPortfolio/tooltipsContext";
import { PathsInterface } from "../../interfaces";
import "./Wheel.css";

export default function Wheel() {
  const [wheelDeg, setWheelDeg] = useState(0);
  const [smallCircleVisible, setSmallCircleVisible] = useState("hidden");
  const [section, setSection] = useState("main");
  const [alpha, setAlpha] = useState<number>(0);
  const [textOpacity, setTextOpacity] = useState(0);

  const [tooltips, setTooltips] = useState(false);

  // degree to rotate centered text
  const textDeg: number = -PATHS.find(
    (item: PathsInterface) => item.sectionName === section
  )?.wheelDeg!;

  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => {
      const delay = 1 + i * 0.5;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 2, bounce: 0 },
          opacity: { delay, duration: 0.01 },
        },
      };
    },
  };

  // rotate wheel onClick & display centered text
  function clickTopic(wheelDeg: number, sectionName: string): void {
    setWheelDeg(wheelDeg);
    setSmallCircleVisible("visible");
    setTextOpacity(1);

    setSection(sectionName);

    setTimeout(() => {
      setSmallCircleVisible("hidden");
      setTextOpacity(0);
    }, 2250);
  }

  return (
    <TooltipsContext.Provider value={tooltips}>
      <TooltipSwitch tooltips={tooltips} setTooltips={setTooltips} />
      <motion.div
        // initial={{ "--rotate": "0deg" }}
        // animate={{ "--rotate": `${wheelDeg}deg` }}
        initial={{ rotate: 0 }}
        animate={{ rotate: wheelDeg }}
        transition={{ duration: 2 }}
      >
        <svg
          id="wheel"
          className="cf"
          viewBox="0 0 300 300"
          style={{ transform: "rotate(var(--rotate))" }}
        >
          {PATHS.map((path: PathsInterface) => (
            <WheelSection
              key={path.sectionName}
              moveWheel={clickTopic}
              pathsDef={path}
              svgObj={SVG_PATHS[path.sectionName as keyof typeof SVG_PATHS]}
              activeSection={section}
            />
          ))}

          <motion.svg
            width="200"
            height="200"
            viewBox="0 0 200 200"
            visibility={"visible"}
            initial="hidden"
            animate={`${smallCircleVisible}`}
            onClick={() => clickTopic(0, "main")}
          >
            <motion.circle
              cx="150"
              cy="150"
              r="40"
              fill={`rgba(102, 51, 153, ${alpha})`}
              stroke="#00E8FF"
              variants={draw}
              onHoverStart={() => setAlpha(0.1)}
              onHoverEnd={() => setAlpha(0)}
            />
            <motion.text
              x={150}
              y={150}
              fill={"url(#rad)"}
              fontWeight={600}
              initial={{ opacity: 0 }}
              animate={{
                rotate: [null, textDeg || 0],
                opacity: textOpacity,
              }}
              transition={{
                type: "spring",
                // duration: 1.5,
                damping: 3,
                stiffness: 50,
                restSpeed: 0.6,
                restDelta: 0.5,
              }}
              textAnchor={"middle"}
              dominantBaseline={"central"}
            >
              {section}
            </motion.text>
          </motion.svg>
        </svg>
      </motion.div>

      <footer>
        <div
          style={{
            position: "absolute",
            bottom: 10,
            left: 25,
            fontWeight: 600,
            color: "var(--light-blue)",
          }}
        >
          1.0.2
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 10,
            right: 25,
            fontWeight: 600,
          }}
        >
          <a
            href="https://textportfolio--winbisid.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            title={"testing deploy"}
          >
            Alpha 1.1.0
          </a>
        </div>
      </footer>
    </TooltipsContext.Provider>
  );
}
