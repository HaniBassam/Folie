import React, { useState } from 'react';
import "../css/Portfolio2.css";
import sofa from "../../public/img/cane3.png";
import cane from "../../public/img/can6.png"
export default function Portfolio() {
  const [isPop, setIsPop] = useState(false);

  return (
    <div className="container">
      <section className='A'>
        <h1 className="title">Portfolio.</h1>
        <p className="subtitle">
          Check out some of my latest design case studies.
        </p>
        <p className="description">
        </p>
      </section>

      <section className='B'> 
        <div className="controls">
          <div className="toggle">
            <input
              type="checkbox"
              id="pop"
              checked={isPop}
              onChange={() => setIsPop(!isPop)}
            />
            <label htmlFor="pop">Make it pop</label>
          </div>
        </div>

        <div className="portfolio-grid">

          <div className='grid-section-1'>
            <input type="range" className="slider" />
            <div className="portfolio-item1">
              <img 
                src={cane} 
                alt="Modern minimal renovation" 
              />
              <div className="item-content">
                <h3>A modern minimal renovation</h3>
                <p className="time">2 mins ago</p>
              </div>
            </div>
          </div>

          <div className="portfolio-item">
            <img 
              src={sofa} 
              alt="Beach scene" 
            />
            <button className="heart-button" aria-label="Add to favorites">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="currentColor"/>
              </svg>
            </button>
            <div className="item-content">
              <h3>Bear Cane</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}