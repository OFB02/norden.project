import React from 'react';
import '../../styles/official-landingpage/about.css';

function OfficialAbout() {
  return (
    <section className="official-about" id="about">
      <div className="about-container">
        <div className="about-content">
          <p className="about-label">THE PHILOSOPHY</p>
          <h2>Est. Copenhagen. Designed for the everyday.</h2>
          <div className="about-text">
            <p>
              Copenhagen is our canvas. From the rush of the bike lanes to the quiet of the harbour. 
              norden.project is born from the streets of the capital, engineered for the specific 
              rhythm of this city.
            </p>
            <p>
              We believe in objects that serve a purpose. Our bags are constructed from heavyweight, 
              raw canvas that withstands the wind, the rain, and the daily grind. Function first. 
              Honest materials. No unnecessary noise.
            </p>
            <p className="about-signature">— Grounded in the North.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OfficialAbout;
