export default function Hero() {
    return (
        <section className="hero">
            <h2>What I Bring as a CIS major</h2>
            <div className="hero-summary">
                <ul>
                    <li>Strong foundation in programming and web development.</li>
                    <li>Understanding of how technology supports business systems.</li>
                    <li>Experience building real projects, not just coursework demos.</li>
                    <li>Ability to learn quickly and adapt to new tools and environments.</li>
                </ul>

                <a
                    className="hero-resume-card"
                    href="/Stanley_Nyford_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                    aria-label="Download resume PDF"
                >
                    <svg
                        width="48"
                        height="48"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                    >
                        <path
                            d="M7 3h7l5 5v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"
                            stroke="#0f172a"
                            strokeWidth="1.5"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M14 3v4h4"
                            stroke="#0f172a"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M9 14h6M9 17h4"
                            stroke="#0f172a"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                        />
                    </svg>
                    <span>Download Resume</span>
                </a>
            </div>

        </section>
    );
}