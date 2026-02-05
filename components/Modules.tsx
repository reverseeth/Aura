import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, ArrowUpRight, X, CheckCircle2 } from 'lucide-react';
import { ModuleItem } from '../types';

const modulesData: ModuleItem[] = [
  {
    number: "01",
    title: "Fundamentos Operacionais",
    description: "A base de toda operação de 8 dígitos.",
    details: ["Brand building vs. dropshipping", "Criando sua LLC nos EUA", "Framework de feedback loops", "Roadmap de execução: 48h, 7 dias, 30 dias"]
  },
  {
    number: "02",
    title: "Inteligência de Mercado",
    description: "Mapeando onde o dinheiro realmente está.",
    details: ["Market Desires: o que move a compra", "Market Sophistication", "Product Research avançado", "Usando Kalodata na prática"]
  },
  {
    number: "03",
    title: "Posicionamento Estratégico",
    description: "A batalha pela mente do consumidor.",
    details: ["Positioning framework", "Product/Market Awareness levels", "Competitor Research: extraindo claims", "Psychographic Research"]
  },
  {
    number: "04",
    title: "Unique Mechanisms",
    description: "O diferencial que torna a concorrência irrelevante.",
    details: ["O que são Unique Mechanisms", "Ideação de UM com Claude", "Avaliação e validação de UMs", "Expansão de diferenciais"]
  },
  {
    number: "05",
    title: "Arquitetura de Avatar",
    description: "Construindo o cliente ideal em 3 camadas.",
    details: ["Entendendo seu produto profundamente", "Desire Dominante", "Core Avatars vs Sub Avatars", "New Identities na comunicação"]
  },
  {
    number: "06",
    title: "Fundamentos de Copywriting",
    description: "Palavras que imprimem dinheiro.",
    details: ["Headlines que vendem (Fórmulas)", "Lead types: as 12 formas de começar", "Bullets e fascinations irresistíveis", "Claude para copywriting: prompts elite"]
  },
  {
    number: "07",
    title: "Estratégia Criativa",
    description: "Anúncios que dominam o leilão.",
    details: ["Anatomia de anúncios vencedores", "Os 3 métodos de teste", "Roteiros para video ads e hooks", "Breakdowns de winning static ads"]
  },
  {
    number: "08",
    title: "Assets no Facebook",
    description: "Estrutura anti-ban de guerra.",
    details: ["Setup de assets anti-ban", "Aquecimento de Perfil e Página", "Verificação de BM Elite", "Setup de Pixel/Dataset perfeito"]
  },
  {
    number: "09",
    title: "Media Buying",
    description: "A ciência da escala vertical e horizontal.",
    details: ["Estratégia completa de teste", "Como definir ROAS targets", "Escala Horizontal e Vertical", "Minimum daily spend framework"]
  },
  {
    number: "10",
    title: "Dados e Atribuição",
    description: "O fim do 'eu acho'. Decisões baseadas em números.",
    details: ["Setup de tracking: pixel, server-side", "Wetracked & TripleWhale", "Dashboard operacional", "Métricas críticas de escala"]
  },
  {
    number: "11",
    title: "Sistemas de Aprendizado",
    description: "Transformando perdas em lucro futuro.",
    details: ["Como revisar ads perdedores", "Framework de 12 perguntas", "Extraindo ideias de ads vencedores", "Aplicação de learnings contínuos"]
  },
  {
    number: "12",
    title: "Engenharia de Oferta",
    description: "Ofertas que multiplicam o LTV.",
    details: ["Psicologia de precificação", "Anchoring e decoy pricing", "Tipos de ofertas que convertem", "Cases de ofertas exponenciais"]
  },
  {
    number: "13",
    title: "Infraestrutura de Conversão",
    description: "Páginas que não apenas informam, mas vendem.",
    details: ["Advertorials: propósito e aplicação", "PDPs vencedoras (Breakdowns)", "Usando IA para criar PDPs", "Checkout optimization"]
  },
  {
    number: "14",
    title: "Maximização de AOV",
    description: "Extraindo cada centavo do tráfego.",
    details: ["Psicologia de Upsells", "Economia de funil", "Setup de Upsells com Claude", "Walkthroughs de funis vencedores"]
  },
  {
    number: "15",
    title: "Retenção e Email Marketing",
    description: "Onde o lucro real é construído.",
    details: ["Abandon Carts & Welcome Series", "Reorder & Winback flows", "Setup de Claude para Emails", "Promotional Sequences"]
  },
  {
    number: "16",
    title: "Operações e Escala",
    description: "A máquina por trás do faturamento.",
    details: ["Supply chain internacional", "Negociação avançada com fornecedores", "Gerenciando 3PL", "Estrutura de time e P&L"]
  },
  {
    number: "17",
    title: "Brand Equity e Crescimento",
    description: "O exit de milhões de dólares.",
    details: ["Construindo brand assets", "Content strategy além de paid ads", "Community building", "Exit Strategy: preparando a venda"]
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05
    }
  }
};

const itemAnim = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export const Modules: React.FC = () => {
  const [selectedModule, setSelectedModule] = useState<ModuleItem | null>(null);

  return (
    <section id="curriculum" className="py-32 bg-obsidian text-white relative z-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8 border-b border-white/10 pb-10">
          <div>
            <div className="flex items-center gap-3 mb-6">
               <div className="w-8 h-[1px] bg-electric shadow-[0_0_10px_#0052ff]"></div>
               <span className="text-white font-medium tracking-[0.2em] text-[10px] uppercase">
                 O ARSENAL COMPLETO
               </span>
            </div>
            <h3 className="text-5xl md:text-7xl font-light tracking-tighter text-white leading-[1.05]">
              Currículo <br /><span className="serif-italic text-white text-[1.0em]">Operacional.</span>
            </h3>
          </div>
          <p className="text-white max-w-sm text-sm leading-relaxed font-light tracking-tight">
            Metodologia proprietária desenvolvida após milhões em ad spend e testes exaustivos em múltiplos mercados internacionais.
          </p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {modulesData.map((item, index) => (
            <ModuleCard 
              key={index} 
              data={item} 
              onClick={() => setSelectedModule(item)}
            />
          ))}
        </motion.div>
        
        <div className="mt-16 py-6 text-center">
             <p className="text-white text-sm font-light tracking-tight bg-white/5 inline-block px-6 py-3 rounded-full border border-white/10 backdrop-blur-sm">
                 + Módulos Bônus sobre <span className="text-white font-medium">Inteligência Artificial</span>
             </p>
        </div>
      </div>

      <AnimatePresence>
        {selectedModule && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedModule(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed inset-0 m-auto z-50 w-[90%] max-w-lg h-fit max-h-[80vh] bg-[#111] border border-white/10 rounded-3xl p-8 shadow-2xl overflow-y-auto"
            >
              <button 
                onClick={() => setSelectedModule(null)}
                className="absolute top-6 right-6 text-white hover:text-white transition-colors"
              >
                <X size={24} />
              </button>

              <div className="mb-8">
                <span className="text-white font-mono text-xs tracking-widest mb-2 block">
                  MOD_{selectedModule.number}
                </span>
                <h3 className="text-3xl font-light text-white mb-2">{selectedModule.title}</h3>
                <p className="text-white font-light">{selectedModule.description}</p>
              </div>

              <div className="space-y-4">
                {selectedModule.details.map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                    <CheckCircle2 size={18} className="text-electric mt-0.5 shrink-0 drop-shadow-[0_0_8px_rgba(0,82,255,0.8)]" />
                    <span className="text-sm text-white font-light">{detail}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 text-center">
                 <button 
                   onClick={() => {
                     setSelectedModule(null);
                     document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' });
                   }}
                   className="w-full py-4 rounded-full bg-white text-black font-bold text-sm uppercase tracking-widest hover:bg-gray-200 transition-colors"
                 >
                   Desbloquear Acesso
                 </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </section>
  );
};

interface ModuleCardProps {
  data: ModuleItem;
  onClick: () => void;
}

const ModuleCard: React.FC<ModuleCardProps> = ({ data, onClick }) => (
  <motion.div 
    variants={itemAnim}
    onClick={onClick}
    whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.08)" }}
    className="group relative flex items-center justify-between p-8 rounded-2xl bg-white/5 border border-white/10 transition-all duration-300 cursor-pointer"
  >
    <div className="flex flex-col gap-2">
      <span className="font-mono text-[10px] text-white group-hover:text-white transition-colors tracking-widest">
        {data.number}
      </span>
      <h4 className="text-lg font-light tracking-tight text-white group-hover:text-white/90">
        {data.title}
      </h4>
    </div>
    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white group-hover:bg-electric group-hover:text-white transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(0,82,255,0.6)]">
        <ArrowUpRight size={14} />
    </div>
  </motion.div>
);
