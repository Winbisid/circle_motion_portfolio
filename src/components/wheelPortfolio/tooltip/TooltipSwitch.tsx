import { useState } from "react";
import { motion } from "framer-motion";
import solidTooltip from "../../../assets/tooltip.svg";
import lineTooltip from "../../../assets/tooltip-line.svg";

interface TooltipSwitchProps {
  tooltips: boolean;
  setTooltips: Function;
}

export default function TooltipSwitch({
  tooltips,
  setTooltips,
}: TooltipSwitchProps) {
  const [visibility, setVisibility] = useState<"visible" | "hidden">("hidden");
  return (
    <motion.div initial={{ opacity: 0.5 }} whileHover={{ opacity: 1 }}>
      <motion.div
        onClick={() => setTooltips((prev: boolean) => !prev)}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          backgroundColor: tooltips ? "purple" : "indigo",
          // backgroundColor: "indigo",
          borderRadius: "50%",
          margin: 20,
          // visibility: "hidden",
          zIndex: 99,
        }}
        onHoverStart={() => setVisibility("visible")}
        onHoverEnd={() => setVisibility("hidden")}
      >
        <img
          src={tooltips ? solidTooltip : lineTooltip}
          width={70}
          style={{
            display: "flex",
            padding: 15,
          }}
          alt="information icon"
        />
      </motion.div>
      <motion.div
        animate={{
          visibility: visibility,
          position: "absolute",
          left: 25,
          top: 150,
        }}
        style={{ color: "hsl(270,50%,50%)", fontSize: 25, fontWeight: 600 }}
      >
        tooltips {tooltips ? "on" : "off"}
      </motion.div>
    </motion.div>
  );
}
