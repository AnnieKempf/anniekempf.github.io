import React from 'react';
import './App.css';
import LanguageSwitcher from './components/LanguageSwitcher'; // Assuming you have this component

function App() {
  return (
    <div className="App">
      {/* Header Section */}
      <header className="bg-light text-dark p-4">
        <div className="header-container">
          <h1>Welcome, I'm Annie!</h1>
          <p>Aspiring Full-Stack Developer with a passion for technology and design.</p>
          <button className="btn btn-warning">Download Resume</button>
        </div>
      </header>

      {/* Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container-fluid">
          <a className="navbar-brand" href="#home">Annie</a>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#projects">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills">Skills</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
            </ul>
            <LanguageSwitcher /> {/* Language Switcher */}
          </div>
        </div>
      </nav>

      {/* Main Content Sections */}
      <section id="projects" className="p-4">
        <h2>Projects</h2>
        {/* Project details */}
      </section>

      <section id="skills" className="bg-light p-4">
        <h2>Skills</h2>
        {/* Skills details */}
      </section>

      <section id="contact" className="p-4">
        <h2>Contact</h2>
        {/* Contact details */}
      </section>
    </div>
  );
}

export default App;
