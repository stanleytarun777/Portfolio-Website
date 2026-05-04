import './App.css';
import Navbar from './components/Navbar.jsx';
import About from './components/About.jsx';
import Hero from './components/Hero.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import BackgroundScene from './components/BackgroundScene.jsx';


function App() {
  return (
    <div className="app-shell">
      <BackgroundScene />
      <div className="app-overlay"></div>
      <div className="app-content">
        <Navbar />
        <main className="page-sections">
          <About />
          <Hero />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>

  );
}

export default App;
