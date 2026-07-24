import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import About from "./components/sections/About";
import Downloads from "./components/sections/Downloads";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";
import ScrollProgressBar from "./components/ui/ScrollProgressBar";

function App() {
  return (
    <div className="min-h-screen bg-bg-primary relative">
      {/* Subtle background texture */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 opacity-[0.015]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, var(--text-primary) 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }}
      />
      
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Projects />
        <About />
        <Downloads />
        <Contact />
      </main>
      <Footer />
      <ScrollProgressBar />
    </div>
  );
}

export default App;