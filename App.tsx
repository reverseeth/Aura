import React from 'react';
import { Hero } from './components/Hero';
import { BrutalTruth } from './components/BrutalTruth';
import { GlobalScale } from './components/GlobalScale';
import { Modules } from './components/Modules';
import { SocialProof } from './components/SocialProof';
import { FAQ } from './components/FAQ';
import { Apply } from './components/Apply';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-paper text-slate-900 selection:bg-electric selection:text-white overflow-hidden">
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
