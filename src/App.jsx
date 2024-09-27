import React from "react";
import "./index.css"; // Sørg for, at CSS-filen bliver importeret korrekt
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AboutMe from "./Components/AboutMe";
import Footer from "./Components/Footer";
import Nav from "./Components/Nav";
import Portfolio from "../src/Components/Portfolio";
import Contact from "./Components/Contact";

import {
  faTwitter,
  faFacebook,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function App() {
  return (
    <div className="App">
      <Nav />

      <AboutMe />

      <Portfolio />

      <Contact />

      <Footer />
    </div>
  );
}

export default App;
