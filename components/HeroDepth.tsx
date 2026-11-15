'use client';
import { ReactNode, useEffect, useRef } from 'react';
import gsap from 'gsap';

/** Pointer depth lives inside the scroll-scaled panel, so the two transforms never compete. */
export default function HeroDepth({ paused, children }: { paused: boolean; children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const layer = ref.current;
    const panel = layer?.parentElement;
    if (!layer || !panel) return;
    const media = window.matchMedia('(hover: hover) and (pointer: fine) and (min-width: 801px)');
    const reset = () => gsap.to(layer, { '--depth-x': 0, '--depth-y': 0, duration: .65, ease: 'power3.out', overwrite: true });
    const move = (event: PointerEvent) => {
      if (paused || !media.matches || event.pointerType === 'touch') return;
      const bounds = panel.getBoundingClientRect();
      const x = Math.max(-1, Math.min(1, (event.clientX - bounds.left) / bounds.width * 2 - 1));
      const y = Math.max(-1, Math.min(1, (event.clientY - bounds.top) / bounds.height * 2 - 1));
      gsap.to(layer, { '--depth-x': x, '--depth-y': y, duration: .7, ease: 'power3.out', overwrite: true });
    };
    panel.addEventListener('pointermove', move);
    panel.addEventListener('pointerleave', reset);
    window.addEventListener('blur', reset);
    media.addEventListener('change', reset);
    return () => {
      panel.removeEventListener('pointermove', move);
      panel.removeEventListener('pointerleave', reset);
      window.removeEventListener('blur', reset);
      media.removeEventListener('change', reset);
      gsap.killTweensOf(layer);
      layer.style.setProperty('--depth-x', '0');
      layer.style.setProperty('--depth-y', '0');
    };
  }, [paused]);
  return <div ref={ref} className="hero-depth">{children}</div>;
}
