import React from 'react';
import { motion } from 'framer-motion';

export const SocialProof: React.FC = () => {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6">
            <div className="text-center mb-20">
                <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex justify-center mb-6"
                >
                   <span className="inline-block px-3 py-1 rounded-full bg-electric/5 text-electric text-[10px] font-semibold tracking-[0.2em] uppercase border border-electric/10 shadow-[0_0_15px_rgba(0,82,255,0.2)]">
                     A ELITE
                   </span>
                </motion.div>
                <h3 className="text-5xl md:text-7xl font-light tracking-tighter text-black">
                    Resultados que <br/> <span className="serif-italic text-[1.0em]">falam por si.</span>
                </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <StatCard 
                    val="$7.2M" 
                    label="Faturamento dos Membros (2025)"
                    sub="Receita gerada em operações internacionais."
                />
                <StatCard 
                    val="42" 
                    label="Países Ativos"
                    sub="Vendas ocorrendo ativamente em todos os continentes."
                />
                <StatCard 
                    val="85%" 
                    label="Taxa de Sucesso"
                    sub="Alunos que atingiram $100k/mês nos primeiros 90 dias."
                />
            </div>
        </div>
    </section>
  );
};

const StatCard = ({ val, label, sub }: { val: string, label: string, sub: string }) => (
    <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 text-center">
        <h4 className="text-6xl md:text-7xl font-light text-black tracking-tighter mb-4">{val}</h4>
        <p className="text-sm font-bold uppercase tracking-widest text-black mb-2">{label}</p>
        <p className="text-sm text-black font-light">{sub}</p>
    </div>
);
