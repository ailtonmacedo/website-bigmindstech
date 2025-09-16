"use client";

import { useState, useEffect, useRef } from 'react';

export function Brain() {
  const [style, setStyle] = useState({});
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;

      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const rotateY = ((clientX / innerWidth) - 0.5) * 8; // -4 to 4 degrees
      const rotateX = -(((clientY / innerHeight) - 0.5) * 8); // -4 to 4 degrees, inverted

      setStyle({
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* 3D Model */}
      <div className="absolute w-[90vw] max-w-2xl md:w-[50vw] lg:w-[48vw] aspect-[16/10] z-10">
        <iframe
          src="https://my.spline.design/brainanatomicallove-e902120531e0b027581f185370c06a36/"
          frameBorder="0"
          width="100%"
          height="100%"
          className="pointer-events-auto"
          aria-label="Cérebro 3D interativo"
        />
      </div>
      
      {/* Text Overlay */}
      <div
        ref={ref}
        className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none transition-transform duration-[400ms] ease-out"
        style={style}
      >
        <div className="text-center font-headline font-bold text-foreground mix-blend-screen">
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
        <p className="font-headline font-bold text-[clamp(20px,5vw,36px)] tracking-tighter mt-8 md:mt-12 text-foreground mix-blend-screen">
            BigMinds Tech
        </p>
      </div>
    </div>
  );
}
