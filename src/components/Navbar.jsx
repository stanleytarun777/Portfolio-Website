import { useState } from "react";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const links = [
        { href: "#Projects", label: "Projects" },
        { href: "#skills", label: "Skills" },
        { href: "#contact", label: "Contact" },
    ];

    const handleLinkClick = () => setOpen(false);

    return (
        <nav className="navbar">
            <div className="navbar-inner">
                <h1>Stanley NYFORD</h1>

                <button
                    className="navbar-toggle"
                    aria-label="Toggle navigation"
                    aria-expanded={open}
                    aria-controls="primary-navigation"
                    onClick={() => setOpen(!open)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>

            <ul id="primary-navigation" className={open ? "open" : ""}>
                {links.map((link) => (
                    <li key={link.href}>
                        <a href={link.href} onClick={handleLinkClick}>
                            {link.label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}