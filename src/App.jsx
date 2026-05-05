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
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,#f8fafc_0%,#eef2f6_52%,#e7edf5_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[22rem] bg-[linear-gradient(180deg,rgba(12,32,62,0.06),rgba(12,32,62,0))]" />
      <div className="pointer-events-none absolute right-[-6rem] top-[16rem] h-[14rem] w-[14rem] rounded-full bg-[radial-gradient(circle,rgba(25,67,126,0.08),transparent_72%)] blur-3xl" />

      <Navbar />

      <main className="relative z-10">
        <Hero />

        <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 pb-14 sm:px-6 lg:gap-8 lg:px-8 lg:pb-20">
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
