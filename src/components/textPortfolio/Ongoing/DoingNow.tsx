import { motion } from "framer-motion";
import "./DoingNow.css";

const nowItems = [
  {
    title: "Polishing the text portfolio",
    detail: "Tightening section flow, CTAs, and anchor navigation for fast scanning.",
  },
  {
    title: "Experimenting with micro-motion",
    detail: "Testing low-cost framer-motion patterns that read well on mobile.",
  },
  {
    title: "Writing case notes",
    detail: "Drafting concise blurbs for recent builds to pair with the carousel.",
  },
];

export default function DoingNow() {
  return (
    <div className="ongoing" id="doing-now">
      <div className="margin-wrapper">
        <p className="eyebrow">Now</p>
        <h2 className="heading">Currently in motion</h2>
        <div className="now-grid">
          {nowItems.map((item) => (
            <motion.div
              key={item.title}
              className="now-card"
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 200, damping: 16 }}
            >
              <p className="now-title">{item.title}</p>
              <p className="now-detail">{item.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
