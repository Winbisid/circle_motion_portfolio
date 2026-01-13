import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import "./Contact.css";

const links = [
    { label: "GitHub", href: "https://github.com/Winbisid" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/winbisid" },
];

export default function Contact() {
    const verbs = ["build", "hack", "create", "engineer", "design"];
    const adjectives = ["purposeful", "delightful", "secure", "bold", "impactful"];
    const [verbIdx, setVerbIdx] = useState(0);
    const [adjIdx, setAdjIdx] = useState(0);

    useEffect(() => {
        // Alternate: verb changes at 5s, then adj at 5s, etc.
        let toggle = true;
        const timer = setInterval(() => {
            if (toggle) {
                setVerbIdx((v) => (v + 1) % verbs.length);
            } else {
                setAdjIdx((a) => (a + 1) % adjectives.length);
            }
            toggle = !toggle;
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="contact" id="contact">
            <div className="margin-wrapper contact__inner">
                <div>
                    <p className="eyebrow">Contact</p>
                    <h2 className="heading">
                        Let’s{' '}
                        <span className="contact-verb" style={{ color: '#cf59e6', transition: 'color 0.3s' }}>
                            {verbs[verbIdx]}
                        </span>{' '}
                        something{' '}
                        <span className="contact-adj" style={{ color: '#6cf7e6', transition: 'color 0.3s' }}>
                            {adjectives[adjIdx]}
                        </span>.
                    </h2>
                    <p className="contact__lede">
                        Open to product engineering, frontend, and creative coding collabs.
                        Drop a line—responses typically within one business day.
                    </p>
                </div>

                <div className="contact__actions">
                    <motion.a
                        className="cta primary"
                        href="mailto:winbisid@gmail.com"
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        Email me
                    </motion.a>
                    <div className="contact__links">
                        {links.map((link) => (
                            <a key={link.label} href={link.href} target="_blank" rel="noreferrer noopener">
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}