import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-paper border-t border-gray-200 py-16">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div>
          <div className="w-32 h-10 border border-black/10 rounded bg-black/5 flex items-center justify-center text-xs text-gray-500 tracking-widest uppercase">
            [LOGO AREA]
          </div>
          <p className="text-xs text-black font-mono mt-4">© 2024 PROTOCOLO AVANÇADO</p>
        </div>

        <div className="flex gap-8 text-sm font-bold text-black">
          {/* Added hover drop-shadow */}
          <a href="#" className="hover:text-electric hover:drop-shadow-[0_0_5px_rgba(0,82,255,1)] transition-colors">Termos</a>
          <a href="#" className="hover:text-electric hover:drop-shadow-[0_0_5px_rgba(0,82,255,1)] transition-colors">Privacidade</a>
          <a href="#" className="hover:text-electric hover:drop-shadow-[0_0_5px_rgba(0,82,255,1)] transition-colors">Twitter</a>
          <a href="#" className="hover:text-electric hover:drop-shadow-[0_0_5px_rgba(0,82,255,1)] transition-colors">Instagram</a>
        </div>
      </div>
    </footer>
  );
};