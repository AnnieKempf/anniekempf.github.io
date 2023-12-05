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
        <h1 className="header-title">
          Hello, I'm Annie
        </h1>
        <p className="header-text">
          Aspiring <span className="developer-text">Full-Stack Developer</span> with a passion for logic and problem-solving.
        </p>
        <button className="download-button">Download resume</button>
      </header>

      <section id="about" className="section">
        <div className="about-container">
          <h2 className="about-title">Who am I?</h2>
          <p className="about-text1">
            Well, <strong>I'm Annie</strong> - an Information System Science student graduating in May 2024, aiming to excel as a full-stack developer.
          </p>
          <p className="about-text2">
            My enthusiasm for technology is driven by a
            love for problem-solving and creating efficient, user-centric solutions. With a competitive spirit inspired by strategic gaming, I'm eager to tackle challenges and
            contribute to a dynamic team environment. I'm committed to continuous learning and applying my knowledge, bringing both determination and creativity to overcome any
            obstacle in the tech world.
          </p>
          <img className="picture" src="profilepic.jpeg" alt="Profil picture" width="350" height="400"></img>
        </div>

        <div className="skills-container">
          <h2 className="skills-title">Skills</h2>
          <div className="skills-category">
            <p className="skills-category-titles">
              Front-End
            </p>
            <p className="skills-category-titles">
              Back-End
            </p>
            <p className="skills-category-titles">
              Other tools
            </p>
          </div>
          <div className="skills-grid">
            <p>React</p>
            <p>HTML</p>
            <p>CSS</p>
            <p>Java</p>
            <p>C#</p>
            <p>SQL</p>
            <p>Node.js</p>
            <p>Azure</p>
            <p>.NET</p>
            <p>Javascript</p>
            <p>Git</p>
            <p>Github</p>
          </div>
        </div>
      </section>

      <section id="projects" className="section light-bg">
        <h2>Projects</h2>
      </section>

      <section id="contact" className="section">
        <h2>Contact</h2>
      </section>


    </div>
  );
}

export default App;
