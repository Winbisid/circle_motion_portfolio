import { expertiseIcons } from "../../../utils";
import "./Expertise.css";

interface Icons {
  id: number;
  name: string;
  source: string;
}

const highlights = [
  "Design-to-dev systems",
  "Motion and micro-interactions",
  "Accessible, performant frontends",
  "API-driven product work",
];

const stacks = ["TypeScript", "React", "Vite", "Three.js", "Node", "Postgres"];

export default function Expertise() {
  return (
    <div className="expertise" id="expertise">
      <section className="icons-section">
        <div className="icons-section__top">
          <div className="margin-wrapper expertise__header">
            <div>
              <p className="eyebrow">Expertise</p>
              <h2 className="heading">From playful UI to robust delivery.</h2>
              <p className="paragraph">
                I pair interaction design with solid engineering—shipping
                interfaces that animate smoothly, stay readable, and perform
                under real-world traffic.
              </p>
              <div className="chip-row">
                {highlights.map((item) => (
                  <span key={item} className="chip">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="stack">
              <p className="stack__label">Recent stack</p>
              <div className="chip-row">
                {stacks.map((item) => (
                  <span key={item} className="chip ghost">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="icons-section__bottom">
          <div className="icons-section__bottom-wrapper icons-container__anim1">
            {expertiseIcons.map((icon: Icons) => (
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

          <div className="icons-section__bottom-wrapper icons-container__anim2">
            {expertiseIcons.sort().map((icon: Icons) => (
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
