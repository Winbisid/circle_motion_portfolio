import { expertiseIcons } from "../../../utils";
import "./Expertise.css";

interface Icons {
  id: number;
  name: string;
  source: string;
}

export default function Expertise() {
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
            {/* {expertiseIcons?.reverse().map((icon: Icons) => ( */}
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
