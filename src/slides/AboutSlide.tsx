import React from 'react';

const AboutSlide: React.FC = () => {
  return (
    <div className="slide">
      <h1 className="slide-heading">About This Talk</h1>
      
      <div className="slide-section">
        <h3 className="section-title">What We'll Cover:</h3>
        <ul className="bullet-list">
          <li>Real production experience with Single-SPA at scale</li>
          <li>Technical architecture: Root Config, Apps, Libs, Parcels, Import Maps</li>
          <li>Development workflow improvements and automation lessons</li>
          <li>The good, the bad, and the ugly truths of microfrontend life</li>
        </ul>
      </div>

      <div className="slide-section">
        <h3 className="section-title">My Context:</h3>
        <ul className="bullet-list">
          <li>Inherited 8 microfrontends with performance and DX problems</li>
          <li>Led migration from custom Web Components to Single-SPA</li>
          <li>Scaled to 40+ microfrontends across 5 sites over 4 years</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutSlide;
