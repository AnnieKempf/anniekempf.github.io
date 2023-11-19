import React from 'react';
import './App.css';
import LanguageSwitcher from './components/LanguageSwitcher'; // Assuming you have this component

function App() {
  return (
    <div className="App">
      <nav className="main-nav">
        <div className="nav-container">
          <a className="nav-brand" href="#home">Annie</a>
          <div className="nav-collapse">
            <ul className="nav-list">
              <li className="nav-item">
                <a className="nav-link" href="#projects">Skills</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
            </ul>
            <LanguageSwitcher />
          </div>
        </div>
      </nav>

      <header className="app-header">
        <h1>Hello, I'm Annie</h1>
        <p>Aspiring Full-Stack Developer with a passion for technology and design.</p>
        <a href="https://www.youtube.com/" target="_blank" className="resume-link">Link to Youtube</a>
        <button className="download-button">Download resume</button>
      </header>

      <section id="projects" className="section">
        <h2>Projects</h2>
        {/* Your project content */}
      </section>

      <section id="skills" className="section light-bg">
        <h2>Skills</h2>
        {/* Your skills content */}
      </section>

      <section id="contact" className="section">
        <h2>Contact</h2>
        {/* Your contact content */}
      </section>
    </div>
  );
}

export default App;
