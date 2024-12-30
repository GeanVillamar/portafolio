import Navbar from "./components/Navbar";
import "./App.css";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <Navbar />
      <section id="about">
        <About />
      </section>
      <section id="section">
        <Skills />
      </section>
      <section id="section">
        <Projects />
      </section>
    </div>
  );
}

export default App;
