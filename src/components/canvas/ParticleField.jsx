import React, { useRef, useEffect, useCallback } from 'react';

const ParticleField = ({ scrollProgress = 0 }) => {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const animationFrameId = useRef(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const initParticles = useCallback((width, height) => {
    const particles = [];
    const numParticles = Math.min(150, Math.floor((width * height) / 8000));
    
    for (let i = 0; i < numParticles; i++) {
      const layer = Math.floor(Math.random() * 3);
      const isAccent = Math.random() > 0.7;
      
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.2 + 0.03,
        speedX: (Math.random() - 0.5) * 0.25 * (layer + 1),
        speedY: (Math.random() * -0.4 - 0.08) * (layer + 1),
        layer,
        baseY: Math.random() * height,
        isAccent,
      });
    }
    particlesRef.current = particles;
  }, []);

  const renderParticles = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    const mouse = mouseRef.current;

    ctx.clearRect(0, 0, width, height);

    particlesRef.current.forEach((p) => {
      // Drift movement
      p.x += p.speedX;
      p.baseY += p.speedY;

      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.baseY < -50) p.baseY = height + 50;

      // Parallax shift based on scroll
      const parallaxOffset = scrollProgress * 500 * (p.layer + 1);
      p.y = p.baseY - parallaxOffset;

      if (p.y < -50) {
        p.baseY += height + 100;
        p.y = p.baseY - parallaxOffset;
      }

      // Mouse proximity glow
      const dx = p.x - mouse.x;
      const dy = p.y - mouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const mouseInfluence = Math.max(0, 1 - dist / 200);

      const currentOpacity = Math.min(1, p.opacity + (scrollProgress * 0.4) + (mouseInfluence * 0.4));
      const radius = p.size + (scrollProgress * p.size * 1.2) + (mouseInfluence * 3);

      // Color based on type
      if (p.isAccent) {
        // Gold particles
        ctx.beginPath();
        ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212, 168, 67, ${currentOpacity * 0.8})`;
        ctx.fill();
      } else {
        // Crimson particles
        ctx.beginPath();
        ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(196, 30, 58, ${currentOpacity})`;
        ctx.fill();
      }

      // Glow ring for particles near mouse
      if (mouseInfluence > 0.3) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, radius + 2, 0, Math.PI * 2);
        ctx.strokeStyle = p.isAccent 
          ? `rgba(212, 168, 67, ${mouseInfluence * 0.15})` 
          : `rgba(196, 30, 58, ${mouseInfluence * 0.15})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    });

    animationFrameId.current = requestAnimationFrame(renderParticles);
  }, [scrollProgress]);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const canvas = canvasRef.current;

    const handleResize = () => {
      const dpr = window.devicePixelRatio || 1;
      const { innerWidth, innerHeight } = window;
      canvas.width = innerWidth * dpr;
      canvas.height = innerHeight * dpr;
      canvas.style.width = `${innerWidth}px`;
      canvas.style.height = `${innerHeight}px`;
      const ctx = canvas.getContext('2d');
      ctx.scale(dpr, dpr);
      initParticles(innerWidth, innerHeight);
    };

    const handleMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave);
    handleResize();
    renderParticles();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [initParticles, renderParticles, prefersReducedMotion]);

  if (prefersReducedMotion) {
    return (
      <div className="absolute inset-0 bg-gradient-to-b from-bg-primary to-bg-secondary opacity-50 z-0" />
    );
  }

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-none"
      style={{ display: 'block' }}
    />
  );
};

export default ParticleField;
