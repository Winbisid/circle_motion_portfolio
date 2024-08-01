// import Nav from "./nav/Nav";
import Home from "./home/Home";
import HeroBg from "./heroBg/HeroBg";
import "./Text.css";
import Expertise from "./expertise/Expertise";
import Projects from "./projects/Projects";
import DoingNow from "./Ongoing/DoingNow";
import Contact from "./contact/Contact";

export default function Text() {
  return (
    <>
      {/* <Nav /> */}
      <div className="text-main-wrapper">
        <Home />
        <HeroBg />
        <Expertise />
        <Projects />
        {/* <DoingNow /> */}
        <Contact />
      </div>
    </>
  );
}
