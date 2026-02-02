import React from 'react';
import './Anatomy.css';

const Anatomy = () => {
  const features = [
    {
      title: '18oz Raw Canvas',
      description: 'Dense, untreated cotton structure that repels light rain and holds its shape.'
    },
    {
      title: 'Reinforced Handles',
      description: 'Double-stitched straps designed to carry heavy loads without digging into your shoulder.'
    },
    {
      title: 'The Patina Promise',
      description: 'This fabric is alive. It will soften and darken slightly with use, telling the story of your journeys.'
    }
  ];

  return (
    <section className="anatomy">
      <div className="anatomy__container">
        <h2 className="anatomy__title">ENGINEERED FOR LIFE</h2>
        
        <div className="anatomy__features">
          {features.map((feature, index) => (
            <div key={index} className="feature">
              <h3 className="feature__title">{feature.title}</h3>
              <p className="feature__description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Anatomy;