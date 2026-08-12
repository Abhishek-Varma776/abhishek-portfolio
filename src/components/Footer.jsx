import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const { personal } = portfolioData;

  return (
    <footer className="footer-wrap">
      <div className="container footer-inner">
        <a href="#hero" className="footer-logo">
          <span className="logo-box">AV</span>
        </a>
        <p className="footer-copy">
          Built with purpose by <strong>{personal.name}</strong> · {personal.location}
        </p>
      </div>
    </footer>
  );
}
