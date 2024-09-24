import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faTwitter,
  faFacebook,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function footer() {
  return (
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
    </footer>
  );
}
