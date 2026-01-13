import { expertiseIcons } from "../../../utils";
import "./Expertise.css";

interface Icons {
  id: number;
  name: string;
  source: string;
}

const highlights = [
  "Network & security engineering",
  "Infra & automation (k8s, cloud, Pi lab)",
  "Creative coding & 3D UI",
  "Full stack product delivery",
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
              <h2 className="heading">From secure infra to creative code.</h2>
              <p className="paragraph">
                I blend hands-on security, network engineering, and automation with creative coding and product thinking. My builds span resilient infra, playful UIs, and full stack systems that scale and delight.
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
