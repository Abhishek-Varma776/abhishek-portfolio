import React, { useState } from 'react';
import { Brain, Code, Globe, Database, Wrench, Cpu, CheckCircle, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const categoryIconMap = {
  Brain,
  Code,
  Globe,
  Database,
  Wrench,
  Cpu,
  CheckCircle
};

export default function TechStack() {
  const { skills } = portfolioData;
  const [activeTab, setActiveTab] = useState('all');

  const displayedSkills = activeTab === 'all'
    ? skills
    : skills.filter(s => s.category.toLowerCase().includes(activeTab.toLowerCase()));

  return (
    <section id="skills" className="section bg-surface-2">
      <div className="container">
        <div className="section-header-flex">
          <div>
            <span className="section-eyebrow">Skills &amp; Technologies</span>
            <h2 className="section-title">Technical Expertise</h2>
            <p className="section-subtitle">
              Comprehensive full-stack AI engineering toolkit — from ML architectures to scalable web platforms.
            </p>
          </div>

          {/* Quick filter tabs */}
          <div className="skills-tabs">
            <button
              onClick={() => setActiveTab('all')}
              className={`tab-btn ${activeTab === 'all' ? 'active' : ''}`}
            >
              All Tech
            </button>
            <button
              onClick={() => setActiveTab('ai')}
              className={`tab-btn ${activeTab === 'ai' ? 'active' : ''}`}
            >
              AI &amp; ML
            </button>
            <button
              onClick={() => setActiveTab('languages')}
              className={`tab-btn ${activeTab === 'languages' ? 'active' : ''}`}
            >
              Languages
            </button>
            <button
              onClick={() => setActiveTab('web')}
              className={`tab-btn ${activeTab === 'web' ? 'active' : ''}`}
            >
              Web &amp; DB
            </button>
          </div>
        </div>

        <div className="skills-grid">
          {displayedSkills.map((group, idx) => {
            const Icon = categoryIconMap[group.icon] || Code;
            return (
              <div
                key={idx}
                className={`skill-group-card ${group.accent ? 'accent-card' : ''}`}
              >
                <div className="skill-group-header">
                  <div className="skill-group-icon">
                    <Icon size={18} />
                  </div>
                  <h3 className="skill-group-name">{group.category}</h3>
                </div>

                <div className="skill-pills-wrap">
                  {group.items.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className={`skill-pill-item ${group.accent ? 'pill-glow' : ''}`}
                    >
                      <span className="pill-name">{skill.name}</span>
                      {skill.level && (
                        <span className="pill-level">{skill.level}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
