import React from 'react';
import { motion } from 'framer-motion';

const BentoCard = ({ children, className = '', span, hover = true, title }) => {
  const colSpan = span?.col ? `md:col-span-${span.col}` : '';
  const rowSpan = span?.row ? `md:row-span-${span.row}` : '';

  return (
    <motion.div
      whileHover={hover ? { y: -4 } : {}}
      transition={{ duration: 0.35, ease: [0.34, 1.56, 0.64, 1] }}
      className={`bento-card flex flex-col ${colSpan} ${rowSpan} ${className}`}
    >
      {title && (
        <div className="flex items-center gap-3 mb-5">
          <div className="w-1.5 h-6 rounded-full bg-accent" />
          <h3 className="text-lg font-semibold text-text-primary tracking-tight">{title}</h3>
        </div>
      )}
      {children}
    </motion.div>
  );
};

export default BentoCard;
