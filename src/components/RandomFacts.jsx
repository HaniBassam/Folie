import React from 'react';
import '../css/RandomFacts.css';
import me from "../../public/img/monster.jpg";

export default function RandomFacts() {
  return (
    <div className="rf-container">
      <div className="image-container">
        <img src={me} alt="Portrait" />
      </div>

      <div className="random-facts">
        <h2>Random facts</h2>
        <ul>
          <li>I drink a lot of energy drinks</li>
          <li>I'm into all kinds of design</li>
          <li>Watching TV is my is my zen time</li>
          <li>I love to cook (and eat)</li>
          <li>I'm a bit of a clean freak</li>
          <li>I want to live life with no regrets</li>
          <li>
            I'm slightly addicted to{" "}
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </li>
          <li>Yoda is my mentor</li>
        </ul>
      </div>
    </div>
  );
}