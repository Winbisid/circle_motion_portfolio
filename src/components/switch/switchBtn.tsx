import React from "react";
import { motion } from "framer-motion";
import reactLogo from "../../assets/react.svg";
import codeLogo from "/code-programing-symbol.svg";

interface SwitchProps {
  isWheel: boolean;
  setWheelPortfolio: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Switch({ isWheel, setWheelPortfolio }: SwitchProps) {
  function switchItUp() {
    setWheelPortfolio((prev) => !prev);

    // onClick, route to /text-portfolio
  }

  return (
    <motion.div
      style={{
        backgroundColor: "indigo",
        // width: "100%",
        // height: "100%",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 15,
        position: "absolute",
        top: 25,
        right: 25,
        zIndex: 99,
      }}
      initial={{ opacity: 0.5 }}
      whileHover={{ opacity: 1 }}
      onClick={switchItUp}
    >
      <img
        width={40}
        height={40}
        src={isWheel ? reactLogo : codeLogo}
        // style={{}}
        alt={isWheel ? "wheel" : "typewriter"}
      />
    </motion.div>
  );
}
