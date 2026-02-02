import React from 'react';
import './Visual-Context.css';
import website2 from '../../images/webside2.png';

const VisualContext = () => {
  return (
    <section className="visual-context">
      <div className="visual-context__image">
        {/* Full-width image showing the aesthetic spill */}
        <img 
          src={website2}
          alt="N.01 Canvas Tote with contents displayed"
        />
      </div>
    </section>
  );
};

export default VisualContext;