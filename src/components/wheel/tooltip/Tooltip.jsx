import { motion } from "framer-motion";

export default function Tooltip({ hover, x, y, name, svgDeg }) {
  const degLen = name?.length * 6;

  return (
    hover && (
      <motion.svg
        width={150}
        x={x}
        y={y}
        viewBox="100 -100 900 500"
        // animate={{ rotate: [svgDeg] }}
      >
        <motion.circle
          cx={150}
          cy={150}
          r={50}
          fill="hsl(270,50%,20%)"
          // animate={{ rotate: [svgDeg] }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          // transform={`rotate(${svgDeg})`}
        />
        <motion.text
          x={150}
          y={150}
          fill="aqua"
          stroke={"indigo"}
          fontSize={40}
          fontWeight={600}
          textAnchor="middle"
          dominantBaseline={"central"}
          // animate={{ rotate: [svgDeg], x: [-175, 75, -175] }}
          animate={{
            rotate: [svgDeg],
            x: [-degLen, degLen, -degLen],
          }}
          transition={{ duration: 5, ease: "anticipate", repeat: 999 }}
          // transform={`rotate(${svgDeg})`}
        >
          {name}
        </motion.text>
      </motion.svg>
    )
  );
}
