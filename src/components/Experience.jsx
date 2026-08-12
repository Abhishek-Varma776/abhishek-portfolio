import React from 'react';
import { Calendar, MapPin, Building2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="section bg-surface-2">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Experience</span>
          <h2 className="section-title">Where I've Worked</h2>
        </div>

        <div className="timeline-wrapper">
          {experience.map((item, idx) => (
            <div key={idx} className="timeline-item">
              <div className="timeline-marker">
                <div className="timeline-dot" />
              </div>

              <div className="exp-card">
                <div className="exp-top">
                  <div>
                    <h3 className="exp-role">{item.role}</h3>
                    <div className="exp-org">
                      <Building2 size={16} />
                      <span>{item.organization}</span>
                      <span className="exp-loc-divider">·</span>
                      <span className="exp-loc">{item.location}</span>
                    </div>
                  </div>
                  <div className="exp-badge">
                    <Calendar size={13} />
                    <span>{item.period}</span>
                  </div>
                </div>

                <div className="exp-bullets-list">
                  {item.bullets.map((b, bIdx) => (
                    <div key={bIdx} className="exp-bullet-row">
                      <span className="exp-tag-pill">{b.tag}</span>
                      <p className="exp-bullet-text">{b.text}</p>
                    </div>
                  ))}
                </div>

                <div className="exp-skills-row">
                  {item.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="skill-mini-pill">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
