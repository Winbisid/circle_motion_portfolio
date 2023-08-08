import { useContext } from "react";
import { motion } from "framer-motion";
import Tooltip from "../tooltip/Tooltip";
import TooltipsContext from "../../../utils/wheelPortfolio/tooltipsContext";

interface ArrowProps {
  hover: boolean;
  pos: { x: number; y: number };
  deg: number;
  arrowClick: () => void;

  svgDeg: number;
  innerPathHover: boolean;
  name: string;
  path: { viewBox: string; d: string };
}

export default function Arrow({
  hover,
  pos,
  deg,
  arrowClick,
  svgDeg,
  innerPathHover,
  name,
  path,
}: ArrowProps) {
  const tooltips = useContext(TooltipsContext);

  const { viewBox, d } = path;
  const { x, y } = pos;

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
        initial={{ fillOpacity: 0 }}
        whileHover={{ fillOpacity: 1 }}
        animate={{ fillOpacity: hover ? 1 : 0 }}
        onClick={arrowClick}
      >
        <motion.path
          fill={"rgb(0,232,255)"}
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
          onHover={innerPathHover}
        />
      )}
    </g>
  );
}
