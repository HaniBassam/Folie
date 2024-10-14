import React, { useState, useEffect } from "react";
import "./index.css";
import Nav from "./components/Nav";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import Portfolio2 from "./components/Portfolio2";
import About from "./components/About";
import Footer from "./components/Footer";
import RandomFacts from "./components/RandomFacts";
import SkillSet from "./components/SkillSection";

function App() {
  // Define a state to manage the theme
  const [theme, setTheme] = useState("light");

  // Function to toggle between light and dark mode
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme); // Store user preference
  };

  // Load saved theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  return (
    <div className="App">
      <Nav toggleTheme={toggleTheme} />
      <AboutMe />

      <div id="portfolio">
        <Portfolio />

        <Portfolio2 />
      </div>

      <div id="about">
        <About />
      </div>
      <div id="contact">
        <SkillSet />
        <RandomFacts />
        <Footer />
      </div>
    </div>
  );
}

export default App;
