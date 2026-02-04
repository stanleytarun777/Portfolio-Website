export default function Hero() {
    return (
        <section className="hero">
            <h2>What I Bring as a CIS major</h2>
            <div className="hero-summary">
                <ul>
                    <li>Strong foundation in programming and web development.</li>
                    <li>Understanding of how technology supports business systems.</li>
                    <li>Experience building projects, not just coursework demos.</li>
                    <li>Ability to learn quickly and adapt to new tools and environments.</li>
                </ul>

                <div className="hero-resume-card" aria-label="Resume download and preview">
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
                    <span className="hero-resume-title">Resume</span>
                    <div className="hero-resume-actions">
                        <a
                            className="resume-btn"
                            href="/Stanley_Nyford_Resume.pdf"
                            download
                            rel="noopener noreferrer"
                        >
                            Download
                        </a>
                        <a
                            className="resume-btn outline"
                            href="/Stanley_Nyford_Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Preview
                        </a>
                    </div>
                </div>
            </div>

        </section>
    );
}