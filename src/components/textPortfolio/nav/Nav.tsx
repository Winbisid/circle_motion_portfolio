import { useEffect, useState } from "react";
import "./Nav.css";

interface NavLink {
  id: string;
  label: string;
}

export default function Nav() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;

    const onScroll = () => {
      const currentY = window.scrollY;
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        const delta = currentY - lastY;
        const scrollingDown = delta > 6;
        const scrollingUp = delta < -6;
        const nearTop = currentY < 80;

        if (nearTop || scrollingUp) {
          setHidden(false);
        } else if (scrollingDown && currentY > 140) {
          setHidden(true);
        }

        lastY = currentY;
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const options: NavLink[] = [
    { id: "home", label: "Home" },
    { id: "expertise", label: "Expertise" },
    { id: "showcase", label: "Showcase" },
    { id: "projects", label: "Projects" },
    { id: "doing-now", label: "Doing|Now" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav id="top-menu" className={hidden ? "nav-hidden" : ""}>
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
