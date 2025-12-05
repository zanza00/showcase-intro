import React from 'react';

const SetupSlide: React.FC = () => {
  return (
    <div className="slide">
      <h1 className="slide-heading">The Setup</h1>
      
      <div className="slide-section">
        <h3 className="section-title">Organization:</h3>
        <p className="section-text">Multiple independent teams with clear domain boundaries</p>
        <ul className="bullet-list">
          <li>1 Microfrontend ↔ 1 Microservice relationship</li>
          <li>Sidebar navigation architecture</li>
          <li>8 microfrontends in production</li>
        </ul>
      </div>

      <div className="slide-section">
        <h3 className="section-title problem">The Problem: Custom Web Components implementation</h3>
        <ul className="bullet-list">
          <li>Slow rendering performance</li>
          <li>No client-side navigation (full page reloads)</li>
          <li>Extremely difficult development setup</li>
          <li>Hard to do deploys, despite CI/CD</li>
          <li>Creating new apps became very hard and tedious</li>
        </ul>
      </div>

      <div className="slide-section">
        <h3 className="section-title solution">The Solution: Migration to Single-SPA</h3>
      </div>
    </div>
  );
};

export default SetupSlide;
