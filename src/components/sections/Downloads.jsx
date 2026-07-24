import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import { downloads } from '../../data/content';

const Downloads = () => {
  return (
    <section id="downloads" className="section-container section-padding">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        className="bento-card flex flex-col md:flex-row items-center justify-between gap-6 py-8 px-8"
      >
        {/* Left column: title and description. `flex-1` makes this column grow. */}
        <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-accent-muted flex items-center justify-center">
              <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-text-primary tracking-tight">Resume</h2>
          </div>
          {/* The paragraph uses semantic color classes defined in `index.css` */}
          <p className="text-text-secondary max-w-lg leading-relaxed">
            Looking for my resume? You can download it here.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 items-center">
          <Button href={downloads.resume.link} download variant="primary" className="px-6 py-3">
            {downloads.resume.text}
          </Button>
          <Button href={downloads.coverLetter.link} download variant="secondary" className="px-6 py-3">
            {downloads.coverLetter.text}
          </Button>
          <Button href={downloads.cv.link} download variant="secondary" className="px-6 py-3">
            {downloads.cv.text}
          </Button>
        </div>
      </motion.div>
    </section>
  );
};

export default Downloads;
