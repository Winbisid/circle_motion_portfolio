import { easeIn, motion } from "framer-motion";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <div id="image">
        <motion.img
          src="/developer-arcade-96.png"
          drag
          //   drag="x"
          dragConstraints={{ top: 50, left: 100, bottom: 50, right: 200 }}
          animate={{ x: [0, 200, 0], y: [0, 50, 200, 0] }}
          transition={{
            duration: 10,
            repeat: 999999999999999,
            ease: "easeInOut",
          }}
          //   dragSnapToOrigin={true}
        />
      </div>

      <div id="name">
        <h1>Winbisid.</h1>
      </div>

      <div id="intro">
        {/* <p>
          Passionate and driven self-taught developer with a strong foundation
          in web and software development. Adept at transforming innovative
          ideas into functional, user-friendly applications through a
          combination of self-guided learning and hands-on project experience.
        </p> */}
        <p>
          With each stroke of the keyboard, I craft impeccable code, seemingly
          cryptic to the untrained eye. My skills in web development, design and
          problem-solving set me apart from the rest.
        </p>
        {/* <p>
          Committed to continuous learning and staying updated with industry
          trends to deliver high-quality solutions. Known for problem-solving
          prowess, adaptability, and a collaborative approach that fosters team
          success. Eager to contribute technical expertise and creativity to a
          dynamic development team.
        </p> */}
      </div>
    </div>
  );
}
