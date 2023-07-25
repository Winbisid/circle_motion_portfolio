import { useState } from "react";
import { motion } from "framer-motion";
import { PATHS, SVGPATHS } from "../../utils";
import WheelSection from "./section/WheelSection";
import "./Wheel.css";

export default function Wheel() {
  const [wheelDeg, setWheelDeg] = useState(0);
  const [smallCircleVisible, setSmallCircleVisible] = useState("hidden");
  const [section, setSection] = useState({ selected: false, name: "main" });
  const [alpha, setAlpha] = useState(0);
  const [textOpacity, setTextOpacity] = useState(0);

  // degree to rotate centered text
  const textDeg = -PATHS.find((item) => item.sectionName === section.name)
    ?.wheelDeg;

  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
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
  function clickTopic(wheelDeg, sectionName) {
    setWheelDeg(wheelDeg);
    setSmallCircleVisible("visible");
    setTextOpacity(1);

    setSection({
      selected: sectionName === "main" ? false : true,
      name: sectionName,
    });

    setTimeout(() => {
      setSmallCircleVisible("hidden");
      setTextOpacity(0);
    }, 2250);
  }

  return (
    <motion.div
      initial={{ "--rotate": "0deg" }}
      animate={{ "--rotate": `${wheelDeg}deg` }}
      transition={{ duration: 2 }}
    >
      <svg
        id="wheel"
        className="cf"
        viewBox="0 0 300 300"
        style={{ transform: "rotate(var(--rotate))" }}
      >
        {PATHS.map((path) => (
          <WheelSection
            key={path.sectionName}
            moveWheel={clickTopic}
            pathsDef={path}
            svgObj={SVGPATHS[path.sectionName]}
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
            whileHover={() => setAlpha(0.1)}
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
            {section.name}
          </motion.text>
        </motion.svg>
      </svg>
    </motion.div>
  );
}
