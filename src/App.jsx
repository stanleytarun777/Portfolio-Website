import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Experience from "./components/Experience.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[var(--canvas)] text-slate-950">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.96),transparent_28%),linear-gradient(180deg,rgba(10,30,58,0.06),rgba(10,30,58,0)_42%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[32rem] bg-[linear-gradient(180deg,rgba(18,58,114,0.08),transparent)]" />
      <div className="pointer-events-none absolute left-[-12rem] top-[22rem] h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle,rgba(18,58,114,0.08),transparent_70%)] blur-3xl" />

      <Navbar />

      <main className="relative z-10">
        <Hero />

        <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 pb-12 sm:px-6 lg:gap-8 lg:px-8 lg:pb-16">
          <About />
          <Projects />
          <Skills />
          <Experience />
          <Contact />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
