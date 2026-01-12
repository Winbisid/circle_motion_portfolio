import "./Nav.css";

interface NavLink {
  id: string;
  label: string;
}

export default function Nav() {
  const options: NavLink[] = [
    { id: "home", label: "Home" },
    { id: "expertise", label: "Expertise" },
    { id: "showcase", label: "Showcase" },
    { id: "projects", label: "Projects" },
    { id: "doing-now", label: "Doing Now" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav id="top-menu">
      <ul>
        {options.map((item) => (
          <li key={item.id}>
            <a href={`#${item.id}`}>{item.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
