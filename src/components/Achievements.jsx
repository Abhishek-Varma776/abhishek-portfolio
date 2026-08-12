import React from 'react';
import { Trophy, Award, Target, GraduationCap, CheckCircle2, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const achIconMap = {
  Trophy,
  Award,
  Target
};

export default function Achievements() {
  const { achievements, certifications, education } = portfolioData;

  return (
    <section id="achievements" className="section bg-surface-1">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Recognition</span>
          <h2 className="section-title">Achievements &amp; Certifications</h2>
        </div>

        {/* Hackathon Badges */}
        <div className="ach-strip">
          {achievements.map((ach, idx) => {
            const Icon = achIconMap[ach.icon] || Trophy;
            return (
              <div
                key={idx}
                className={`ach-card ${ach.highlight ? 'ach-highlight' : ''}`}
              >
                <div className="ach-icon-box">
                  <Icon size={24} />
                </div>
                <div>
                  <h3 className="ach-title">{ach.title}</h3>
                  <p className="ach-sub">{ach.subtitle}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Certifications Grid */}
        <div className="certs-section-wrap">
          <h3 className="subsection-title">Professional Certifications</h3>
          <div className="certs-grid">
            {certifications.map((cert, idx) => (
              <div key={idx} className="cert-card">
                <div className={`cert-badge cert-${cert.color}`}>
                  {cert.issuer.split(' ')[0]}
                </div>
                <h4 className="cert-name">{cert.name}</h4>
                <p className="cert-issuer-full">{cert.issuer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Education Timeline */}
        <div className="edu-section-wrap">
          <h3 className="subsection-title">Academic Background</h3>
          <div className="edu-grid">
            {education.map((edu, idx) => (
              <div key={idx} className="edu-card">
                <div className="edu-icon-box">
                  <GraduationCap size={24} />
                </div>
                <div className="edu-content">
                  <h4 className="edu-degree">{edu.degree}</h4>
                  <p className="edu-inst">{edu.institution}</p>
                  <div className="edu-meta-row">
                    <span className="edu-period">{edu.period}</span>
                    <span className="edu-bullet">·</span>
                    <span className="edu-grade">{edu.grade}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
