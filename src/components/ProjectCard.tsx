import { useEffect, useRef, useState, type ReactNode } from 'react';
import { useReducedMotion } from '../hooks';

export function ProjectCard({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const reduced = useReducedMotion();
  useEffect(() => {
    if (reduced || visible || !ref.current) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); observer.disconnect(); }
    }, { threshold: 0.08 });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [reduced, visible]);
  return <article ref={ref} className={`game${reduced ? '' : ' reveal'}${visible || reduced ? ' is-visible' : ''}`}>{children}</article>;
}
