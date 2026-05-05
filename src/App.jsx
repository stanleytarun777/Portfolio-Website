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
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.98),transparent_24%),linear-gradient(180deg,rgba(13,36,76,0.08),rgba(13,36,76,0)_34%),linear-gradient(180deg,#f6f9fd_0%,#edf3f9_45%,#e8eef6_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[34rem] bg-[radial-gradient(circle_at_top_left,rgba(61,109,176,0.16),transparent_38%)]" />
      <div className="pointer-events-none absolute right-[-10rem] top-[24rem] h-[22rem] w-[22rem] rounded-full bg-[radial-gradient(circle,rgba(18,58,114,0.1),transparent_72%)] blur-3xl" />

      <main className="relative z-10 pb-16">
        <Hero />
        <Navbar />

        <div className="mx-auto mt-6 grid w-full max-w-7xl gap-6 px-4 sm:px-6 lg:mt-8 lg:grid-cols-[320px_minmax(0,1fr)] lg:items-start lg:gap-8 lg:px-8">
          <Skills />

          <div className="flex min-w-0 flex-col gap-6 lg:gap-8">
            <About />
            <Projects />
            <Experience />
            <Contact />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
