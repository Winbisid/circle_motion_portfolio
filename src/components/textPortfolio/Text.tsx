import React, { useEffect, useRef, useState } from "react";
import Nav from "./nav/Nav";
import Switch from "../switch/switchBtn";
import Home from "./home/Home";
import HeroBg from "./heroBg/HeroBg";
import "./Text.css";
import Expertise from "./expertise/Expertise";
import Projects from "./projects/Projects";
import DoingNow from "./Ongoing/DoingNow";
import Contact from "./contact/Contact";
import Showcase from "./showcase/Showcase";

interface TextProps {
  isWheel: boolean;
  setWheelPortfolio: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Text({ isWheel, setWheelPortfolio }: TextProps) {
  const homeRef = useRef<HTMLDivElement | null>(null);
  const [showSwitch, setShowSwitch] = useState(true);

  useEffect(() => {
    const node = homeRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setShowSwitch(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Nav />
      {showSwitch && <Switch isWheel={isWheel} setWheelPortfolio={setWheelPortfolio} subtle />}
      <div className="text-main-wrapper">
        <Home ref={homeRef} />
        <HeroBg />
        <Expertise />
        <Showcase />
        <Projects />
        <DoingNow />
        <Contact />
      </div>
    </>
  );
}
