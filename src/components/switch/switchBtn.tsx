import React from "react";
import reactLogo from "../../assets/react.svg";
import viteLogo from "/vite.svg";

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
    <div
      style={{
        backgroundColor: "indigo",
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={switchItUp}
    >
      <img
        src={isWheel ? reactLogo : viteLogo}
        style={{}}
        alt={isWheel ? "wheel" : "typewriter"}
      />
    </div>
  );
}
