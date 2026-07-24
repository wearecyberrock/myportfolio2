import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import ProjectCard from '../ui/ProjectCard';
import ScrollReveal from '../ui/ScrollReveal';
import { projects } from '../../data/content';

const Projects = () => {
  return (
    <section id="projects" className="section-container section-padding">
      <ScrollReveal>
        <SectionHeading 
          title="Selected Work" 
          subtitle="A curated collection of projects across design, technology, and creative media." 
        />
      </ScrollReveal>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {projects.map((project, index) => (
          <ScrollReveal 
            key={project.id || index} 
            delay={index * 0.12}
          >
            <ProjectCard project={project} />
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

export default Projects;
