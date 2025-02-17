import React from "react";
import "./App.css";
import "./Carousel.css";
import FakeStore from "./assets/FakeStore.png";
import CRUD from "./assets/CRUD.png";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Carousel from "./components/Carousel";
import Contact from "./components/Contact";

function App() {
  const images = [
    {
      src: FakeStore,
      link: "https://geanvillamar.github.io/StoreApp.github.io/",
      title: "Fake Store Aplication",
    },
    {
      src: CRUD,
      link: "https://geanvillamar.github.io/crudUser/",
      title: "CRUD User",
    },
  ];
  return (
    <div className="App">
      <Navbar />
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <header className="project-header">
          <h1>Skills</h1>
        </header>
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
