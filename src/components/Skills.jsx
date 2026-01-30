export default function Skills() {
    return (
        <section className="skills" id="skills">
            <h2>Skills</h2>
         <section className="skill-categories">
            <div className="skill-category1">
                <h3>Frontend Development</h3>
                <ul>
                    <li>HTML5</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Responsive and mobile-friendly Design</li>

                </ul>
            </div>
            <div className="skill-category2">
                <h3>Backend & Data (Foundational)</h3>
                <ul>
                    <li>REST APIs (frontend and backend integration)</li>
                    <li>Supabase (authentication, database integration)</li>
                    <li>Basic SQL (querying, filtering, and relational concepts)</li>
                    <li>Data handling fundamentals</li>
                </ul>
            </div>
            <div className="skill-category3">
                <h3>Tools & Platforms</h3>
                <ul>
                    <li>Git & GitHub</li>
                    <li>VS Code</li>
                    <li>Chrome DevTools</li>
                    <li>Basic Command Line (basic Git, npm, and project tooling)</li>
                    <li>Vercel (deployment and environment configuration)</li>
                    <li>Debugging and testing fundamentals</li>
                </ul>
            </div>
            </section>
        </section>
    );
}