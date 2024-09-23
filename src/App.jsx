import React from "react";
import "./index.css"; // Sørg for, at CSS-filen bliver importeret korrekt
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import img from "../public/img/transParrent.png"; // Din logo-fil
import "../public/img/bedstebud.png";

import {
  faTwitter,
  faFacebook,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function App() {
  return (
    <div className="App">
      <nav>
        <div className="logo-container">
          <div className="logo">
            <img
              src={"../public/img/transParrent.png"}
              alt="Logo"
              className="logo-img"
            />
          </div>
        </div>
        <ul className="nav-list">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className="social-links">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </nav>

      <section id="about">
        <h1></h1>

        <div className="container">
          <div className="image-container">
            <img
              src={"../public/img/bedstebud.png"}
              alt="About Me"
              className="aboutme"
            />
            <div className="overlay-text left-text">
              <h1>designer</h1>
              <p>
                Product designer specialising in UI design and design systems.
              </p>
            </div>
            <div className="overlay-text right-text">
        
        
              <p>
                Front end developer who writes clean, elegant and efficient
                code.
              </p>
            </div>
          </div>
        </div>

        <div className="App">
          {
            <section className="section-title">
              <div className="line"></div>
              <h2>Some of My Latest Work</h2>
              <div className="line"></div>
            </section>
          }
        </div>
      </section>

      <section id="portfolio">
        <h1>My Work</h1>
        <p>Showcase some of your projects here.</p>
      </section>

      <section id="blog">
        <h1>Blog</h1>
        <p>Write about your experiences here.</p>
      </section>

      <section id="contact">
        <h1>Contact</h1>
        <p>Add a contact form or social media links here.</p>
      </section>

      <footer className="footer">
        <div className="footer-arrow">
          <a href="#top">
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 4L4 12H8V20H16V12H20L12 4Z" fill="white" />
            </svg>
          </a>
        </div>

        <div className="footer-content">
          <ul className="footer-nav">
            <p>© 2024 Hani Bassam</p>
            <li>
              <a href="#about">about</a>
            </li>
            <li>
              <a href="#book">book</a>
            </li>
            <li>
              <a href="#portfolio">portfolio</a>
            </li>
            <li>
              <a href="#blog">blog</a>
            </li>
            <li>
              <a href="#contact">contact</a>
            </li>
          </ul>
        </div>
        <button class="burger-menu" id="burgerMenu">
          <span class="burger-icon"></span>
        </button>
      </footer>
    </div>
  );
}

export default App;
