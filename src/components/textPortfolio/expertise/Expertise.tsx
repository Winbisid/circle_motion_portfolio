import "./Expertise.css";

interface Icons {
  id: number;
  name: string;
  source: string;
}

export default function Expertise() {
  // data
  const icons: { data: Icons[] } = {
    data: [
      {
        id: 1,
        name: "HTML",
        source: "/icons/html-5.svg",
      },
      {
        id: 2,
        name: "CSS",
        source: "/icons/css3.svg",
      },
      {
        id: 3,
        name: "JavaScript",
        source: "/icons/javascript.svg",
      },
      {
        id: 4,
        name: "TypeScript",
        source: "/icons/typescript.svg",
      },
      {
        id: 5,
        name: "React",
        source: "/icons/react-native.svg",
      },
      {
        id: 6,
        name: "Express.js",
        source: "/icons/express-js.svg",
      },
      {
        id: 7,
        name: "Next.js",
        source: "/icons/next-js.svg",
      },
      {
        id: 8,
        name: "MongoDB",
        source: "/icons/mongodb.svg",
      },
      //   {
      //     id: 9,
      //     name: "Mongoose",
      //     source: "/icons/mongoose.svg",
      //   },
      {
        id: 10,
        name: "Node.js",
        source: "/icons/nodejs.svg",
      },
      {
        id: 11,
        name: "PostgreSQL",
        source: "/icons/postgresql.svg",
      },
      {
        id: 12,
        name: "Python",
        source: "/icons/python.svg",
      },
      {
        id: 13,
        name: "C++",
        source: "/icons/c++.svg",
      },
      {
        id: 14,
        name: "Git",
        source: "/icons/git.svg",
      },
      //   {
      //     id: 15,
      //     name: "GitHub",
      //     source: "/icons/github.svg",
      //   },
      {
        id: 16,
        name: "Bash",
        source: "/icons/bash.svg",
      },
      //   {
      //     id: 17,
      //     name: "Expo",
      //     source: "/icons/expo.svg",
      //   },
      //   {
      //     id: 18,
      //     name: "VS Code",
      //     source: "/icons/visual-studio-code-insiders.svg",
      //   },
      //   {
      //     id: 19,
      //     name: "Kali Linux",
      //     source: "/icons/kali-linux.svg",
      //   },
      //   {
      //     id: 20,
      //     name: "Replit",
      //     source: "/icons/replit.svg",
      //   },
    ],
  };

  return (
    <div className="expertise">
      <section className="icons-section">
        <div className="icons-section__top">
          <div className="margin-wrapper">
            {/* <h1 className="heading">Expertise.</h1> */}
            <p className="paragraph">
              From dazzling front-end designs to blazing back-end magic, I
              unravel mind-boggling algorithms and engineer perplexing
              solutions.
            </p>
          </div>
        </div>

        <div className="icons-section__bottom">
          <div className="icons-section__bottom-wrapper icons-container__anim1">
            {icons?.data.map((icon: Icons) => (
              <div key={icon.id} className="icons-container">
                <img
                  className="icon"
                  src={icon.source}
                  alt={icon.name}
                  title={icon.name}
                />
                {/* <img src="../../../assets/react.svg" alt="s" /> */}
              </div>
            ))}
          </div>

          <div className="icons-section__bottom-wrapper icons-container__anim2">
            {/* {icons?.data.reverse().map((icon: Icons) => ( */}
            {icons?.data.sort().map((icon: Icons) => (
              <div key={icon.id} className="icons-container">
                <img
                  className="icon"
                  src={icon.source}
                  alt={icon.name}
                  title={icon.name}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
