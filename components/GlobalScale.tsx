import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Users, Globe2 } from 'lucide-react';

export const GlobalScale: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-paper text-black relative">
      <div className="absolute inset-0 bg-[size:40px_40px] bg-grid-pattern-light opacity-50 mask-gradient-b"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center mb-6"
          >
             {/* Added shadow */}
             <span className="inline-block px-3 py-1 rounded-full bg-electric/5 text-electric text-[10px] font-semibold tracking-[0.2em] uppercase border border-electric/10 shadow-[0_0_15px_rgba(0,82,255,0.2)]">
               Nova Fronteira
             </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-light mb-8 tracking-tighter text-black leading-[1.1]"
          >
            Seu quintal é <br />
            <span className="serif-italic text-black text-[1.0em]">muito pequeno.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-black font-light max-w-2xl mx-auto leading-relaxed tracking-tight"
          >
            Pare de lutar por migalhas em mercados saturados. 
            O verdadeiro dinheiro está em vender para quem gasta em Dólar, Euro e Libra.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ScaleCard 
            icon={<DollarSign size={24} />}
            label="Moeda Forte"
            value="5x"
            desc="Multiplique seu lucro líquido apenas trocando a moeda da transação. Venda o mesmo produto, lucre 5x mais."
          />
          <ScaleCard 
            icon={<Globe2 size={24} />}
            label="Alcance Total"
            value="195"
            desc="Países ao seu alcance. Com a estrutura certa de logística e gateways, o mundo inteiro é seu cliente."
          />
          <ScaleCard 
            icon={<Users size={24} />}
            label="Mercado"
            value="8 Bi"
            desc="Por que vender para 200 milhões se você pode vender para o mundo inteiro? A escala global é infinita."
          />
        </div>
      </div>
    </section>
  );
};

const ScaleCard = ({ icon, label, value, desc }: { icon: React.ReactNode, label: string, value: string, desc: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -5 }}
    className="bg-white p-8 md:p-10 rounded-[2rem] shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] transition-all duration-500 border border-gray-100 group"
  >
    <div className="flex justify-between items-start mb-10">
      {/* Added neon shadow on hover */}
      <div className="p-3 bg-gray-50 text-black rounded-full group-hover:bg-electric group-hover:text-white transition-colors duration-300 group-hover:shadow-[0_0_20px_rgba(0,82,255,0.6)]">{icon}</div>
      <span className="text-5xl md:text-6xl font-light tracking-tighter text-black">{value}</span>
    </div>
    <h3 className="text-lg font-medium mb-3 text-black tracking-tight">{label}</h3>
    <p className="text-sm text-black leading-relaxed font-light tracking-tight">{desc}</p>
  </motion.div>
);