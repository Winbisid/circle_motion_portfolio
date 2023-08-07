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

function Option({ name }) {
  return (
    <li>
      <a>{name}</a>
    </li>
  );
}
