import { motion, AnimatePresence } from "framer-motion";
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
        // Alternate: verb changes at 5s, then adj at 5s, etc. Loop smoothly with no gap.
        let toggle = true;
        const timer = setInterval(() => {
            if (toggle) {
                setVerbIdx((v) => {
                    if (v + 1 >= verbs.length) return 0;
                    return v + 1;
                });
            } else {
                setAdjIdx((a) => {
                    if (a + 1 >= adjectives.length) return 0;
                    return a + 1;
                });
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
                        Let’s
                        <AnimatePresence mode="wait" initial={false}>
                            <motion.span
                                key={"verb-" + verbs[verbIdx]}
                                className="contact-verb"
                                style={{ color: '#cf59e6', display: 'inline-block', margin: '0 0.25em' }}
                                initial={{
                                    opacity: 0,
                                    y: 0,
                                    scaleY: 1.8,
                                    skewY: 12,
                                    filter: 'blur(12px)'
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                    scaleY: 1,
                                    skewY: 0,
                                    filter: 'blur(0px)'
                                }}
                                exit={{
                                    opacity: 0,
                                    y: 60,
                                    scaleY: 2.5,
                                    skewY: 24,
                                    filter: 'blur(18px)'
                                }}
                                transition={{ duration: 0.95, ease: [0.4, 0.7, 0.2, 1] }}
                            >
                                {verbs[verbIdx]}
                            </motion.span>
                        </AnimatePresence>
                        <span style={{ margin: '0 0.25em' }}>something</span>
                        <AnimatePresence mode="wait" initial={false}>
                            <motion.span
                                key={"adj-" + adjectives[adjIdx]}
                                className="contact-adj"
                                style={{ color: '#6cf7e6', display: 'inline-block', margin: '0 0.25em' }}
                                initial={{
                                    opacity: 0,
                                    y: 0,
                                    scaleY: 1.8,
                                    skewY: 12,
                                    filter: 'blur(12px)'
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                    scaleY: 1,
                                    skewY: 0,
                                    filter: 'blur(0px)'
                                }}
                                exit={{
                                    opacity: 0,
                                    y: 60,
                                    scaleY: 2.5,
                                    skewY: 24,
                                    filter: 'blur(18px)'
                                }}
                                transition={{ duration: 0.95, ease: [0.4, 0.7, 0.2, 1] }}
                            >
                                {adjectives[adjIdx]}
                            </motion.span>
                        </AnimatePresence>.
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