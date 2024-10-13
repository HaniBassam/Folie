import React from 'react';
import '../css/About.css'
import me from '../../public/img/bedstebud.png'

export default function About() {
  return (
    <div className="about-container">
      <div className="star-icon">★</div>
      <h1 className="about-title">About</h1>
      <div className="content-wrapper">
        <div className="text-content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed do eiusmod tempor incididunt ut labore et dolore 
            magna aliqua. Ut enim ad minim veniam, quis nostrud 
            exercitation ullamco laboris nisi ut aliqu<span className="black-dot">●</span>
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