"use client";

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

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
            src="https://picsum.photos/seed/brain/1200/800"
            alt="Cérebro de IA"
            width={800}
            height={533}
            className="object-contain opacity-20"
            data-ai-hint="abstract brain"
        />
      </div>
      
      <div className="text-center font-headline font-bold text-foreground z-10 pointer-events-none">
        <h1 className="sr-only">Revolucionando IA & Dados para Negócios</h1>
        <span aria-hidden="true" className="block text-[clamp(28px,10vw,64px)] md:text-[clamp(48px,12vw,140px)] leading-none -mb-[2vw] md:-mb-[3vw] lg:-mb-[2.5vw]">
            Revolucionando
        </span>
        <span aria-hidden="true" className="block text-[clamp(40px,14vw,96px)] md:text-[clamp(60px,18vw,220px)] leading-none">
            IA & Dados
        </span>
        <span aria-hidden="true" className="block text-[clamp(28px,10vw,64px)] md:text-[clamp(48px,12vw,140px)] leading-none -mt-[2vw] md:-mt-[3vw] lg:-mt-[2.5vw]">
            para Negócios
        </span>
      </div>
    </div>
  );
}
