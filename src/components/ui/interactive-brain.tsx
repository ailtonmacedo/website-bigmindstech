'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function InteractiveBrain() {
  const [transform, setTransform] = useState('');

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { clientX, clientY, currentTarget } = e;
    const { offsetWidth, offsetHeight } = currentTarget;

    const xPos = (clientX - offsetWidth / 2) / 25;
    const yPos = (clientY - offsetHeight / 2) / 25;

    setTransform(
      `perspective(1000px) rotateY(${xPos}deg) rotateX(${-yPos}deg) scale(2.2)`
    );
  };

  const handleMouseLeave = () => {
    setTransform(
      'perspective(1000px) rotateY(0deg) rotateX(0deg) scale(2)'
    );
  };

  useEffect(() => {
    handleMouseLeave();
  }, []);

  const brainImage = PlaceHolderImages.find(img => img.id === '3d-brain-hero');

  return (
    <div
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="absolute inset-0 transition-transform duration-300 ease-out"
        style={{ transform, willChange: 'transform' }}
      >
        {brainImage && (
          <Image
            src={brainImage.imageUrl}
            alt={brainImage.description}
            data-ai-hint={brainImage.imageHint}
            fill
            className="object-cover"
            priority
          />
        )}
      </div>
      <div
        className="relative z-10 flex flex-col items-center justify-center text-center p-8"
        style={{ transform: 'translateZ(60px)' }}
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/80">
          Revolucionando <br />
          <span className="text-primary">IA & Dados</span> para Negócios
        </h1>
        <p className="mt-6 text-lg md:text-xl text-foreground/90 max-w-2xl" style={{ transform: 'translateZ(40px)' }}>
          Criamos soluções de inteligência artificial e produtos de dados que impulsionam negócios escaláveis e inovadores.
        </p>
      </div>
    </div>
  );
}
