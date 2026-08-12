import React, { useState } from 'react';
import { Github, TrendingUp, Sparkles, Filter } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Projects() {
  const { projects } = portfolioData;
  const [filter, setFilter] = useState('all');

  const categories = [
    { key: 'all', label: 'All Projects' },
    { key: 'ai', label: 'AI / ML & GenAI' },
    { key: 'health', label: 'Healthcare AI' },
    { key: 'web', label: 'Full-Stack Web' }
  ];

  const filteredProjects = projects.filter((proj) => {
    if (filter === 'all') return true;
    if (filter === 'ai') return proj.tags.some(t => ['NLP', 'Machine Learning', 'BERT', 'Generative AI', 'AI/ML'].includes(t));
    if (filter === 'health') return proj.tags.some(t => ['Healthcare AI', 'Predictive Health'].includes(t)) || proj.title.includes('Health') || proj.title.includes('Prescription');
    if (filter === 'web') return proj.tags.some(t => ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Supabase'].includes(t));
    return true;
  });

  return (
    <section id="projects" className="section bg-surface-1">
      <div className="container">
        <div className="section-header-flex">
          <div>
            <span className="section-eyebrow">Projects</span>
            <h2 className="section-title">Production Systems &amp; AI Research</h2>
            <p className="section-subtitle">Real systems, measurable outcomes — not toy demos.</p>
          </div>

          {/* Filter Pills */}
          <div className="project-filters">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setFilter(cat.key)}
                className={`filter-btn ${filter === cat.key ? 'active' : ''}`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, idx) => (
            <article
              key={project.id}
              className={`project-card ${project.featured ? 'featured' : ''}`}
            >
              <div className="project-top">
                <div className="project-badge">
                  {project.badge}
                </div>
                <span className="project-number">
                  {String(idx + 1).padStart(2, '0')}
                </span>
              </div>

              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>

              <div className="project-impact">
                <TrendingUp size={15} className="impact-icon" />
                <span>{project.impact}</span>
              </div>

              <div className="project-tags">
                {project.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="project-tag-pill">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="project-footer">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link-btn"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <Github size={15} />
                  <span>View on GitHub</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
