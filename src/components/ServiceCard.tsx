// components/ServiceCard.tsx (VERSIÓN "GLOW UP")
import { ComponentType } from 'react';

type ServiceCardProps = {
  category: string;
  icon: ComponentType<{ className?: string }>;
  services: string[];
  isExpanded: boolean;
  onClick: (category: string) => void;
};

export default function ServiceCard({ category, icon: IconComponent, services, isExpanded, onClick }: ServiceCardProps) {
  return (
    <div
      // AÑADIMOS: relative, overflow-hidden, y la nueva clase card-glow
      // CAMBIAMOS: rounded-2xl y la sombra en el hover
      className="relative overflow-hidden bg-black/50 backdrop-blur-md rounded-2xl p-4 md:p-6 border border-white/10 cursor-pointer transition-all duration-500 hover:border-hormi-yellow hover:shadow-[0_0_25px_rgba(255,195,0,0.3)] card-glow"
      onClick={() => onClick(category)}
    >
      {/* El z-10 asegura que el contenido esté por encima del brillo ::before */}
      <div className="relative z-10">
        <div className="flex items-center mb-4">
          <IconComponent className="w-8 h-8 md:w-10 md:h-10 mr-3 md:mr-4 text-hormi-yellow flex-shrink-0" />
          {/* CAMBIAMOS: El título ahora es blanco para mayor contraste */}
          <h3 className="text-lg md:text-xl font-bold text-white">{category}</h3>
        </div>

        {/* AÑADIMOS: El separador con gradiente */}
        <hr className="border-t-2 border-transparent bg-gradient-to-r from-transparent via-white/20 to-transparent my-3 md:my-4" />

        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-96' : 'max-h-0'}`}>
          <ul className="list-disc list-inside text-gray-300 mt-3 md:mt-4 space-y-2 pl-2 text-sm md:text-base">
            {services.map((service, index) => (
              <li key={index}>{service}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}