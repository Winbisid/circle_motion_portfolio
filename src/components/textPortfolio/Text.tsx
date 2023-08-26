// import Nav from "./nav/Nav";
import Home from "./home/Home";
import HeroBg from "./heroBg/HeroBg";
import "./Text.css";
import Expertise from "./expertise/Expertise";
import Projects from "./projects/Projects";

export default function Text() {
  return (
    <>
      {/* <Nav /> */}
      <div className="text-main-wrapper">
        <Home />
        <HeroBg />
        <Expertise />
        <Projects />
        <div style={{ backgroundColor: "forestgreen" }}>
          <h1 style={{ margin: 0 }}>ONGOING</h1>
          <h1>ONGOING</h1>
          <h1>ONGOING</h1>
          <h1>ONGOING</h1>
          <h1>ONGOING</h1>
          <h1>ONGOING</h1>
          <h1>ONGOING</h1>
          <h1>ONGOING</h1>
          <h1>ONGOING</h1>
          <h1>ONGOING</h1>
          <h1>ONGOING</h1>
          <h1>ONGOING</h1>
        </div>
      </div>
    </>
  );
}
