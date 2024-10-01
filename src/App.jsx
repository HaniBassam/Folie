import React, { useState, useEffect } from 'react';
import './index.css';
import Nav from './Components/Nav'
import AboutMe from './Components/AboutMe';
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  // Define a state to manage the theme
  const [theme, setTheme] = useState('light');

  // Function to toggle between light and dark mode
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme); // Store user preference
  };

  // Load saved theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  return (
    <div className="App">
      <Nav toggleTheme={toggleTheme} /> {/* Pass the toggle function to Nav */}
      <AboutMe />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
