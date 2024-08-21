import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './paginas/Home';
import About from './paginas/About';
import Projects from './paginas/Projects';
import Clients from './paginas/Clients';
import './App.css';

export default function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">Sobre</a>
            </li>
            <li className="nav-item nome">
              Wolteg
            </li>
            <li>
              <a href="#projects">Projetos</a>
            </li>
            <li>
              <a href="#projects">Contato</a>
            </li>
          </ul>
        </nav>

        <div id="home">
          <Home />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="clients">
          <Clients />
        </div>
        <div id="projects">
          <Projects />
        </div>
      </div>
    </Router>
  );
}
