// components/Servicios.tsx
import { useState } from 'react';
import ServiceCard from './ServiceCard';
import { 
  WrenchScrewdriverIcon, 
  CubeIcon, 
  BeakerIcon, 
  TruckIcon 
} from '@heroicons/react/24/outline';

// Los datos que extrajimos, ahora como un objeto para el componente
const serviceData = [
  { 
    category: 'Ingeniería Hidráulica y Geotecnia Ambiental', 
    icon: WrenchScrewdriverIcon, // Icono de herramientas para ingeniería hidráulica
    services: [
      'Ingeniería Hidráulica Torrencial',
      'Bioingeniería para Control de la Erosión',
      'Conservación y Medio Ambiente',
      'Drenaje y Saneamiento',
      'Control de Caída de Piedras y Defensas de Avalanchas',
      'Bulonajes en Rocas y en Suelos',
    ] 
  },
  { 
    category: 'Geotecnia y Estabilización de Suelos', 
    icon: CubeIcon, // Icono de cubo para geotecnia y suelos
    services: [
      'Suelos Mecánicamente Reforzados',
      'Muros de Gravedad',
      'Consolidación Mecánica de Suelos',
      'Estabilización Química de Caminos Rurales',
    ] 
  },
  { 
    category: 'Patología y Terapéutica del Hormigón', 
    icon: BeakerIcon, // Icono de beaker para química y tratamientos
    services: [
      'Recuperación y Refuerzo de Estructuras',
      'Sistema HORMI injection®',
      'Grouting y Demolición Química',
      'Anclajes Químicos y Mecánicos',
      'Cementos y Morteros Modificados',
    ] 
  },
  { 
    category: 'Materiales y Productos Específicos', 
    icon: TruckIcon, // Icono de camión para materiales y productos
    services: [
      'Geosintéticos (Gaviones, Geotextiles, etc.)',
      'Refuerzos y Fibras (Acero, Carbono)',
      'Contención y Anclaje (Mallas, Pantallas)',
      'Aditivos y Materiales Avanzados',
    ] 
  },
];

export default function Servicios() {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const handleCardClick = (category: string) => {
    if (expandedCard === category) {
      setExpandedCard(null); // Si se hace clic en la misma, se cierra
    } else {
      setExpandedCard(category); // Si se hace clic en otra, se abre
    }
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-4 md:p-8 section-fade-in">
      <div className="text-center mb-8">
        <h2 className="text-4xl lg:text-5xl font-extrabold section-title-glow">
          Nuestras Capacidades
        </h2>
        <div className="decorative-line mx-auto mb-4"></div>
        <p className="text-lg text-gray-200 mt-2 section-content">
          Soluciones integrales para los desafíos más complejos de la ingeniería.
        </p>
      </div>
      
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6">
        {serviceData.map((data) => (
          <ServiceCard 
            key={data.category}
            {...data}
            isExpanded={expandedCard === data.category}
            onClick={handleCardClick}
          />
        ))}
      </div>
    </div>
  );
}