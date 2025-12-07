import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-paper border-t border-gray-200 py-16">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div>
          <img
  src="https://raw.githubusercontent.com/reverseeth/Aura/refs/heads/main/aura.svg"
  alt="Logo"
  className="w-32 h-10 object-contain"
/>
          <p className="text-xs text-black font-mono mt-4">© 2026 PROTOCOLO AVANÇADO</p>
        </div>

        <div className="flex gap-8 text-sm font-bold text-black">
          {/* Added hover drop-shadow */}
          <a href="#" className="hover:text-electric hover:drop-shadow-[0_0_5px_rgba(0,82,255,1)] transition-colors">Twitter</a>
          <a href="https://www.instagram.com/gu.eth" className="hover:text-electric hover:drop-shadow-[0_0_5px_rgba(0,82,255,1)] transition-colors">Instagram</a>
        </div>
      </div>
    </footer>
  );
};
