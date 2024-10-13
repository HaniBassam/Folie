import React from 'react';
import '../css/Footer.css'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="copyright">© 2024 Hani Bassam</p>
        <button className="scroll-to-top" onClick={scrollToTop}>
          <span className="arrow-up">↑</span>
        </button>
        <nav className="footer-nav">
          <a href="#about">About</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#blog">Blog</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </footer>
  );
}