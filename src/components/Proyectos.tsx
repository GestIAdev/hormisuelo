// components/Proyectos.tsx
import ProjectCard from './ProjectCard';

// Datos de ejemplo para proyectos (idealmente vendrán de Sanity CMS)
const proyectos = [
  {
    title: 'Túnel circular Liner Staco',
    image: '/tunel1.jpeg',
    
  },
  {
    title: 'Perilago Potrerillos',
    image: '/dique1.jpeg',
  },
  {
    title: 'Macko',
    image: '/macko.jpeg',
    
  },
  {
    title: 'Macko',
    image: '/macko2.jpeg',
    
  },
  {
    title: 'Bodega Grupo Peñaflor',
    image: '/hormigon1.jpeg',
  },
  {
    title: 'Bodega Grupo Peñaflor',
    image: '/pista1.jpeg',
  },
];

export default function Proyectos() {
  return (
    <div className="w-full min-h-full flex flex-col items-center justify-start p-3 sm:p-4 md:p-8 section-fade-in">
      <div className="text-center mb-6 md:mb-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold section-title-glow">
          Nuestros Proyectos
        </h2>
        <div className="decorative-line mx-auto mb-3 md:mb-4"></div>
        <p className="text-sm sm:text-base md:text-lg text-gray-200 mt-2 section-content">
          Soluciones innovadoras aplicadas en proyectos desafiantes de ingeniería civil.
        </p>
      </div>

      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 auto-rows-fr items-stretch">
        {proyectos.map((proyecto, index) => (
          <ProjectCard
            key={index}
            title={proyecto.title}
            image={proyecto.image}
           
          />
        ))}
      </div>
    </div>
  );
}