import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, FileText, Package, Globe, ArrowRight } from 'lucide-react';

export const BrutalTruth: React.FC = () => {
  return (
    // Adjusted padding to py-10 for a balanced "normal" look on mobile, removing the "giant" feel but keeping it breathing.
    <section id="truth" className="py-10 md:py-32 bg-obsidian text-white relative overflow-hidden rounded-[2.5rem] mx-2 md:mx-4 -mt-8 z-20 shadow-2xl shadow-black">
      
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-electric/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            // Changed to only be sticky on large screens to prevent vertical gaps on mobile
            className="relative lg:sticky lg:top-32"
          >
            <div className="flex items-center gap-3 mb-8">
              {/* Added neon shadow */}
              <div className="w-8 h-[1px] bg-electric shadow-[0_0_10px_#0052ff]"></div>
              <span className="text-white font-mono text-[10px] tracking-[0.2em] uppercase">Realidade de Mercado</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-light mb-10 leading-[1.05] tracking-tighter text-white">
              A maioria <br />
              vai <span className="serif-italic text-white text-[1.0em]">falhar.</span>
            </h2>
            
            <div className="space-y-8 text-white text-lg leading-relaxed font-light">
              <p className="text-white">
                Todo "conteúdo avançado" que você consumiu até agora tem o mesmo problema: ele te diz <span className="font-bold text-white">O QUE</span> fazer… mas nunca te mostra <span className="font-bold text-white">COMO</span> pensar.
              </p>
              
              <div className="border-l-2 border-electric pl-6 py-2 my-6">
                <p className="text-xl md:text-2xl text-white font-light leading-tight">
                  "Amadores caçam 'produtos vencedores'. A Elite constrói <span className="serif-italic drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]">ecossistemas</span> de marca DTC que tornam a venda <span className="serif-italic drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]">inevitável.</span>"
                </p>
              </div>

              <div>
                <p className="mb-4 text-white text-sm uppercase tracking-widest font-light">E a visão de curto prazo é o motivo pelo qual você:</p>
                {/* Added padding-left for better hierarchy and alignment */}
                <ul className="space-y-3 pl-4">
                  <ListItem text="Erra o alvo antes mesmo de puxar o gatilho." />
                  <ListItem text="Ignora os princípios que realmente movem o dinheiro." />
                  <ListItem text="Procura 'o anúncio que funciona' sem entender a consciência do avatar." />
                  <ListItem text="Continua tentando escalar sem saber o que causa suas conversões." />
                  <ListItem text="Nunca construiu um mecanismo que te diferencie da multidão." />
                </ul>
              </div>
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

const ListItem = ({ text }: { text: string }) => (
  <li className="flex items-start gap-3 text-white text-base font-light">
    {/* Adjusted margin-top to mt-2.5 for better optical alignment with text-base */}
    <div className="mt-2.5 w-1.5 h-1.5 rounded-full bg-electric shrink-0 shadow-[0_0_8px_#0052ff]" />
    <span>{text}</span>
  </li>
);

const TruthCard = ({ icon, title, text }: { icon: React.ReactNode, title: string, text: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-white/[0.03] border border-white/[0.1] p-8 rounded-3xl hover:bg-white/[0.06] hover:border-white/20 transition-all duration-500 group"
  >
    <div className="flex items-center gap-4 mb-4">
        {/* Added neon shadow on hover */}
        <div className="p-2 bg-white/10 rounded-full text-electric group-hover:bg-electric group-hover:text-white transition-colors duration-300 group-hover:shadow-[0_0_20px_rgba(0,82,255,0.6)]">
          {icon}
        </div>
        <h3 className="text-lg font-bold tracking-tight text-white">{title}</h3>
    </div>
    <p className="text-sm text-white leading-relaxed font-light">{text}</p>
  </motion.div>
);
