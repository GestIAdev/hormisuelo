export default function Hero() {
  return (
    <div className="w-full h-full grid grid-cols-1 md:grid-cols-[40%_60%] section-fade-in">

      {/* PANEL IZQUIERDO: Una "ventana" transparente al video de fondo. */}
      <div className="hidden md:block bg-transparent">
        {/* Este div está vacío. Su única misión es ocupar el 40% del espacio
            y ser transparente para mostrar el video que está en la capa inferior. */}
      </div>

      {/* PANEL DERECHO: El "muro" con el manifiesto y fondo sólido. */}
      <div className="flex flex-col justify-center p-4 md:p-16 text-center hero-panel-dynamic h-full relative clip-path-diagonal">
        {/* Marca de agua del logo centrada con blur */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-[-1]">
          <img src="/logogrande.png" alt="Hormi Suelo Logo Watermark" className="opacity-10 max-w-xs md:max-w-2xl" width="800" height="800" />
        </div>
        <div className="relative z-10"> 
         
          <p className="hero-description text-base md:text-xl lg:text-2xl">
            Una empresa con más de 50 años en el mercado de Cuyo, dedicada a la comercialización de productos de la construcción para bodegas, estaciones de servicio y otros tipos de industria. Nuestro pilar fundamental está en el asesoramiento técnico los 365 días del año de 8am a 20pm.
            <br />
            <br />
            Los productos tienen materia prima con alta calidad internacional.
     
 
          </p>
          <button className="btn-professional text-xs md:text-sm md:px-6 md:py-2 px-4 py-1">
            Descubra Nuestras Soluciones
          </button>
        </div>
      </div>

    </div>
  );
}