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
    <div>
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
          //   visibility: "hidden",
          opacity: visibility === "hidden" ? 0.5 : 1,
          zIndex: 99,
        }}
        onHoverStart={() => setVisibility("visible")}
        onHoverEnd={() => setVisibility("hidden")}
      >
        <img
          src={tooltips ? solidTooltip : lineTooltip}
          width={80}
          style={{
            display: "flex",
            padding: 15,
          }}
          alt="information icon"
        />
      </motion.div>
      <motion.div
        initial={{ visibility: "hidden" }}
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
    </div>
  );
}
