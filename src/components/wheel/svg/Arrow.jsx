import { useState, useEffect, useContext } from "react";
import { motion } from "framer-motion";
import Tooltip from "../tooltip/Tooltip";
import TooltipsContext from "../../../utils/tooltipsContext";

export default function Arrow({
  hover,
  pos,
  deg,
  arrowClick,
  svgDeg,
  innerPathHover,
  name,
  path,
}) {
  const [alpha, setAlpha] = useState(0);
  const tooltips = useContext(TooltipsContext);

  const { viewBox, d } = path;
  const { x, y } = pos;

  useEffect(() => {
    hover ? setAlpha(1) : setAlpha(0);
  }, [hover]);

  return (
    <g>
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        shapeRendering="geometricPrecision"
        textRendering="geometricPrecision"
        imageRendering="optimizeQuality"
        fillRule="evenodd"
        clipRule="evenodd"
        viewBox={viewBox}
        width={15}
        x={x}
        y={y}
        whileHover={() => setAlpha(1)}
        onHoverEnd={() => setAlpha(0)}
        onClick={arrowClick}
      >
        <motion.path
          fill={`rgba(0, 232, 255, ${alpha})`}
          animate={{ rotate: [deg] }}
          d={d}
        />
      </motion.svg>
      {tooltips && (
        <Tooltip
          name={name}
          svgDeg={svgDeg}
          x={x}
          y={y}
          hover={innerPathHover}
        />
      )}
    </g>
  );
}
