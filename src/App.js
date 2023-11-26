import React from 'react';
import './App.css';
import LanguageSwitcher from './components/LanguageSwitcher'; // Assuming you have this component

function App() {
  return (
    <div id="home" className="App">
      <nav className="main-nav">
        <div className="nav-container">
          <a className="nav-brand" href="#home">Annie Kempf</a>
          <div className="nav-collapse">
            <ul className="nav-list">
            <li className="nav-item">
                <a className="nav-link" href="#home">HOME</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">ABOUT</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">PROJECTS</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">CONTACT</a>
              </li>
            </ul>
            <LanguageSwitcher />
          </div>
        </div>
      </nav>

      <header className="app-header">
        <h1 className="header-title">Hello, I'm Annie</h1>
        <p className ="header-text">Aspiring Full-Stack Developer with a passion for technology and design.</p>
        <button className="download-button">Download resume</button>
      </header>

      <section id="about" className="section">
        <h2>About</h2>
        <p className="paragraph-text1" >Paragraph text 1</p>
        <p className="paragraph-text2">hej</p>
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
