import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, variant = 'primary', href, onClick, className = '', icon, ...rest }) => {
  // `base` collects common utility classes applied to every button variant.
  // Examples: `inline-flex` (display), `w-max` (width: max-content),
  // `items-center` and `justify-center` align the inner content.
  const base = 'inline-flex w-max items-center justify-center font-medium transition-all focus:outline-none focus:ring-2 focus:ring-accent/30 focus:ring-offset-2 focus:ring-offset-transparent disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap';
  
  // `variants` maps a semantic variant name to a string of utility classes.
  // Edit these class strings to change spacing, color, or behavior across the app.
  const variants = {
    primary: 'bg-accent text-white px-8 py-3 rounded-xl min-w-[200px] hover:bg-accent-hover hover:shadow-[0_4px_24px_rgba(196,30,58,0.35)] active:shadow-[0_2px_12px_rgba(196,30,58,0.3)] font-semibold text-sm tracking-wide',
    secondary: 'bg-transparent border border-accent/30 text-accent px-8 py-3 rounded-xl min-w-[200px] hover:bg-accent-muted hover:border-accent/50 font-semibold text-sm tracking-wide',
    icon: 'bg-white/60 backdrop-blur-sm text-text-secondary p-3 rounded-full border border-border hover:bg-white/90 hover:text-accent hover:border-border-accent hover:shadow-[0_4px_16px_rgba(196,30,58,0.12)]',
  };

  const classes = `${base} ${variants[variant] || variants.primary} ${className}`;

  // `Inner` renders optional icon + children. `icon` is an inline SVG or node.
  const Inner = () => (
    <>
      {icon && <span className={children ? "mr-2" : ""}>{icon}</span>}
      {children}
    </>
  );

  const motionProps = {
    whileHover: { scale: 1.04 },
    whileTap: { scale: 0.96 },
    transition: { duration: 0.2, ease: [0.34, 1.56, 0.64, 1] },
  };

  if (href) {
    return (
      <motion.a href={href} className={classes} {...motionProps} {...rest}>
        <Inner />
      </motion.a>
    );
  }

  return (
    <motion.button onClick={onClick} className={classes} {...motionProps} {...rest}>
      <Inner />
    </motion.button>
  );
};

export default Button;
