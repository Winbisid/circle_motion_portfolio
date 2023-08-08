import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Gradient from "./Gradient";
import { IconsInterface, DegInterface } from "../../../interfaces";

interface SvgProps {
  deg: DegInterface;
  sectionName: string;
  path: IconsInterface;
  placeDir?: "left" | "right";
  hover?: boolean;
}

export default function Svg({
  deg,
  sectionName,
  path,
  placeDir,
  hover,
}: SvgProps) {
  const { width, x, y, d, viewBox, leftPos, rightPos, link, name } = path;

  // set pos to x and y for the main icons
  const [pos, setPos] = useState({
    x: x,
    y: y,
  });

  // choose the container the icons reside in
  useEffect(() => {
    if (!x) {
      if (placeDir === "right") {
        setPos({
          x: rightPos?.x,
          y: rightPos?.y,
        });
      } else {
        setPos({
          x: leftPos?.x,
          y: leftPos?.y,
        });
      }
    }
  }, [placeDir]);

  // useEffect(() => {
  //   hover && console.log(name);
  // }, [hover]);

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      imageRendering="optimizeQuality"
      fillRule="evenodd"
      clipRule="evenodd"
      viewBox={viewBox}
      width={width}
      x={pos.x}
      y={pos.y}
    >
      <Gradient />
      <motion.path
        className={link && "linkedSvg"}
        initial={{ opacity: 0, fill: "#00E8FF" }}
        animate={{
          fill: hover && link ? "url(#lin)" : "#00E8FF",
          opacity: 1,
          rotate: [null, deg[sectionName as keyof DegInterface]],
          // x: placeDir === "right" ? [400, 0] : [-400, 0],
        }}
        whileHover={{ fill: link ? "url(#lin)" : "url(#rad)" }}
        transition={{ duration: 2.5 }}
        d={d}
        // id={`${path.name}-${path?.id}`}
      />
    </motion.svg>
  );
}
