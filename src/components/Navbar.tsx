import Logo from './Logo';

interface NavbarProps {
  activeView: string;
  setActiveView: (view: string) => void;
}

export default function Navbar({ activeView, setActiveView }: NavbarProps) {
  const navLinks = ['INICIO', 'SERVICIOS', 'MARCAS ALIADAS', 'PROYECTOS', 'CONTACTO'];

  return (
    <header className="w-full p-4 md:p-6 bg-black/30 backdrop-blur-sm z-30">
      <nav className="flex justify-between items-center">
        {/* Al hacer clic en el logo, volvemos a INICIO */}
        <div onClick={() => setActiveView('INICIO')} className="cursor-pointer">
          <Logo />
        </div>
        
        <div className="flex space-x-6 md:space-x-8">
          {navLinks.map((link) => (
            <button // Usamos <button> para mejor semántica en vez de <a>
              key={link} 
              // Al hacer clic, llamamos a la función setActiveView con el nombre del link
              onClick={() => setActiveView(link)} 
              className={`
                font-semibold text-sm uppercase tracking-wider bg-transparent border-0 nav-link-glow
                ${activeView === link 
                  ? 'text-hormi-yellow border-b-2 border-hormi-yellow' 
                  : 'text-white hover:text-hormi-yellow transition-colors'}
              `}
            >
              {link}
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
}