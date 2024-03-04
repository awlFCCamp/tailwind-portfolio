import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
function App() {
  return (
    <main className="w-full m-x-auto">
      <Navbar />
      <Hero />
      <Skills />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}

export default App;
