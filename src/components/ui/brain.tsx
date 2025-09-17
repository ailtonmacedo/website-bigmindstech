"use client";

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { HeroText } from './hero-text';

export function Brain() {
  const [style, setStyle] = useState({});
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;

      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const rotateY = ((clientX / innerWidth) - 0.5) * 12; 
      const rotateX = -(((clientY / innerHeight) - 0.5) * 12);

      setStyle({
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.1)`,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      ref={ref}
      className="relative w-full h-full flex items-center justify-center transition-transform duration-300 ease-out"
      style={style}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <Image 
            src="https://picsum.photos/seed/another3dbrain/1200/800"
            alt="Cérebro 3D"
            width={800}
            height={533}
            className="object-contain opacity-20"
            data-ai-hint="3d brain technology"
        />
      </div>
      
      <HeroText />
    </div>
  );
}
