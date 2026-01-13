import React from "react";
import { motion } from "framer-motion";
import reactLogo from "../../assets/react.svg";
import codeLogo from "/code-programing-symbol.svg";

interface SwitchProps {
  isWheel: boolean;
  setWheelPortfolio: React.Dispatch<React.SetStateAction<boolean>>;
  anchorToParent?: boolean;
  subtle?: boolean;
}

export default function Switch({ isWheel, setWheelPortfolio, anchorToParent, subtle }: SwitchProps) {
  function switchItUp() {
    setWheelPortfolio((prev) => !prev);

    // onClick, route to /text-portfolio
  }

  const baseStyle = {
    backgroundColor: "indigo",
    borderRadius: anchorToParent ? 12 : 14,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: anchorToParent ? 8 : 10,
    position: anchorToParent ? "absolute" as const : "fixed" as const,
    top: anchorToParent ? 0 : 16,
    right: anchorToParent ? 0 : 16,
    zIndex: 110,
    boxShadow: subtle ? "0 6px 16px rgba(0,0,0,0.3)" : "0 10px 24px rgba(0,0,0,0.35)",
    opacity: subtle ? 0.55 : 0.8,
    pointerEvents: "auto" as const,
  };

  return (
    <motion.div
      style={baseStyle}
      initial={{ opacity: subtle ? 0.45 : 0.6 }}
      whileHover={{ opacity: subtle ? 0.92 : 1, scale: subtle ? 1.02 : 1.04 }}
      whileTap={{ scale: 0.97, opacity: 0.75 }}
      onClick={switchItUp}
    >
      <img
        width={anchorToParent ? 24 : 28}
        height={anchorToParent ? 24 : 28}
        src={isWheel ? reactLogo : codeLogo}
        // style={{}}
        alt={isWheel ? "wheel" : "typewriter"}
      />
    </motion.div>
  );
}
