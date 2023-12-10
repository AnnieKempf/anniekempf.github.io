import React from 'react';
import './App.css';
import LanguageSwitcher from './components/LanguageSwitcher';

function App() {
  return (
    <div id="home" className="App">

      {/* Navbar */}
      <nav className="main-nav">
        <div className="brand-container">
          <a className="nav-brand" href="#home">Annie</a>
        </div>
        <div className="nav-container">
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
          {/*<LanguageSwitcher />*/}
        </div>
      </nav>

      {/* Header */}
      <header className="app-header">
        <h1 className="header-title">
          Hello, I'm Annie
        </h1>
        <p className="header-text">
          Aspiring <span className="developer-text">Full-Stack Developer</span> with a passion for logic and problem-solving.
        </p>
        <a href="https://drive.google.com/file/d/1EFmY9YgTw-e6FlJwtTRQAgWbcsZPlO9W/view?usp=sharing" target="_blank">
          <button className="download-button">Resume</button>
        </a>
      </header>

      {/* About */}
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
          <img className="picture" src="profile-pictures/CVbild.png" alt="Profile picture" width="350" height="350"></img>
        </div>

        {/* Skills */}
        <div className="skills-container">
          <h2 className="skills-title">Skills</h2>
          <div className="skills-grid">
            <div className="skill-item"><img className="skill-icon" src="icons/React-icon.svg" alt="React"></img><span className="tooltip">React</span>
            </div>
            <div className="skill-item"><img className="skill-icon" src="icons/HTML-icon.svg" alt="React"></img><span className="tooltip">HTML</span></div>
            <div className="skill-item"><img className="skill-icon" src="icons/CSS-icon.svg" alt="React"></img><span className="tooltip">CSS</span></div>
            <div className="skill-item"><img className="skill-icon" src="icons/Csharp-icon.svg" alt="React"></img><span className="tooltip">C#</span></div>
            <div className="skill-item"><img className="skill-icon" src="icons/java.png" alt="React"></img><span className="tooltip">Java</span></div>
            <div className="skill-item"><img className="skill-icon" src="icons/SQL-icon.svg" alt="React"></img><span className="tooltip">SQL</span></div>
            <div className="skill-item"><img className="skill-icon" src="icons/nodejs-icon.svg" alt="React"></img><span className="tooltip">node.js</span></div>
            <div className="skill-item"><img className="skill-icon" src="icons/azure-icon.svg" alt="React"></img><span className="tooltip">Azure</span></div>
            <div className="skill-item"><img className="skill-icon" src="icons/net-icon.svg" alt="React"></img><span className="tooltip">.NET</span></div>
            <div className="skill-item"><img className="skill-icon" src="icons/javascript-1.svg" alt="React"></img><span className="tooltip">Javascript</span></div>
            <div className="skill-item"><img className="skill-icon" src="icons/Git_icon.svg" alt="React"></img><span className="tooltip">Git</span></div>
            <div className="skill-item"><img className="skill-icon" src="icons/github-logo.png" alt="React"></img><span className="tooltip">Github</span></div>
          </div>
        </div>
      </section >

      {/* Projects */}
      <section id="projects" className="section light-bg">
        <h2 className="projects-title">Projects</h2>
        <div className="projects-container">
          <img className="workinprogress-img" src="icons/work-in-progress.png"></img>
          {/*<ol className="projects-grid">
            <li className="projects-card">
              <p className="project-name">
                Project 1
              </p>
              <p className="project-date">
                Date
              </p>
              <img className="project-img"></img>
              <p className="project-description">
                Description
              </p>
              <div className="project-button-container">
                <button className="project-button">
                  Github repo
                </button>
                <button className="project-button">
                  Live website
                </button>
              </div>
              <p className="project-description">
                Built using:
              </p>
            </li>
            <li className="projects-card">
              <p className="project-name">
                Project 2
              </p>
              <p className="project-date">
                Date
              </p>
              <img className="project-img"></img>
              <p className="project-description">
                Description
              </p>
              <div className="project-button-container">
                <button className="project-button">
                  Github repo
                </button>
                <button className="project-button">
                  Live website
                </button>
              </div>
              <p className="project-description">
                Built using:
              </p>
            </li>
            <li className="projects-card">
              <p className="project-name">
                Project 3
              </p>
              <p className="project-date">
                Date
              </p>
              <img className="project-img"></img>
              <p className="project-description">
                Description
              </p>
              <div className="project-button-container">
                <button className="project-button">
                  Github repo
                </button>
                <button className="project-button">
                  Live website
                </button>
              </div>
              <p className="project-description">
                Built using:
              </p>
            </li>
          </ol>*/}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section">
        <h2 className="projects-title">Contact</h2>
        <div className="contact-container">
          <img src="icons/work-in-progress.png"></img>
          <div className="contact-field">
            <div className="name-field">
            </div>
            <div className="email-field">
            </div>
            <div className="message-field">
            </div>
          </div>
        </div>
      </section>

    </div >
  );
}

export default App;
