export default function Hero() {
  return (
    <div className="w-full h-full grid grid-cols-1 md:grid-cols-[40%_60%] section-fade-in">

      {/* PANEL IZQUIERDO: Una "ventana" transparente al video de fondo. */}
      <div className="hidden md:block bg-transparent">
        {/* Este div está vacío. Su única misión es ocupar el 40% del espacio
            y ser transparente para mostrar el video que está en la capa inferior. */}
      </div>

      {/* PANEL DERECHO: El "muro" con el manifiesto y fondo sólido. */}
      <div className="flex flex-col justify-center p-8 md:p-16 text-center hero-panel-dynamic h-full relative clip-path-diagonal">
        {/* Marca de agua del logo centrada con blur */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-[-1]">
          <img src="/logogrande.png" alt="Hormi Suelo Logo Watermark" className="opacity-10" width="800" height="800" />
        </div>
        <div className="relative z-10"> 
          <h2 className="hero-title-glow">
            54 Años Cimentando Confianza en Cuyo.
          </h2>
          <p className="hero-description">
            Desde 1985, Hormi Suelo ha sido el pilar técnico en la recuperación estructural y geotecnia de la región. Somos los agentes de las marcas líderes, comprometidos con la excelencia, la seguridad y la preservación de nuestra tierra.
          </p>
          <button className="btn-professional">
            Descubra Nuestras Soluciones
          </button>
        </div>
      </div>

    </div>
  );
}