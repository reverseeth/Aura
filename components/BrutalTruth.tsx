import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, FileText, Package, Globe } from 'lucide-react';

export const BrutalTruth: React.FC = () => {
  return (
    <section id="truth" className="py-32 bg-obsidian text-white relative overflow-hidden rounded-[2.5rem] mx-2 md:mx-4 -mt-8 z-20 shadow-2xl shadow-black">
      
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-electric/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* LOGO PLACEHOLDER AREA */}
        <div className="w-full flex justify-start mb-12">
             <div className="w-32 h-10 border border-white/10 rounded bg-white/5 flex items-center justify-center text-xs text-gray-500 tracking-widest uppercase">
                [LOGO AREA]
             </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="sticky top-32"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-[1px] bg-electric/50"></div>
              <span className="text-white font-mono text-[10px] tracking-[0.2em] uppercase">Realidade de Mercado</span>
            </div>
            
            {/* Standardized font-light to match other sections */}
            <h2 className="text-5xl md:text-7xl font-light mb-10 leading-[1.05] tracking-tighter">
              A maioria <br />
              vai <span className="serif-italic text-white text-[1.0em]">falhar.</span>
            </h2>
            
            <div className="space-y-8 text-white text-lg leading-relaxed font-light">
              <p>
                O e-commerce amador morreu. Se você ainda procura o "produto vencedor" no AliExpress para vender com uma loja genérica, você já está fora do jogo.
              </p>
              
              {/* Special Styling: Sans serif as requested (removed serif-italic) */}
              <div className="border-l border-electric/30 pl-6 py-1">
                <p className="text-2xl text-white font-light leading-tight">
                  "O mercado não tolera mediocridade."
                </p>
              </div>

              <p>
                Grandes players globais usam IA para criativos, têm holdings em Delaware para eficiência fiscal e compram tráfego com inteligência de dados. É contra eles que você luta.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 pt-10 lg:pt-0">
             <TruthCard 
               icon={<TrendingUp size={20} />}
               title="Métricas de Vaidade"
               text="Faturamento não é lucro. Enquanto você posta print de vendas, os profissionais olham para o LTV, CAC e Margem de Contribuição."
             />
             <TruthCard 
               icon={<FileText size={20} />}
               title="Copywriting Fraco"
               text="Texto genérico e ChatGPT sem refino não convertem. Sem evocar dor visceral e desejo, seu CTR continuará no chão."
             />
             <TruthCard 
               icon={<Package size={20} />}
               title="Produtos sem Alma"
               text="Dropshipping de cacarecos acabou. O futuro é Brand Building e ativos reais que valem milhões no exit."
             />
             <TruthCard 
                icon={<Globe size={20} />}
                title="Visão Limitada"
                text="Vender em Reais é jogar no modo 'Hard' com recompensa baixa. O jogo real acontece em Dólar, Euro e Libra."
             />
          </div>

        </div>
      </div>
    </section>
  );
};

const TruthCard = ({ icon, title, text }: { icon: React.ReactNode, title: string, text: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-white/[0.03] border border-white/[0.05] p-8 rounded-3xl hover:bg-white/[0.06] hover:border-white/10 transition-all duration-500 group"
  >
    <div className="flex items-center gap-4 mb-4">
        <div className="p-2 bg-white/5 rounded-full text-electric group-hover:bg-electric group-hover:text-white transition-colors duration-300">
          {icon}
        </div>
        <h3 className="text-lg font-medium tracking-tight text-white">{title}</h3>
    </div>
    <p className="text-sm text-white leading-relaxed font-light">{text}</p>
  </motion.div>
);