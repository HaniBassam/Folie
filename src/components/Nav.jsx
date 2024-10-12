import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const flipLogo = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <>
      <nav className="nav">
        <div
          className={`logo-container ${isFlipped ? "flipped" : ""}`}
          onClick={flipLogo}
        >
          <div className="logo">
            <img
              src={"../public/img/transParrent.png"}
              alt="First Logo"
              className="logo-img front"
            />
            <img
              src={"/public/img/transParrent2.png"}
              alt="Second Logo"
              className="logo-img back"
            />
          </div>
        </div>

        <div className="burger-menu" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        <ul className={`nav-list ${isOpen ? "open" : ""}`}>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
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
    </>
  );
}
