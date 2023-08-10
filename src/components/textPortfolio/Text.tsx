import Home from "./home/Home";
import Nav from "./nav/Nav";
import "./Text.css";

export default function Text() {
  return (
    <>
      <Nav />
      <div id="text-main-wrapper">
        <Home />
      </div>
    </>
  );
}
