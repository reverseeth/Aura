import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, ArrowUpRight, X, CheckCircle2 } from 'lucide-react';
import { ModuleItem } from '../types';

const modulesData: ModuleItem[] = [
  {
    number: "01",
    title: "Fundamentos & Mindset",
    description: "Reprogramando o cérebro para operação global.",
    details: ["O Novo Jogo do Ecom", "Mentalidade de 8 Dígitos", "Preparação Financeira", "Rotina de Alta Performance"]
  },
  {
    number: "02",
    title: "Offshore LLC & Fiscal",
    description: "Estrutura legal nos EUA e UK.",
    details: ["Abertura de LLC em Wyoming", "EIN e Contas Bancárias (Mercury/Brex)", "Stripe Atlas vs Standard", "Compliance Fiscal"]
  },
  {
    number: "03",
    title: "Infraestrutura & Loja",
    description: "Setup de loja de alta conversão.",
    details: ["Shopify Plus Setup", "Otimização de Velocidade (90+)", "Apps Essenciais (Stack Secreto)", "Checkout Personalizado"]
  },
  {
    number: "04",
    title: "Pesquisa & Produto",
    description: "Minerando produtos vencedores.",
    details: ["Espionagem de Ads Avançada", "Validação de Demanda", "Negociação com Fornecedores", "Logística Global"]
  },
  {
    number: "05",
    title: "Engenharia de Avatar",
    description: "Entendendo o cliente profundamente.",
    details: ["Mapa de Empatia", "Dores e Desejos Viscerais", "Segmentação Psicográfica", "Criação de Personas"]
  },
  {
    number: "06",
    title: "Ofertas & AOV",
    description: "Maximizando o valor por pedido.",
    details: ["Bundles Irresistíveis", "Upsell, Downsell e Cross-sell", "Order Bumps", "Estratégia de Preço"]
  },
  {
    number: "07",
    title: "Copywriting Persuasivo",
    description: "Palavras que vendem milhões.",
    details: ["Headlines Hipnóticas", "Estrutura de VSL", "Páginas de Vendas (Landing Pages)", "Email Marketing Sequences"]
  },
  {
    number: "08",
    title: "Criativos & UGC",
    description: "Anúncios que param o scroll.",
    details: ["Roteiros para UGC", "Edição Dinâmica (CapCut/Premiere)", "Hooks Virais", "Image Ads com IA"]
  },
  {
    number: "09",
    title: "Meta Ads & Escala",
    description: "Domínio total do tráfego pago.",
    details: ["Estrutura de Campanha CBO/ABO", "Teste de Criativos", "Escala Horizontal e Vertical", "Retargeting Inteligente"]
  },
  {
    number: "10",
    title: "Data Science & KPIs",
    description: "Decisões baseadas em dados.",
    details: ["Google Analytics 4", "Cohorts & LTV", "Atribuição (TripleWhale)", "Dashboard Financeiro"]
  },
  {
    number: "11",
    title: "Ops & Compliance",
    description: "Operação à prova de falhas.",
    details: ["Gestão de Chargebacks", "Atendimento ao Cliente (Zendesk)", "Automação de Processos", "Prevenção de Fraudes"]
  },
  {
    number: "12",
    title: "Domínio & Consolidação",
    description: "De loja para marca global.",
    details: ["Branding de Longo Prazo", "Expansão de Canais (Google/TikTok)", "Influencer Marketing", "Exit Strategy"]
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
               {/* Added neon shadow */}
               <div className="w-8 h-[1px] bg-electric shadow-[0_0_10px_#0052ff]"></div>
               <span className="text-white font-medium tracking-[0.2em] text-[10px] uppercase">
                 O Arsenal Completo
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
                 + Módulos Bônus sobre <span className="text-white font-medium">Inteligência Artificial Generativa</span>
             </p>
        </div>
      </div>

      {/* MODAL */}
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
                    {/* Added neon drop-shadow */}
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
    {/* Added neon shadow on hover */}
    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white group-hover:bg-electric group-hover:text-white transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(0,82,255,0.6)]">
        <ArrowUpRight size={14} />
    </div>
  </motion.div>
);