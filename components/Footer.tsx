import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-paper border-t border-gray-200 py-16">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div>
          <h4 className="font-extrabold text-xl tracking-tighter text-black">ECOM GLOBAL</h4>
          <p className="text-xs text-black font-mono mt-2">© 2024 PROTOCOLO AVANÇADO</p>
        </div>

        <div className="flex gap-8 text-sm font-bold text-black">
          <a href="#" className="hover:text-electric transition-colors">Termos</a>
          <a href="#" className="hover:text-electric transition-colors">Privacidade</a>
          <a href="#" className="hover:text-electric transition-colors">Twitter</a>
          <a href="#" className="hover:text-electric transition-colors">Instagram</a>
        </div>
      </div>
    </footer>
  );
};