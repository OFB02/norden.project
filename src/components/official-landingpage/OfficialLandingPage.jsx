import React from 'react';
import OfficialHeader from './header';
import OfficialHero from './hero';
import OfficialAbout from './about';
import OfficialBonus from './bonus';
import OfficialFooter from './footer';
import '../../styles/official-landingpage/official-main.css';

function OfficialLandingPage() {
  return (
    <div className="official-landing-page">
      <OfficialHeader />
      <OfficialHero />
      <OfficialAbout />
      <OfficialBonus />
      <OfficialFooter />
    </div>
  );
}

export default OfficialLandingPage;
