import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import BentoCard from '../ui/BentoCard';
import ScrollReveal from '../ui/ScrollReveal';
import Accordion from '../ui/Accordion';
import { skills, hobbies, education, achievements } from '../../data/content';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section-container section-padding">
      <SectionHeading title="About Me" subtitle="My background, skills, and interests." />
      
      {/* Picture Bento Grid */}
      <div className="about-grid about-grid-margin">
        {/* Full Body (Vertical) */}
        <ScrollReveal delay={0.1} className="grid-pic-full-body">
          <BentoCard className="placeholder-card vertical">
            <div className="placeholder-inner">
              <svg className="placeholder-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span className="placeholder-title">Full Body (Business)</span>
              <span className="placeholder-subtitle">Vertical Placeholder</span>
            </div>
          </BentoCard>
        </ScrollReveal>

        {/* Portrait (Square) */}
        <ScrollReveal delay={0.2} className="grid-pic-square">
          <BentoCard className="placeholder-card square">
            <div className="placeholder-inner">
              <svg className="placeholder-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="placeholder-title">Portrait</span>
              <span className="placeholder-subtitle">Square Placeholder</span>
            </div>
          </BentoCard>
        </ScrollReveal>

        {/* Creative (Square) */}
        <ScrollReveal delay={0.3} className="grid-pic-square">
          <BentoCard className="placeholder-card square">
            <div className="placeholder-inner">
              <svg className="placeholder-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              <span className="placeholder-title">Creative</span>
              <span className="placeholder-subtitle">Square Placeholder</span>
            </div>
          </BentoCard>
        </ScrollReveal>

        {/* Landscape (Horizontal) */}
        <ScrollReveal delay={0.4} className="grid-pic-landscape">
          <BentoCard className="placeholder-card horizontal">
            <div className="placeholder-inner">
              <svg className="placeholder-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 19V5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
              </svg>
              <span className="placeholder-title">Landscape / Wide</span>
              <span className="placeholder-subtitle">Horizontal Placeholder</span>
            </div>
          </BentoCard>
        </ScrollReveal>
      </div>

      <div className="about-grid">
        {/* Skills Card */}
        <ScrollReveal delay={0.1} className="grid-content-wide">
          <BentoCard title="Skills" className="h-full">
            <div className="skills-container">
              <div>
                <h4 className="category-title">Creative</h4>
                <div className="skills-list">
                  {skills.creative.map((skill, idx) => (
                    <span key={idx} className="skill-pill">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="category-title">Technical &amp; Soft</h4>
                <div className="skills-list">
                  {skills.technical.map((skill, idx) => (
                    <span key={idx} className="skill-pill">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </BentoCard>
        </ScrollReveal>

        {/* Hobbies Card */}
        <ScrollReveal delay={0.2} className="grid-content-narrow">
          <BentoCard title="Hobbies" className="h-full">
            <div className="hobbies-grid">
              {hobbies.map((hobby, idx) => (
                <div key={idx} className="hobby-card">
                  <span className="hobby-icon">{hobby.icon}</span>
                  <span className="text-sm text-text-secondary text-center font-medium">{hobby.name}</span>
                </div>
              ))}
            </div>
          </BentoCard>
        </ScrollReveal>

        {/* Education Card */}
        <ScrollReveal delay={0.3} className="grid-content-wide">
          <BentoCard title="Education" className="h-full">
            <div className="edu-container">
              {education.map((edu, idx) => (
                <Accordion
                  key={idx}
                  title={edu.institution}
                  subtitle={edu.detail}
                  defaultOpen={idx === 0}
                >
                  {edu.items.length > 0 ? (
                    <div className="edu-subjects-grid">
                      {edu.items.map((item, sIdx) => (
                        <div key={sIdx} className="edu-subject-item">
                          <span className="edu-subject-name">{item.subject}</span>
                          <span className={`edu-grade-badge grade-${item.grade}`}>
                            Grade {item.grade}
                          </span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="edu-description">{edu.description || edu.detail}</p>
                  )}
                </Accordion>
              ))}
            </div>
          </BentoCard>
        </ScrollReveal>

        {/* Achievements Card */}
        <ScrollReveal delay={0.4} className="grid-content-narrow">
          <BentoCard title="Achievements" className="h-full">
            <ul className="achievements-list">
              {achievements.map((ach, idx) => (
                <li key={idx} className="achievement-item group/ach">
                  <span className="achievement-dot" />
                  <span className="achievement-text">{ach}</span>
                </li>
              ))}
            </ul>
          </BentoCard>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default About;
