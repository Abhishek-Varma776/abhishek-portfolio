import React from 'react';
import { Mail, Phone, Linkedin, Github, ArrowUpRight, MessageSquare } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const { personal } = portfolioData;

  const contactItems = [
    {
      label: 'Email',
      value: personal.email,
      href: `mailto:${personal.email}`,
      icon: Mail,
      primary: true
    },
    {
      label: 'Phone',
      value: personal.phone,
      href: `tel:${personal.phone.replace(/\s+/g, '')}`,
      icon: Phone
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/pujala-snav',
      href: personal.linkedin,
      icon: Linkedin,
      external: true
    },
    {
      label: 'GitHub',
      value: 'github.com/Abhishek-Varma776',
      href: personal.github,
      icon: Github,
      external: true
    }
  ];

  return (
    <section id="contact" className="section bg-surface-2">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-eyebrow">Get in Touch</span>
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-subtitle mx-auto">
            Actively looking for AI Engineer opportunities. Reach out if you're building with NLP, Generative AI, or full-stack architectures.
          </p>
        </div>

        <div className="contact-grid">
          {contactItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <a
                key={idx}
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                className={`contact-card ${item.primary ? 'contact-primary' : ''}`}
              >
                <div className="contact-icon-box">
                  <Icon size={22} />
                </div>
                <div className="contact-text">
                  <span className="contact-label">{item.label}</span>
                  <span className="contact-val">{item.value}</span>
                </div>
                <ArrowUpRight size={18} className="contact-arrow" />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
