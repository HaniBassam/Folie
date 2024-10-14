import React from 'react';
import '../css/SkillSet.css';
import me from "../../public/img/html-5.png";
import css from "../../public/img/css-3.png"
import js from "../../public/img/java-script.png"
import pie from "../../public/img/pie.png";

export default function SkillSet() {
  return (
    <div className="ss-container">
      <div className="image-container">
        <img src={me} alt="Portrait" />
        <img src={css} alt="Portrait" />
        <img src={js} alt="Portrait" />
      </div>

      <div className="skills">
        <div className="designer">
          <h2>Part Designer</h2>
          <ul>
            <li>UI Design</li>
            <li>UX Design</li>
            <li>Design Systems</li>
            <li>Interaction Design</li>
            <li>"Making it pop"</li>
          </ul>
        </div>
        <div className="chart">
          <img src={pie} alt="pie - chart" />
        </div>
        <div className="coder">
          <h2>Part Coder</h2>
          <ul>
            <li>Front End Development</li>
            <li>HTML / CSS</li>
            <li>JavaScript kinda</li>
            <li>Interaction Design</li>
            <li>Eating Pizza</li>
          </ul>
        </div>
      </div>
    </div>
  );
}