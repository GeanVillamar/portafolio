import Navbar from "./components/Navbar";
import "./App.css";
import "./Carousel.css";
import About from "./components/About";
import Skills from "./components/Skills";
import Carousel from "./components/Carousel";
import Contact from "./components/Contact";

function App() {
  const images = [
    {
      src: "https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      link: "https://github.com/GeanVillamar/StoreApp",
      title: "Fake Store Aplication",
    },
    {
      src: "https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      link: "#",
      title: "Blog Tecnico",
    },
    {
      src: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      link: "#",
      title: "App Analisis de datos de Transito",
    },
  ];
  return (
    <div className="App">
      <Navbar />
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <header className="project-header">
          <h1>Projects</h1>
        </header>
        <main>
          <Carousel images={images} />
        </main>
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;
