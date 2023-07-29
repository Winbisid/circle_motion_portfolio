import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Tooltip from "../tooltip/Tooltip";

export default function LeftArrow({
  hover,
  x,
  y,
  deg,
  leftArrowClick,
  svgDeg,
  innerPathHover,
  name,
}) {
  const [alpha, setAlpha] = useState(0);

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
        viewBox="0 0 512 466.034"
        width={15}
        x={x}
        y={y}
        whileHover={() => setAlpha(1)}
        onHoverEnd={() => setAlpha(0)}
        onClick={leftArrowClick}
      >
        <motion.path
          fill={`rgba(0, 232, 255, ${alpha})`}
          animate={{ rotate: [deg] }}
          d="M104.056 389.964c10.427-14.041 21.175-28.936 25.608-36.762 11.17-19.56 38.573-22.839 39.743-14.409.464 3.338-5.327 14.432-12.987 27.255-17.661 29.563-47.32 74.932-76.335 93.533-6.596 4.229-13.085 6.799-18.889 6.415-4.445-.293-7.708-2.788-9.367-8.266-15.214-39.597-31.854-74.427-50.414-102.836-1.346-2.42-1.695-4.619-1.203-6.63 1.64-6.713 15.648-12.587 21.59-14.458 8.554-2.694 13.591-1.685 18.339 5.18 9.347 13.517 16.23 29.001 22.912 44.549 7.208-111.915 54.801-204.033 126.755-269.945C269.413 40.67 378.799-.088 496.194 0c6.723.005 10.497.578 13.313 4.082 2.543 3.164 2.712 7.142 2.349 14.119-.564 10.815-2.624 16.829-9.196 20.809-5.621 3.404-13.818 4.255-27.424 5.082-4.014.243-8.023.617-12.038.884-98.579 6.55-189.551 45.369-255.347 110.108-59.538 58.58-98.481 138.446-103.795 234.88z"
        />
        {
          // innerLeftHover && (
          // <svg width={600} x={x} y={y} viewBox="0 0 500 466">
          //   <motion.text
          //     x={150}
          //     y={150}
          //     fill="white"
          //     fontSize={500}
          //     textAnchor={"middle"}
          //     dominantBaseline={"central"}
          //     // animate={{ rotate: [null, svgDeg] }}
          //     animate={{ rotate: [svgDeg], x: [-1500, 500, -1500] }}
          //     transition={{ duration: 2, repeat: 39 }}
          //   >
          //     {name}
          //   </motion.text>
          // </svg>
          // )
        }
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
