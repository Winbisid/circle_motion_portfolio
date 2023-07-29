import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Tooltip from "../tooltip/Tooltip";

export default function RightArrow({
  hover,
  x,
  y,
  deg,
  rightArrowClick,
  innerPathHover,
  svgDeg,
  name,
}) {
  const [alpha, setAlpha] = useState(0);

  useEffect(() => {
    hover ? setAlpha(1) : setAlpha(0);
  }, [hover]);

  const degLen = name?.length * 6;

  return (
    <g>
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        shapeRendering="geometricPrecision"
        textRendering="geometricPrecision"
        imageRendering="optimizeQuality"
        fillRule="evenodd"
        clipRule="evenodd"
        viewBox="0 0 466 511.963"
        width={15}
        x={x}
        y={y}
        whileHover={() => setAlpha(1)}
        onHoverEnd={() => setAlpha(0)}
        onClick={rightArrowClick}
      >
        <motion.path
          fill={`rgba(0, 232, 255, ${alpha})`}
          animate={{ rotate: [deg] }}
          d="M368.179 98.243c-13.255 9.845-27.319 19.992-34.708 24.178-18.467 10.546-21.562 36.419-13.604 37.523 3.152.438 13.627-5.03 25.733-12.262 27.911-16.675 70.746-44.677 88.308-72.07 3.992-6.228 6.419-12.355 6.056-17.834-.277-4.197-2.632-7.277-7.804-8.844-37.385-14.364-70.269-30.075-97.091-47.598-2.285-1.271-4.361-1.6-6.26-1.136-6.338 1.549-11.884 14.774-13.65 20.384-2.543 8.076-1.591 12.832 4.891 17.315 12.761 8.824 27.381 15.323 42.06 21.632-105.663 6.805-192.635 51.739-254.865 119.674C38.398 254.363-.083 357.638 0 468.475c.005 6.348.546 9.911 3.854 12.57 2.987 2.401 6.743 2.56 13.33 2.217 10.212-.532 15.89-2.477 19.647-8.682 3.213-5.307 4.017-13.046 4.798-25.891.23-3.79.583-7.576.834-11.366 6.185-93.073 42.835-178.962 103.958-241.083 55.307-56.212 130.712-92.98 221.758-97.997z"
        />
      </motion.svg>
      {
        <Tooltip
          name={name}
          svgDeg={svgDeg}
          x={x}
          y={y}
          hover={innerPathHover}
        />
      }
    </g>
  );
}
