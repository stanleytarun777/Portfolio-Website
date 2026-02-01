import { useState } from "react";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="navbar-inner">
                <h1>Stanley NYFORD</h1>

                <button
                    className="navbar-toggle"
                    aria-label="Toggle navigation"
                    onClick={() => setOpen(!open)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>

            <ul className={open ? "open" : ""}>
                <li><a href="#Projects">Projects</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
}