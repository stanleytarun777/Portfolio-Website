import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
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
        <Hero />

        <div className="page-stack">
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
