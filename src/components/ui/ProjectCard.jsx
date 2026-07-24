import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ project }) => {
  const { title, description, image, aspectRatio = '16:9', link, tags } = project;
  
  const cssAspectRatio = aspectRatio.replace(':', '/');

  return (
    <motion.a
      href={link || '#'}
      target={link && link !== '#' ? "_blank" : "_self"}
      rel="noopener noreferrer"
      whileHover={{ y: -6 }}
      transition={{ duration: 0.35, ease: [0.34, 1.56, 0.64, 1] }}
      className="project-card flex flex-col group block"
    >
      {/* Image area */}
      <div 
        className="w-full relative overflow-hidden bg-bg-secondary"
        style={{ aspectRatio: cssAspectRatio }}
      >
        {image ? (
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
          />
        ) : (
          <div className="w-full h-full relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#fce8ec] via-[#faf4ef] to-[#f5e6d3]" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-5xl font-bold text-text-primary/[0.06] tracking-tight select-none">{title}</span>
            </div>
            {/* Subtle grid pattern */}
            <div 
              className="absolute inset-0 opacity-[0.04]" 
              style={{
                backgroundImage: 'linear-gradient(var(--text-primary) 1px, transparent 1px), linear-gradient(90deg, var(--text-primary) 1px, transparent 1px)',
                backgroundSize: '40px 40px'
              }}
            />
          </div>
        )}
        
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out">
          <span className="text-accent font-semibold flex items-center gap-2 text-sm uppercase tracking-wider">
            View Project
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </span>
        </div>
      </div>
      
      {/* Content area - Centered text and tags */}
      <div className="px-8 pb-8 pt-6 flex flex-col items-center text-center flex-grow">
        <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-accent transition-colors duration-300 tracking-tight">
          {title}
        </h3>
        <p className="text-text-secondary text-sm mb-6 flex-grow leading-relaxed line-clamp-3">
          {description}
        </p>
        
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap justify-center gap-3 mt-auto">
            {tags.map((tag, index) => (
              <span 
                key={index} 
                className="text-xs px-3 py-1.5 rounded-md bg-bg-secondary/70 text-text-tertiary border border-border font-medium tracking-wide"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.a>
  );
};

export default ProjectCard;