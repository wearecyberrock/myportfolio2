import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import { social, siteConfig } from '../../data/content';

const Footer = () => {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="section-container py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left — branding */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <span className="text-text-primary font-semibold text-sm tracking-tight">{siteConfig.name}</span>
          <p className="text-text-tertiary text-xs">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
        
        {/* Right — social + scroll top */}
        <div className="flex items-center flex-wrap gap-3 justify-center md:justify-end">
          <a href={social.instagram} aria-label="Instagram" className="w-9 h-9 rounded-full bg-white/50 border border-border flex items-center justify-center text-text-secondary hover:text-accent hover:bg-white/80 hover:border-border-accent transition-all duration-200">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
          </a>
          <a href={social.tiktok} aria-label="TikTok" className="w-9 h-9 rounded-full bg-white/50 border border-border flex items-center justify-center text-text-secondary hover:text-accent hover:bg-white/80 hover:border-border-accent transition-all duration-200">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 2.78-1.15 5.54-3.33 7.31-1.9 1.53-4.32 2.12-6.6 1.72-2.58-.45-4.82-2.13-5.83-4.54-1.02-2.45-.87-5.32.41-7.61 1.25-2.26 3.63-3.9 6.22-4.14 0 1.4-.01 2.8 0 4.2-.84.2-1.62.66-2.18 1.34-.7.83-.98 1.95-.77 3.01.2 1.07.82 2 1.7 2.58.89.58 1.98.74 3.01.46 1.35-.37 2.4-1.54 2.61-2.92.1-1.37.07-2.75.07-4.13V.02h-4.36z" />
            </svg>
          </a>
          <a href={`mailto:${social.email}`} aria-label="Email" className="w-9 h-9 rounded-full bg-white/50 border border-border flex items-center justify-center text-text-secondary hover:text-accent hover:bg-white/80 hover:border-border-accent transition-all duration-200">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
          {social.cvPath && (
            <Button href={social.cvPath} variant="secondary" className="px-4 py-2 text-xs" download>
              Download CV
            </Button>
          )}
          
          <div className="w-[1px] h-5 bg-border mx-1 hidden md:block" />
          
          <motion.button 
            onClick={handleScrollTop}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="w-9 h-9 rounded-full bg-white/50 border border-border flex items-center justify-center text-text-secondary hover:text-accent hover:bg-white/80 hover:border-border-accent transition-all duration-200"
            aria-label="Back to top"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
