import React, { useEffect, useState } from 'react';
import { Hero } from './components/Hero';
import { BrutalTruth } from './components/BrutalTruth';
import { GlobalScale } from './components/GlobalScale';
import { Modules } from './components/Modules';
import { SocialProof } from './components/SocialProof';
import { FAQ } from './components/FAQ';
import { Apply } from './components/Apply';
import { Footer } from './components/Footer';
import { motion, useScroll, useSpring } from 'framer-motion';

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-paper text-slate-900 selection:bg-electric selection:text-white">

      {/* Background Cursor Glow Effect */}
      <div 
        className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300 opacity-30 mix-blend-multiply"
        style={{
          background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 82, 255, 0.08), transparent 40%)`
        }}
      />
      
      <main className="relative z-10 flex flex-col gap-0">
        <Hero />
        <BrutalTruth />
        <GlobalScale />
        <Modules />
        <SocialProof />
        <Apply />
        <FAQ />
        <Footer />
      </main>
    </div>
  );
}
