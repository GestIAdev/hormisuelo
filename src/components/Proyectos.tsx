// components/Proyectos.tsx
import ProjectCard from './ProjectCard';

// Datos de ejemplo para proyectos (idealmente vendrán de Sanity CMS)
const proyectos = [
  {
    title: 'Túnel de Alta Montaña',
    image: '/tunel1.jpeg',
    description: 'Proyecto de excavación y estabilización de túnel en zona de alta pendiente, utilizando técnicas avanzadas de geotecnia y control de derrumbes.'
  },
  {
    title: 'Defensa de Caída de Piedras',
    image: '/dique1.jpeg',
    description: 'Sistema de contención de rocas en carreteras de montaña, implementando mallas de alta resistencia y anclajes químicos.'
  },
  {
    title: 'Estabilización de Taludes',
    image: '/muro1.jpeg',
    description: 'Refuerzo estructural de taludes inestables mediante bulonaje y geotextiles, previniendo deslizamientos de tierra.'
  },
  {
    title: 'Pavimentación Industrial',
    image: '/pista1.jpeg',
    description: 'Construcción de pistas de hormigón armado para zonas industriales, con tratamientos superficiales especializados.'
  },
  {
    title: 'Excavación Aérea',
    image: '/hormigon1.jpeg',
    description: 'Trabajos de excavación en áreas de difícil acceso utilizando equipos especializados y técnicas de bioingeniería.'
  },
  {
    title: 'Pulido de Superficies',
    image: '/pulidosuelo.jpeg',
    description: 'Tratamiento y pulido de superficies de hormigón para aplicaciones decorativas y funcionales en espacios comerciales.'
  },
];

export default function Proyectos() {
  return (
    <div className="w-full min-h-full flex flex-col items-center justify-start p-4 md:p-8 section-fade-in">
      <div className="text-center mb-8">
        <h2 className="text-4xl lg:text-5xl font-extrabold section-title-glow">
          Nuestros Proyectos
        </h2>
        <div className="decorative-line mx-auto mb-4"></div>
        <p className="text-lg text-gray-200 mt-2 section-content">
          Soluciones innovadoras aplicadas en proyectos desafiantes de ingeniería civil.
        </p>
      </div>

      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {proyectos.map((proyecto, index) => (
          <ProjectCard
            key={index}
            title={proyecto.title}
            image={proyecto.image}
            description={proyecto.description}
          />
        ))}
      </div>
    </div>
  );
}