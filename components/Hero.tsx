  import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-paper">
      {/* Ultra Subtle Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(0,82,255,0.03),rgba(255,255,255,0)_50%)]"></div>
      <div className="absolute inset-0 bg-[size:100px_100px] bg-grid-pattern-light opacity-30 mask-gradient-b"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
          
         {/* Logo Area */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-10"
          >
             <img
  src="https://raw.githubusercontent.com/reverseeth/Aura/refs/heads/main/components/aura.svg"
  alt="Logo"
  className="w-32 h-10 object-contain"
/>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center mb-6"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-50/80 backdrop-blur-sm border border-gray-100 text-[10px] font-medium uppercase tracking-[0.2em] text-black">
              <span className="w-1.5 h-1.5 rounded-full bg-electric shadow-[0_0_8px_#0052ff]" />
              AURA V.4.0
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-7xl md:text-9xl font-light tracking-tighter text-black mb-6 leading-[0.9]"
          >
            <span className="serif-italic">Uma</span> Marca. <br />
            <span className="serif-italic">Uma</span> Estrutura.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-2xl text-black max-w-2xl mx-auto mb-10 font-light leading-relaxed tracking-tight"
          >
            Construída em cima de fundamentos, não de teste infinito e cópia de concorrente.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full"
          >
            <a 
              href="#apply"
              className="group min-w-[180px] px-8 py-4 rounded-full bg-black text-white text-sm font-medium hover:bg-gray-900 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-black/10 flex items-center justify-center gap-2 whitespace-nowrap tracking-tight"
            >
              Entrar Agora
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a href="#curriculum" className="group min-w-[180px] px-8 py-4 rounded-full border border-gray-200 bg-white/80 backdrop-blur-sm hover:border-gray-300 text-sm font-medium text-black transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap hover:bg-gray-50 tracking-tight">
               <Play size={10} className="fill-black" />
               Ver Curriculum
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div 
        className="absolute bottom-8 w-full text-center hidden md:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <p className="text-[9px] font-medium text-black tracking-[0.3em] uppercase">
           Operating Worldwide
        </p>
      </motion.div>
    </section>
  );
};
