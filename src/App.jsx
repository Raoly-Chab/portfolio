import React from 'react';
import './App.css';
import NavBar2 from "./components/NavBar2";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import CardWork from "./components/CardWork";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar2 />
      <main>
        <Hero />
        <About />
        <Skills />
        <CardWork />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
