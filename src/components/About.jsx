import React from 'react';
import '../css/About.css'
import me from '../../public/img/aboutme.jpg'

export default function About() {
  return (
    <div className="about-container">
      <h1 className="about-title">About Me</h1>
      <div className="content-wrapper">
        <div className="text-content">
          <p>
            <span className="black-dot">
             The name is Hani, a 29-year-old front-end developer
              based in Denmark. With expertise in HTML, CSS, JavaScript, and
              React, I specialize in creating intuitive and engaging user
              experiences.My background in multimedia design allows me to
              combine strong design aesthetics with efficient coding practices.
              I’m always eager to learn new technologies and bring innovative
              solutions to life.{" "}
            </span>
          </p>
        </div>
        <div className="image-container">
          <img src={me} alt="Portrait" className="main-image" />
        </div>
      </div>
      <div className="circular-image-container">
        <img src={me} alt="Circular Portrait" className="circular-image" />
      </div>
    </div>
  );
}