import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[var(--canvas)] text-slate-950">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.92),transparent_28%),linear-gradient(180deg,rgba(13,35,70,0.05),rgba(13,35,70,0))]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[38rem] bg-[linear-gradient(180deg,rgba(12,31,58,0.06),transparent)]" />

      <Navbar />

      <main className="relative z-10">
        <Hero />

        <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 pb-12 sm:px-6 lg:gap-14 lg:px-8">
          <About />
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
