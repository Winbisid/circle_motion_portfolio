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

  const [fillColor, setFillColor] = useState("#00E8FF");

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

  useEffect(() => {
    hover && link ? setFillColor("url(#lin)") : setFillColor("#00E8FF");
  }, [hover]);

  // if a link is present and hovering, change the color
  function onHoverSvg() {
    link ? setFillColor("url(#lin)") : setFillColor("url(#rad)");
  }

  function onHoverEndSvg() {
    setFillColor("#00E8FF");
  }

  useEffect(() => {
    hover && console.log(name);
  }, [hover]);

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
      whileHover={onHoverSvg}
      onHoverEnd={onHoverEndSvg}
    >
      <Gradient />
      <motion.path
        className={link && "linkedSvg"}
        fill={fillColor}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          rotate: [null, deg[sectionName as keyof DegInterface]],
          // x: placeDir === "right" ? [400, 0] : [-400, 0],
        }}
        transition={{ duration: 2.5 }}
        d={d}
        // id={`${path.name}-${path?.id}`}
      />
    </motion.svg>
  );
}
