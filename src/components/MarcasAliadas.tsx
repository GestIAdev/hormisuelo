// components/MarcasAliadas.tsx (NUEVO COMPONENTE)
import BrandCard from './BrandCard';

// Idealmente, estos datos vendrán de Sanity CMS
const marcas = [

  { name: 'MACCAFERRI', logo: '/maccaferri.webp', link: 'https://www.maccaferri.com' },
  { name: 'STACO', logo: '/armco2.png', link: 'https://www.stacoargentina.com' },
  { name: 'ferrocement®', logo: '/ferrocement_logo.jpeg', link: 'https://www.ferrocement.com.ar/' },
  // ... agregar todos los logos aquí
];

export default function MarcasAliadas() {
  return (
    // Contenedor principal que centra el contenido vertical y horizontalmente
    <div className="w-full min-h-full flex flex-col items-center justify-start p-3 sm:p-4 md:p-8 section-fade-in">
      {/* Panel de contenido con efecto vidrio para destacar sobre el fondo */}
      <div className="bg-black/60 backdrop-blur-md rounded-lg p-6 md:p-8 max-w-5xl w-full text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold section-title-glow mb-3 md:mb-4">
          El Respaldo de los Líderes de la Industria
        </h2>
        <div className="decorative-line mx-auto mb-3 md:mb-4"></div>
        <p className="text-sm sm:text-base md:text-lg text-gray-200 mb-8 md:mb-12 max-w-3xl mx-auto section-content">
          Somos los agentes técnicos comerciales exclusivos para Cuyo de las marcas más prestigiosas y fiables del sector de la construcción y la ingeniería.
        </p>
        
        {/* Grilla responsiva para las tarjetas de marcas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {marcas.map((marca) => (
            <BrandCard 
              key={marca.name}
              name={marca.name}
              logo={marca.logo}
              link={marca.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
}