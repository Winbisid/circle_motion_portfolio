import { motion } from "framer-motion";
import "./Contact.css";

const links = [
    { label: "GitHub", href: "https://github.com/Winbisid" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/winbisid" },
];

export default function Contact() {
    return (
        <div className="contact" id="contact">
            <div className="margin-wrapper contact__inner">
                <div>
                    <p className="eyebrow">Contact</p>
                    <h2 className="heading">Let’s build something purposeful.</h2>
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