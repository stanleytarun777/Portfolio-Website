import "./App.css";
import Navbar from "./components/Navbar.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Experience from "./components/Experience.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className="app-shell">
      <div className="app-overlay" />
      <div className="app-overlay-top" />

      <Navbar />

      <main className="main-content">
        <div className="page-stack">
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Contact />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
