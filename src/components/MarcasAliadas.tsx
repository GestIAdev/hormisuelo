// components/MarcasAliadas.tsx (NUEVO COMPONENTE)
import BrandCard from './BrandCard';

// Idealmente, estos datos vendrán de Sanity CMS
const marcas = [
  { name: 'ARMCO', logo: '/armco.svg', link: 'https://www.armco.com' },
  { name: 'MACCAFERRI', logo: '/marcasliadas.jpg', link: 'https://www.maccaferri.com' },
  { name: 'STACO', logo: '/armcostaco.jpeg', link: 'https://www.staco.com' },
  { name: 'SIMPSON Strong-Tie', logo: '/logo.png', link: 'https://www.strongtie.com' },
  { name: 'ferrocement®', logo: '/ferrocement_logo.jpeg', link: 'https://www.ferrocement.com' },
  // ... agregar todos los logos aquí
];

export default function MarcasAliadas() {
  return (
    // Contenedor principal que centra el contenido vertical y horizontalmente
    <div className="w-full h-full flex items-center justify-center p-4 section-fade-in">
      {/* Panel de contenido con efecto vidrio para destacar sobre el fondo */}
      <div className="bg-black/60 backdrop-blur-md rounded-lg p-8 max-w-5xl w-full text-center">
        <h2 className="text-4xl lg:text-5xl font-extrabold section-title-glow mb-4">
          El Respaldo de los Líderes de la Industria
        </h2>
        <div className="decorative-line mx-auto mb-4"></div>
        <p className="text-lg text-gray-200 mb-12 max-w-3xl mx-auto section-content">
          Somos los agentes técnicos comerciales exclusivos para Cuyo de las marcas más prestigiosas y fiables del sector de la construcción y la ingeniería.
        </p>
        
        {/* Grilla responsiva para las tarjetas de marcas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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