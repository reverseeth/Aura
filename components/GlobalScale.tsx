import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, DollarSign, Globe2 } from 'lucide-react';

export const GlobalScale: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-paper text-black relative">
      {/* Background Grid Accent */}
      <div className="absolute inset-0 bg-[size:40px_40px] bg-grid-pattern-light opacity-50 mask-gradient-b"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center mb-6"
          >
             <span className="inline-block px-3 py-1 rounded-full bg-electric/5 text-electric text-[10px] font-semibold tracking-[0.2em] uppercase border border-electric/10 shadow-[0_0_15px_rgba(0,82,255,0.2)]">
               ESTRUTURA DE ALTO NÍVEL
             </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-light mb-8 tracking-tighter text-black leading-[1.1] max-w-5xl mx-auto"
          >
            A <span className="serif-italic">precisão dos números</span> contra a incerteza do mercado.
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-gray-500 font-light max-w-2xl mx-auto leading-relaxed tracking-tight"
          >
            Métricas reais de operações de alta performance. O e-commerce global não é uma aposta, é uma infraestrutura de arbitragem de valor.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ScaleCard 
            id="M-01"
            icon={<TrendingUp size={24} />}
            label="Markup Estratégico"
            value="532%"
            desc="Margens blindadas através de valor percebido. Em mercados de moeda forte, o markup agressivo permite lucros líquidos que absorvem qualquer variação de custo de aquisição."
          />
          <ScaleCard 
            id="M-02"
            icon={<DollarSign size={24} />}
            label="Eficiência de Escala"
            value="4.2x"
            desc="Eficiência matemática de retenção. Públicos qualificados com alto LTV permitem uma escala vertical onde o lucro é maximizado pela recorrência e ticket médio elevado."
          />
          <ScaleCard 
            id="M-03"
            icon={<Globe2 size={24} />}
            label="Liquidez Global"
            value="+340M"
            desc="Acesso imediato a mercados de alta liquidez. Uma base de consumidores prontos para transacionar, eliminando o teto de faturamento imposto por economias limitadas."
          />
        </div>
      </div>
    </section>
  );
};

const ScaleCard = ({ id, icon, label, value, desc }: { id: string, icon: React.ReactNode, label: string, value: string, desc: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -5 }}
    className="bg-white p-10 rounded-[2.5rem] shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] transition-all duration-500 border border-gray-100 group flex flex-col h-full"
  >
    <div className="flex justify-between items-start mb-10">
      <div className="p-4 bg-gray-50 text-black rounded-full group-hover:bg-electric group-hover:text-white transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(0,82,255,0.6)]">
        {icon}
      </div>
      <span className="font-mono text-[10px] text-gray-400 font-bold tracking-widest bg-gray-50 px-3 py-1 rounded-full border border-gray-100">
        {id}
      </span>
    </div>
    
    <div className="mb-8">
      <h3 className="text-[10px] font-bold text-electric uppercase tracking-[0.2em] mb-3">
        {label}
      </h3>
      <span className="text-6xl md:text-7xl font-extralight tracking-tighter text-black block">
        {value}
      </span>
    </div>

    <p className="text-sm text-gray-500 font-light leading-relaxed tracking-tight border-t border-gray-100 pt-8 mt-auto">
      {desc}
    </p>
  </motion.div>
);
