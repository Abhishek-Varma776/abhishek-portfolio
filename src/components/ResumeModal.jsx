import React from 'react';
import { X, Printer, ExternalLink, Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const { personal, experience, projects, skills, education, certifications, achievements } = portfolioData;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Modal Controls */}
        <div className="modal-header-bar">
          <div className="modal-title-group">
            <span className="modal-badge">Resume Document</span>
            <span className="modal-subtitle">{personal.name}</span>
          </div>

          <div className="modal-actions">
            <button onClick={handlePrint} className="btn btn-secondary btn-sm">
              <Printer size={15} />
              <span>Print / Save PDF</span>
            </button>
            <a
              href="resume.html"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm"
            >
              <ExternalLink size={15} />
              <span>Open in New Tab</span>
            </a>
            <button onClick={onClose} className="modal-close-btn" aria-label="Close modal">
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Modal Body / Paper Preview */}
        <div className="modal-body-scroll">
          <div className="resume-sheet-preview">
            {/* Header */}
            <div className="r-header-modal">
              <h1 className="r-name-modal">{personal.name}</h1>
              <div className="r-contact-modal">
                <span>{personal.email}</span>
                <span>·</span>
                <span>{personal.phone}</span>
                <span>·</span>
                <span>{personal.location}</span>
                <span>·</span>
                <a href={personal.linkedin} target="_blank" rel="noopener noreferrer">linkedin</a>
                <span>·</span>
                <a href={personal.github} target="_blank" rel="noopener noreferrer">github</a>
              </div>
            </div>

            {/* Summary */}
            <div className="r-sec">
              <h2 className="r-sec-title">Summary</h2>
              <p className="r-sec-p">
                <strong>AI Engineer</strong> candidate graduating in 2027 (CGPA: 8.51/10, no active backlogs) with hands-on experience
                building <strong>NLP and Generative AI</strong> pipelines using BERT-based machine learning models, ML clustering,
                pattern extraction, and graph analytics. Skilled across <strong>Python, Java, and full-stack web development</strong>,
                with a track record of designing, building, and deploying end-to-end AI-driven applications independently
                and in teams. Smart India Hackathon Finalist with strong analytical thinking and a fast-learning, proactive
                approach to solving real-world problems.
              </p>
            </div>

            {/* Skills */}
            <div className="r-sec">
              <h2 className="r-sec-title">Technical Skills</h2>
              <table className="r-table">
                <tbody>
                  {skills.map((grp, idx) => (
                    <tr key={idx}>
                      <td className="r-td-cat">{grp.category}:</td>
                      <td className="r-td-items">{grp.items.map(i => i.name).join(', ')}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Work Experience */}
            <div className="r-sec">
              <h2 className="r-sec-title">Work Experience</h2>
              {experience.map((exp, idx) => (
                <div key={idx} className="r-exp-block">
                  <div className="r-row-between">
                    <strong>{exp.organization}</strong>
                    <span>{exp.period}</span>
                  </div>
                  <div className="r-row-between r-sub-row">
                    <em>{exp.role}</em>
                    <em>{exp.location}</em>
                  </div>
                  <ul className="r-ul">
                    {exp.bullets.map((b, bIdx) => (
                      <li key={bIdx}>{b.text}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Projects */}
            <div className="r-sec">
              <h2 className="r-sec-title">Projects</h2>
              {projects.map((proj) => (
                <div key={proj.id} className="r-proj-block">
                  <div className="r-proj-head">
                    <strong>{proj.title}</strong>
                    <span className="r-proj-tech"> ({proj.tags.join(', ')})</span>
                  </div>
                  <p className="r-proj-desc">{proj.description}</p>
                </div>
              ))}
            </div>

            {/* Education */}
            <div className="r-sec">
              <h2 className="r-sec-title">Education</h2>
              {education.map((edu, idx) => (
                <div key={idx} className="r-edu-block">
                  <div className="r-row-between">
                    <strong>{edu.institution}</strong>
                    <span>{edu.period}</span>
                  </div>
                  <div className="r-row-between r-sub-row">
                    <em>{edu.degree}</em>
                    <em>{edu.grade}</em>
                  </div>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div className="r-sec">
              <h2 className="r-sec-title">Certifications</h2>
              <ul className="r-ul">
                {certifications.map((c, idx) => (
                  <li key={idx}>
                    <strong>{c.name}</strong> — {c.issuer}
                  </li>
                ))}
              </ul>
            </div>

            {/* Achievements */}
            <div className="r-sec">
              <h2 className="r-sec-title">Achievements</h2>
              <ul className="r-ul">
                {achievements.map((a, idx) => (
                  <li key={idx}>
                    <strong>{a.title}</strong> — {a.subtitle}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
