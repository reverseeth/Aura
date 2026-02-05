import React from 'react';
import { motion } from 'framer-motion';
import { Store, Infinity, ShieldX, Crosshair } from 'lucide-react';

export const BrutalTruth: React.FC = () => {
  return (
    <section id="truth" className="py-10 md:py-32 bg-obsidian text-white relative overflow-hidden rounded-[2.5rem] mx-2 md:mx-4 -mt-8 z-20 shadow-2xl shadow-black">
      
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-electric/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative lg:sticky lg:top-32"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-[1px] bg-electric shadow-[0_0_10px_#0052ff]"></div>
              <span className="text-white font-mono text-[10px] tracking-[0.2em] uppercase">DIAGNÓSTICO</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-light mb-10 leading-[1.05] tracking-tighter text-white">
              Você executa bem. <br />
              Mas não sabe <span className="serif-italic text-white text-[1.0em]">por quê funciona.</span>
            </h2>
            
            <div className="space-y-8 text-white text-lg leading-relaxed font-light">
              <p className="text-white">
                Todo conteúdo que você consumiu te ensinou <span className="font-bold text-white">O QUE</span> fazer. Nenhum te ensinou <span className="font-bold text-white">COMO</span> pensar. Por isso você depende de criativo viral, produto "validado" e sorte.
              </p>
              
              <div className="border-l-[1px] border-white pl-6 py-2 my-6">
                <p className="text-xl md:text-2xl text-white font-light leading-tight">
              "A diferença entre 200 criativos e 5 é saber o que faz seu avatar <span className='serif-italic'>sacar o cartão.</span>"                </p>
              </div>

              <div>
                <p className="mb-4 text-white text-sm uppercase tracking-widest font-light">E a visão de curto prazo é o motivo pelo qual você:</p>
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

          <div className="grid grid-cols-1 gap-6 pt-0 lg:pt-0">
             <TruthCard 
               icon={<Store size={20} />}
               title="Múltiplas Lojas"
               text='A "estratégia" de quem sabe que nenhuma delas vai durar.'
             />
             <TruthCard 
               icon={<Infinity size={20} />}
               title="Teste Infinito"
               text="10 produtos por semana, 200 criativos, nenhum entendimento real do que funcionou ou por quê."
             />
             <TruthCard 
               icon={<ShieldX size={20} />}
               title="Operação Descartável"
               text="Um bloqueio de distância de perder tudo."
             />
             <TruthCard 
                icon={<Crosshair size={20} />}
                title="Fundamento Zero"
                text="Avatar raso, sem mecanismo, sem leitura de mercado."
             />
          </div>

        </div>
      </div>
    </section>
  );
};

const ListItem = ({ text }: { text: string }) => (
  <li className="flex items-start gap-3 text-white text-base font-light">
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
        <div className="p-2 bg-white/10 rounded-full text-electric group-hover:bg-electric group-hover:text-white transition-colors duration-300 group-hover:shadow-[0_0_20px_rgba(0,82,255,0.6)]">
          {icon}
        </div>
        <h3 className="text-lg font-bold tracking-tight text-white">{title}</h3>
    </div>
    <p className="text-sm text-white leading-relaxed font-light">{text}</p>
  </motion.div>
);
