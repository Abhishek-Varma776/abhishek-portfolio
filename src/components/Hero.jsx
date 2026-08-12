import React from 'react';
import { FileText, Github, Linkedin, Mail, ArrowDown, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Hero({ onOpenResume }) {
  const { personal, stats } = portfolioData;

  return (
    <section id="hero" className="hero-section">
      {/* Background Ambience */}
      <div className="hero-grid" aria-hidden="true" />
      <div className="orb orb-1" aria-hidden="true" />
      <div className="orb orb-2" aria-hidden="true" />
      <div className="orb orb-3" aria-hidden="true" />

      <div className="container hero-content">
        {/* Availability Badge */}
        <div className="hero-badge animate-fade-in">
          <span className="badge-dot" />
          <span>{personal.status}</span>
        </div>

        {/* Hero Headings */}
        <h1 className="hero-name animate-fade-in delay-1">
          Pujala Shiva Naga<br />
          <span className="gradient-text">Abhishek Varma</span>
        </h1>

        <p className="hero-tagline animate-fade-in delay-2">
          {personal.tagline}
        </p>

        <p className="hero-pitch animate-fade-in delay-3">
          {personal.pitch}
        </p>

        {/* CTAs */}
        <div className="hero-actions animate-fade-in delay-4">
          <button onClick={onOpenResume} className="btn btn-primary" id="heroResumeBtn">
            <FileText size={17} />
            <span>View Resume</span>
          </button>
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
            id="heroGithubBtn"
          >
            <Github size={17} />
            <span>GitHub</span>
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
            id="heroLinkedinBtn"
          >
            <Linkedin size={17} />
            <span>LinkedIn</span>
          </a>
          <a
            href={`mailto:${personal.email}`}
            className="btn btn-ghost"
            id="heroEmailBtn"
          >
            <Mail size={17} />
            <span>Email Me</span>
          </a>
        </div>

        {/* Stats Strip */}
        <div className="hero-stats animate-fade-in delay-5">
          {stats.map((stat, idx) => (
            <React.Fragment key={stat.label}>
              <div className="stat-card">
                <span className="stat-num">{stat.value}</span>
                <span className="stat-text">{stat.label}</span>
              </div>
              {idx < stats.length - 1 && <div className="stat-divider" aria-hidden="true" />}
            </React.Fragment>
          ))}
        </div>
      </div>

      <a href="#about" className="scroll-indicator" aria-label="Scroll to About">
        <ArrowDown size={18} />
      </a>
    </section>
  );
}
