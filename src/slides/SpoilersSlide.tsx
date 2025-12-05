import React from 'react';

const SpoilersSlide: React.FC = () => {
  return (
    <div className="slide slide-center">
      <h1 className="slide-heading">Spoilers</h1>
      
      <div className="spoiler-content">
        <div className="spoiler-item success">
          <h3 className="spoiler-title">Success Story</h3>
          <p className="spoiler-text">
            The migration to Single-SPA exceeded expectations
          </p>
        </div>

        <div className="spoiler-item scale">
          <h3 className="spoiler-title">Scale Achievement</h3>
          <p className="spoiler-text">
            Grew from 8 microfrontends on 1 site to{' '}
            <strong className="highlight">40+ microfrontends across 5 different sites</strong>
          </p>
        </div>

        <div className="spoiler-item journey">
          <h3 className="spoiler-title">The Journey</h3>
          <p className="spoiler-text">
            What started as a performance and developer experience fix became the foundation 
            for massive organizational scaling
          </p>
        </div>
      </div>
    </div>
  );
};

export default SpoilersSlide;
