import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';

const faqs = [
    {
        q: "Preciso saber inglês fluente?",
        a: "Não. Ensinamos como usar ferramentas de tradução e IA para operar em qualquer idioma sem precisar falar uma palavra."
    },
    {
        q: "Quanto preciso para investir?",
        a: "Recomendamos um capital de giro inicial de pelo menos $500 a $1000 USD para testes de tráfego e estrutura."
    },
    {
        q: "Serve para iniciantes?",
        a: "Sim, mas a curva de aprendizado é íngreme. O conteúdo vai do zero absoluto até estratégias de escala de 7 dígitos."
    },
    {
        q: "Tenho suporte?",
        a: "Sim, acesso direto à comunidade Elite e calls quinzenais de Q&A."
    }
];

export const FAQ: React.FC = () => {
    return (
        <section className="py-32 bg-obsidian text-white border-t border-white/5">
            <div className="container mx-auto px-6 max-w-3xl">
                <h3 className="text-3xl font-light mb-12 text-center">Dúvidas Frequentes</h3>
                
                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <FAQItem key={i} q={faq.q} a={faq.a} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const FAQItem = ({ q, a }: { q: string, a: string }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-white/10 rounded-2xl overflow-hidden bg-white/5">
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
            >
                <span className="font-medium text-lg tracking-tight">{q}</span>
                {/* Changed to text-white as requested */}
                <Plus size={20} className={`text-white transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`} />
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                    >
                        <div className="p-6 pt-0 text-white font-light leading-relaxed">
                            {a}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};