import { motion, useAnimation } from "framer-motion";
import { forwardRef, useEffect, useMemo, useState, type ReactNode } from "react";
import "./Home.css";

const Home = forwardRef<HTMLDivElement, { children?: ReactNode }>(({ children }, ref) => {
  const [hoveringAvatar, setHoveringAvatar] = useState(false);
  const controls = useAnimation();
  const messages = useMemo(
    () => [
      "Ship fast, profile later.",
      "Threat model early—save rewrites.",
      "Perf matters: measure, don’t guess.",
      "DX is UX for builders.",
      "Accessibility is a feature, not a chore.",
    ],
    []
  );
  const [messageIdx, setMessageIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setMessageIdx((prev) => (prev + 1) % messages.length);
    }, 6500);
    return () => clearInterval(id);
  }, [messages.length]);

  useEffect(() => {
    if (!hoveringAvatar) {
      controls.start({
        x: [0, 14, -12, 0],
        y: [0, -16, 10, 0],
        transition: { duration: 10, repeat: Infinity, ease: "easeInOut" },
      });
    } else {
      controls.stop();
    }
  }, [controls, hoveringAvatar]);

  return (
    <div className="home" id="home" ref={ref}>
      {children}
      <div className="hero">
        <div className="margin-wrapper hero__content">
          <div className="hero__copy">
            <p className="eyebrow">Network & security engineer • Systems orchestrator</p>
            <h1>Winbisid.</h1>
            <p className="lede">
              Architecting uptime, defending endpoints, and scripting away toil—my toolkit spans packet traces, print queues, and pipelines. From automating the mundane to securing the edge, I design systems that just work (and keep working), with a focus on reliability, security, and clarity.
            </p>
            <div className="hero__cta">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                className="cta primary"
              >
                View projects
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                className="cta ghost"
              >
                Get in touch
              </motion.a>
            </div>
          </div>

          <div className="hero__visual">
            <motion.div
              className="avatar-wrap"
              drag
              dragConstraints={{ top: 40, left: -40, bottom: 40, right: 40 }}
              animate={controls}
              whileHover={{ scale: 1.02 }}
              onHoverStart={() => setHoveringAvatar(true)}
              onHoverEnd={() => setHoveringAvatar(false)}
            >
              <motion.img
                src="/developer-arcade-96.png"
                alt="Retro developer avatar"
                draggable={false}
                transition={{ type: "spring", stiffness: 140, damping: 14 }}
              />
              <motion.div
                key={messageIdx}
                className="thought-bubble"
                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <span className="bubble-text">{messages[messageIdx]}</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Home;
