import "./Nav.css";

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
