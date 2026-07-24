import React, { useEffect, useRef, useState } from 'react';
import { useScrollProgress } from '../../hooks/useScrollProgress';

const STORAGE_KEY = 'scrollProgressPosV1';

const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

const ScrollProgressBar = () => {
  const progress = useScrollProgress();
  const ref = useRef(null);
  const draggingRef = useRef(false);
  const startRef = useRef({ x: 0, y: 0, right: 24, bottom: 80 });

  const [pos, setPos] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) return JSON.parse(raw);
    } catch (e) {}
    return { right: 24, bottom: 80 };
  });

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const onPointerMove = (e) => {
      if (!draggingRef.current) return;
      const dx = e.clientX - startRef.current.x;
      const dy = e.clientY - startRef.current.y;

      const newRight = clamp(startRef.current.right - dx, 8, window.innerWidth - 80);
      const newBottom = clamp(startRef.current.bottom - dy, 8, window.innerHeight - 40);

      setPos({ right: newRight, bottom: newBottom });
    };

    const onPointerUp = () => {
      if (!draggingRef.current) return;
      draggingRef.current = false;
      // persist
      try { localStorage.setItem(STORAGE_KEY, JSON.stringify(pos)); } catch (e) {}
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
    };

    const onPointerDown = (e) => {
      draggingRef.current = true;
      startRef.current.x = e.clientX;
      startRef.current.y = e.clientY;
      startRef.current.right = pos.right;
      startRef.current.bottom = pos.bottom;
      window.addEventListener('pointermove', onPointerMove);
      window.addEventListener('pointerup', onPointerUp);
      e.preventDefault();
    };

    node.addEventListener('pointerdown', onPointerDown);
    return () => node.removeEventListener('pointerdown', onPointerDown);
  }, [pos]);

  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(pos)); } catch (e) {}
  }, [pos]);

  const pct = Math.round(progress * 100);

  return (
    <div
      ref={ref}
      className="floating-progress glass-hover glass"
      style={{ right: `${pos.right}px`, bottom: `${pos.bottom}px` }}
      title={`${pct}% scrolled — drag to move`}
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={pct}
    >
      <div className="floating-progress-track">
        <div className="floating-progress-fill" style={{ width: `${pct}%` }} />
      </div>
      <div className="floating-progress-label">{pct}%</div>
    </div>
  );
};

export default ScrollProgressBar;
