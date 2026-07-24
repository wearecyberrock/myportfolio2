import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ParticleField from '../canvas/ParticleField';
import { hero } from '../../data/content';
import './Hero.css';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const indicatorRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // Clear any existing scroll triggers
    ScrollTrigger.getAll().forEach(t => t.kill());

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: '+=100%',
        pin: true,
        scrub: 1,
        onUpdate: (self) => setScrollProgress(self.progress),
      }
    });

    // 1. Fade out the hero text
    if (contentRef.current) {
      tl.to(contentRef.current, {
        opacity: 0,
        y: -50,
        duration: 1,
        ease: "power2.inOut"
      }, 0);
    }

    // 2. Fade out the scroll indicator
    if (indicatorRef.current) {
      tl.to(indicatorRef.current, {
        opacity: 0,
        y: 20,
        duration: 1,
        ease: "power2.inOut"
      }, 0);
    }

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  const stagger = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30, filter: 'blur(8px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.9, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.92, filter: 'blur(12px)' },
    visible: {
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
      transition: { duration: 1.1, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  return (
    <div id="home" ref={containerRef} className="hero-wrapper">
      <div className="hero-sticky">
        
        <div className="hero-particles">
          <ParticleField scrollProgress={scrollProgress} />
        </div>
        
        <motion.div 
          ref={contentRef}
          className="hero-content"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          {/* Tagline pill */}
          <motion.span variants={fadeUp} className="hero-tagline">
            {hero.tagline}
          </motion.span>
          
          {/* Main headline */}
          <motion.h1 
            variants={scaleIn}
            className="hero-title"
          >
            {hero.centerpiece}
          </motion.h1>
          
          {/* Subtitle */}
          <motion.p variants={fadeUp} className="hero-subtitle">
            {hero.subtitle}
          </motion.p>
        </motion.div>

        {/* Cards removed */}

        {/* Scroll indicator */}
        <motion.div 
          ref={indicatorRef}
          className="hero-scroll-indicator scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <span className="scroll-indicator-text">Scroll</span>
          <div className="scroll-indicator-line" />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
