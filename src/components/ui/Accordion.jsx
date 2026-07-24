import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Accordion = ({ title, subtitle, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-border/60 py-4 group">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left focus:outline-none transition-colors duration-200 hover:text-accent"
      >
        <div className="min-w-0 flex-1 mr-4">
          <h3 className="text-base font-semibold text-text-primary tracking-tight group-hover:text-accent transition-colors duration-200">{title}</h3>
          {subtitle && <p className="text-sm text-text-tertiary mt-0.5 truncate">{subtitle}</p>}
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.35, ease: [0.34, 1.56, 0.64, 1] }}
          className="text-text-tertiary flex-shrink-0 w-8 h-8 rounded-full bg-bg-secondary/50 flex items-center justify-center transition-colors duration-200 group-hover:bg-accent-muted group-hover:text-accent"
        >
          <svg 
            width="16" height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-2 text-text-secondary">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accordion;
