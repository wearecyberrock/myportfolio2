import React from 'react';
import { motion } from 'framer-motion';

const ScrollReveal = ({ children, direction = 'up', delay = 0, duration = 0.7, className = '' }) => {
  const offset = 40;
  
  const getOffset = () => {
    switch (direction) {
      case 'up': return { y: offset, x: 0 };
      case 'down': return { y: -offset, x: 0 };
      case 'left': return { y: 0, x: offset };
      case 'right': return { y: 0, x: -offset };
      default: return { y: offset, x: 0 };
    }
  };

  const { x, y } = getOffset();

  const variants = {
    hidden: { 
      opacity: 0, 
      y, 
      x,
      filter: 'blur(6px)',
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      x: 0,
      filter: 'blur(0px)',
      transition: { 
        duration, 
        delay, 
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
