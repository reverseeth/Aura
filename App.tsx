import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Lock, Check, X } from 'lucide-react';

export const Apply: React.FC = () => {
  return (
    <section id="apply" className="py-24 bg-paper relative overflow-hidden flex items-center justify-center">
      
      <div className="container mx-auto px-6 relative z-10">
        
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-gray-200 border border-white relative overflow-hidden"
          >
            {/* Decorative Background Blur */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-electric/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />

            <div className="flex flex-col xl:flex-row gap-12 xl:items-start justify-between relative z-10">
              
              <div className="w-full xl:w-1/3 xl:sticky xl:top-8 self-center text-center xl:text-left">
                <div className="flex items-center justify-center xl:justify-start gap-2 mb-8">
                   {/* Added shadow to dot */}
                   <div className="w-1.5 h-1.5 rounded-full bg-electric animate-pulse shadow-[0_0_8px_#0052ff]" />
                   <span className="text-[10px] font-bold text-black uppercase tracking-[0.2em]">Application Open</span>
                </div>
                
                <h2 className="text-5xl md:text-7xl font-light tracking-tighter text-black mb-6 leading-[1]">
                  Pronto para <br />
                  <span className="serif-italic text-black text-[1.0em]">ascender?</span>
                </h2>
                
                <p className="text-lg text-black font-light tracking-tight max-w-md mx-auto xl:mx-0 leading-relaxed mb-8">
                  O acesso é restrito a operadores que buscam escala global real. Não vendemos sonhos, vendemos estrutura de guerra.
                </p>

                {/* List removed from here as requested */}
              </div>

              {/* Cards Container - Grid for side-by-side on larger screens */}
              <div className="w-full xl:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
                
                {/* CARD 1: THE REAL DEAL (Active) */}
                <div className="bg-obsidian rounded-[2rem] p-8 text-white relative overflow-hidden group shadow-2xl shadow-black/20 z-20 border border-white/10 flex flex-col justify-between h-full">
                  <div className="relative z-10 flex flex-col gap-6">
                     <div>
                       <span className="text-[10px] font-mono text-white/60 uppercase tracking-widest">Acesso Restrito</span>
                       <h3 className="text-2xl font-medium mt-2 text-white tracking-tight">Protocolo Ecom Global</h3>
                     </div>

                     <div className="w-full h-px bg-white/10"></div>

                     {/* Benefits List */}
                     <div className="space-y-3">
                        <BenefitItem text="Acesso Vitalício ao Protocolo" />
                        <BenefitItem text="Comunidade Global Privada" />
                        <BenefitItem text="Blacklist de Fornecedores & Tools" />
                        <BenefitItem text="Mentoria Quinzenal (Ao Vivo)" />
                        <BenefitItem text="Estrutura Legal (LLC & Tax)" />
                     </div>

                     <div className="w-full h-px bg-white/10"></div>

                     <div className="space-y-4 pt-2">
                       <div className="flex justify-between items-center pb-2">
                          <span className="text-xs text-white/60 font-light tracking-tight">Status</span>
                          <div className="flex items-center gap-2">
                             {/* Blue Dot - Ultra Neon Effect */}
                             <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-electric opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-electric shadow-[0_0_15px_#0052ff] ring-1 ring-electric/50"></span>
                              </span>
                             <span className="text-white font-medium text-[10px] uppercase tracking-widest">Vagas Abertas</span>
                          </div>
                       </div>
                       
                       {/* Added shadow to button */}
                       <button className="w-full bg-electric hover:bg-white hover:text-black text-white py-4 rounded-full font-medium text-sm uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-3 shadow-[0_0_25px_rgba(0,82,255,0.6)] hover:shadow-xl">
                         Aplicar Agora
                         <ArrowRight size={14} />
                       </button>

                       <div className="flex justify-center items-center gap-2 text-white/40 mt-2">
                          <Lock size={10} />
                          <span className="text-[10px] font-mono">Secure SSL Encrypted</span>
                       </div>
                     </div>
                  </div>
                </div>

                {/* CARD 2: THE "BOT" PLAN (Disabled/Comparison) */}
                <div className="bg-gray-100 rounded-[2rem] p-8 relative overflow-hidden opacity-80 grayscale-[0.5] scale-95 origin-top select-none pointer-events-none border border-gray-200 flex flex-col justify-between h-full">
                    <div className="flex flex-col gap-6">
                         <div>
                           <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest line-through">Método Antigo</span>
                           <h3 className="text-2xl font-medium mt-2 text-gray-500 tracking-tight">Plano "Bot" (Guru)</h3>
                         </div>

                         <div className="w-full h-px bg-gray-300"></div>

                         {/* Negative List */}
                         <div className="space-y-3">
                            <NegativeItem text="Aulas Gravadas em 2021" />
                            <NegativeItem text="Dropshipping Nacional (Real)" />
                            <NegativeItem text="Produtos Saturados" />
                            <NegativeItem text="Bloqueios no Facebook" />
                            <NegativeItem text="Suporte por Email" />
                         </div>
                    </div>

                    <div className="flex flex-col gap-6 mt-6">
                         <div className="w-full h-px bg-gray-300"></div>
                         
                         <button disabled className="w-full bg-gray-300 text-gray-500 py-4 rounded-full font-medium text-sm uppercase tracking-widest flex items-center justify-center gap-3 cursor-not-allowed">
                             Não Recomendado
                         </button>
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

const BenefitItem = ({ text }: { text: string }) => (
    <div className="flex items-start gap-3">
        <div className="mt-0.5 min-w-[16px] flex justify-center">
            <Check size={14} className="text-electric drop-shadow-[0_0_5px_rgba(0,82,255,0.8)]" />
        </div>
        <span className="text-sm text-white font-light tracking-tight leading-tight">{text}</span>
    </div>
);

const NegativeItem = ({ text }: { text: string }) => (
    <div className="flex items-start gap-3">
        <div className="mt-0.5 min-w-[16px] flex justify-center">
            <X size={14} className="text-gray-500" />
        </div>
        <span className="text-sm text-gray-600 font-light tracking-tight leading-tight line-through">{text}</span>
    </div>
);
