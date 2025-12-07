import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Lock } from 'lucide-react';

export const Apply: React.FC = () => {
  return (
    <section id="apply" className="py-24 bg-paper relative overflow-hidden flex items-center justify-center">
      
      <div className="container mx-auto px-6 relative z-10">
        
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[2.5rem] p-8 md:p-16 shadow-2xl shadow-gray-200 border border-white relative overflow-hidden"
          >
            {/* Decorative Background Blur */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-electric/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />

            <div className="flex flex-col lg:flex-row gap-12 lg:items-end justify-between relative z-10">
              
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-8">
                   {/* Added shadow to dot */}
                   <div className="w-1.5 h-1.5 rounded-full bg-electric animate-pulse shadow-[0_0_8px_#0052ff]" />
                   <span className="text-[10px] font-bold text-black uppercase tracking-[0.2em]">Application Open</span>
                </div>
                
                <h2 className="text-5xl md:text-7xl font-light tracking-tighter text-black mb-6 leading-[1]">
                  Pronto para <br />
                  <span className="serif-italic text-black text-[1.0em]">ascender?</span>
                </h2>
                
                <p className="text-lg text-black font-light tracking-tight max-w-md leading-relaxed mb-8">
                  O acesso é restrito a operadores que buscam escala global real. Não vendemos sonhos, vendemos estrutura de guerra.
                </p>

                <div className="flex flex-col gap-3 text-sm font-medium text-black tracking-tight">
                  <div className="flex items-center gap-3">
                     <span className="w-1 h-1 rounded-full bg-black" />
                     <span>Acesso Vitalício ao Protocolo</span>
                  </div>
                  <div className="flex items-center gap-3">
                     <span className="w-1 h-1 rounded-full bg-black" />
                     <span>Comunidade Global Privada</span>
                  </div>
                  <div className="flex items-center gap-3">
                     <span className="w-1 h-1 rounded-full bg-black" />
                     <span>Blacklist de Fornecedores & Tools</span>
                  </div>
                </div>
              </div>

              <div className="flex-1 lg:max-w-sm w-full">
                <div className="bg-obsidian rounded-[2rem] p-8 text-white relative overflow-hidden group shadow-2xl shadow-black/20">
                  
                  <div className="relative z-10 flex flex-col gap-8">
                     <div>
                       <span className="text-[10px] font-mono text-white uppercase tracking-widest">Acesso Restrito</span>
                       <h3 className="text-2xl font-medium mt-2 text-white tracking-tight">Protocolo Ecom Global</h3>
                     </div>

                     <div className="space-y-4">
                       <div className="flex justify-between items-center border-b border-white/10 pb-4">
                          <span className="text-sm text-white font-light tracking-tight">Status Atual</span>
                          <div className="flex items-center gap-2">
                             <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                              </span>
                             <span className="text-white font-medium text-[10px] uppercase tracking-widest">Disponível</span>
                          </div>
                       </div>
                       
                       {/* Added shadow to button */}
                       <button className="w-full bg-electric hover:bg-white hover:text-black text-white py-4 rounded-full font-medium text-sm uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-3 shadow-[0_0_25px_rgba(0,82,255,0.6)] hover:shadow-xl">
                         Aplicar Agora
                         <ArrowRight size={14} />
                       </button>

                       <div className="flex justify-center items-center gap-2 text-white mt-2">
                          <Lock size={10} />
                          <span className="text-[10px] font-mono">Secure SSL Encrypted</span>
                       </div>
                     </div>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};