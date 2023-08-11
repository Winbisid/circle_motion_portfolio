import Nav from "./nav/Nav";
import Home from "./home/Home";
import HeroBg from "./heroBg/HeroBg";
import "./Text.css";

export default function Text() {
  return (
    <>
      <Nav />
      <div id="text-main-wrapper">
        <Home />
        <HeroBg />
      </div>
    </>
  );
}
