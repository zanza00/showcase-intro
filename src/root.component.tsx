import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import IntroSlide from './slides/IntroSlide';
import WhoAmISlide from './slides/WhoAmISlide';
import AboutSlide from './slides/AboutSlide';
import SetupSlide from './slides/SetupSlide';
import SpoilersSlide from './slides/SpoilersSlide';
import './slides.css';

export default function Root() {
  return (
    <Router>
      <div className="slide-container">
        <Routes>
          {/* Redirect root to /intro */}
          <Route path="/" element={<Navigate to="/intro" replace />} />
          
          {/* Intro section */}
          <Route path="/intro" element={<IntroSlide />} />
          <Route path="/intro/whoami" element={<WhoAmISlide />} />
          <Route path="/intro/about" element={<AboutSlide />} />
          <Route path="/intro/setup" element={<SetupSlide />} />
          <Route path="/intro/spoilers" element={<SpoilersSlide />} />
        </Routes>
      </div>
    </Router>
  );
}
