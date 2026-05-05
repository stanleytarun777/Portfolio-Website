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
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.98),transparent_22%),linear-gradient(180deg,#f7f9fc_0%,#edf2f7_45%,#e9eef5_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[28rem] bg-[linear-gradient(180deg,rgba(14,35,66,0.08),rgba(14,35,66,0))]" />
      <div className="pointer-events-none absolute left-[-8rem] top-[22rem] h-[18rem] w-[18rem] rounded-full bg-[radial-gradient(circle,rgba(34,82,150,0.1),transparent_72%)] blur-3xl" />

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
