'use client'

import Logo from './Logo';
import { useState } from 'react';

interface NavbarProps {
  activeView: string;
  setActiveView: (view: string) => void;
}

export default function Navbar({ activeView, setActiveView }: NavbarProps) {
  const navLinks = ['INICIO', 'EMPRESAS PROVEEDORAS', 'PROYECTOS', 'CONTACTO'];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (link: string) => {
    setActiveView(link);
    setIsMenuOpen(false); // Cerrar el menú después de navegar
  };

  return (
    <header className="w-full p-2 md:p-6 bg-black/30 backdrop-blur-sm z-30 relative">
      <nav className="flex justify-between items-center gap-2 md:gap-4">
        {/* Al hacer clic en el logo, volvemos a INICIO */}
        <div onClick={() => handleNavClick('INICIO')} className="cursor-pointer flex-shrink-0">
          <div className="scale-100 sm:scale-100 md:scale-100 origin-left">
            <Logo />
          </div>
        </div>
        
        {/* Menú desktop - Solo visible en lg y mayores */}
        <div className="hidden lg:flex space-x-4 lg:space-x-6">
          {navLinks.map((link) => (
            <button
              key={link} 
              onClick={() => setActiveView(link)} 
              className={`
                font-semibold text-xs lg:text-sm uppercase tracking-wider bg-transparent border-0 nav-link-glow
                ${activeView === link 
                  ? 'text-hormi-yellow border-b-2 border-hormi-yellow' 
                  : 'text-white hover:text-hormi-yellow transition-colors'}
              `}
            >
              {link}
            </button>
          ))}
        </div>

        {/* Botón Hamburguesa para móviles y tablets (posicionado a la derecha del header) */}
        <div className="lg:hidden absolute right-3 top-1/2 -translate-y-1/2 z-50">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex flex-col items-center justify-center gap-[4px] p-1.5 bg-black/40 hover:bg-black/60 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-hormi-yellow"
            aria-label="Toggle menu"
          >
            {/* Stacked compact bars */}
            <span className={`block w-4 h-[2px] bg-white transition-all duration-250 ${isMenuOpen ? 'translate-y-[6px] rotate-45' : ''}`}></span>
            <span className={`block w-4 h-[2px] bg-white transition-all duration-250 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-4 h-[2px] bg-white transition-all duration-250 ${isMenuOpen ? 'translate-y-[-6px] -rotate-45' : ''}`}></span>
          </button>
        </div>
      </nav>

      {/* Menú desplegable para móviles (Modal) */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md border-b border-white/10 lg:hidden z-40">
          <div className="flex flex-col p-3 gap-1">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => handleNavClick(link)}
                className={`
                  font-semibold text-xs uppercase tracking-wider px-3 py-2 rounded-lg transition-all text-left
                  ${activeView === link 
                    ? 'bg-hormi-yellow/20 text-hormi-yellow border border-hormi-yellow' 
                    : 'text-white hover:bg-white/10 border border-transparent'}
                `}
              >
                {link}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}