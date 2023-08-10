import "./Nav.css";
import reactLogo from "../../../assets/react.svg";

export default function Nav() {
  const options = ["Home", "Expertise", "Projects", "Doing|Now", "Contact"];
  return (
    <nav id="top-menu">
      <ul>
        {options.map((item) => (
          <Option
            key={item}
            name={item}
            // name={item.toUpperCase()}
            // name={`\\ \\ ${item} / /`}
          />
        ))}
      </ul>
      {/* <ul
        id="nav-switch"
        style={{
          display: "none",
          alignItems: "center",
          padding: "15px",
          // visibility: "hidden",
        }}
      >
        <img src={reactLogo} width={"20"} />
      </ul> */}
    </nav>
  );
}

interface OptionProps {
  name: string;
}

function Option({ name }: OptionProps) {
  return (
    <li>
      <a>{name}</a>
    </li>
  );
}
