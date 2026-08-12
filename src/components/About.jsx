import React from 'react';
import { MapPin, Briefcase, GraduationCap, Brain, Zap, Shield, Trophy } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const iconMap = {
  MapPin,
  Briefcase,
  GraduationCap,
  Brain,
  Zap,
  Shield,
  Trophy
};

export default function About() {
  const { about } = portfolioData;

  return (
    <section id="about" className="section bg-surface-1">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">About Me</span>
          <h2 className="section-title">Engineering Reliable AI Systems</h2>
        </div>

        <div className="about-grid">
          {/* Bio text */}
          <div className="about-bio">
            <p className="bio-lead">{about.lead}</p>
            <div className="bio-paragraphs">
              {about.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Chips */}
            <div className="about-chips">
              {about.chips.map((chip, idx) => {
                const Icon = iconMap[chip.icon] || MapPin;
                return (
                  <div key={idx} className="chip">
                    <Icon size={14} className="chip-icon" />
                    <span>{chip.text}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Highlights */}
          <div className="about-highlights">
            {about.highlights.map((item, idx) => {
              const Icon = iconMap[item.icon] || Brain;
              return (
                <div key={idx} className="highlight-card">
                  <div className="highlight-icon-box">
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3 className="highlight-title">{item.title}</h3>
                    <p className="highlight-desc">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
