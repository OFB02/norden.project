import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/official-landingpage/hero.css';
import website1 from '../../images/website1.png';
import website2 from '../../images/webside2.png';
import website3 from '../../images/website3.png';

function OfficialHero() {
  return (
    <section className="official-hero">
      <div className="hero-gallery">
        {/* Image 1 - Main (Man walking) with text overlay */}
        <div className="gallery-item gallery-main">
          <img src={website3} alt="Man walking in Copenhagen" className="gallery-image" />
          <div className="hero-text-overlay">
            <p className="hero-est">EST. COPENHAGEN</p>
            <h1 className="hero-title">The Daily Driver.</h1>
            <p className="hero-subtitle">Engineered for the city rhythm.</p>
            <Link to="/shop" className="hero-cta">SHOP THE TOTE</Link>
          </div>
        </div>

        {/* Image 2 - Middle (Tote on chair with matcha) */}
        <div className="gallery-item">
          <img src={website1} alt="Tote bag with matcha" className="gallery-image" />
        </div>

        {/* Image 3 - Right (The Aesthetic Spill) */}
        <div className="gallery-item">
          <img src={website2} alt="Tote bag contents" className="gallery-image" />
        </div>
      </div>
    </section>
  );
}

export default OfficialHero;
