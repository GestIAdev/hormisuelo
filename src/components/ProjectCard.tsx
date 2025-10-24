// components/ProjectCard.tsx
import Image from 'next/image';

type ProjectCardProps = {
  title: string;
  image: string;

};

export default function ProjectCard({ title, image }: ProjectCardProps) {
  return (
  <div className="relative overflow-hidden bg-black/50 backdrop-blur-md rounded-2xl border border-white/10 cursor-pointer transition-all duration-500 hover:border-hormi-yellow hover:shadow-[0_0_25px_rgba(255,195,0,0.3)] card-glow flex flex-col h-full">
      {/* Imagen ocupa el 40% superior sin márgenes ni paddings */}
      <div className="h-9/10 w-full">
        <Image
          src={image}
          alt={`Imagen del proyecto ${title}`}
          width={400}
          height={160}
          className="w-full h-full object-cover"
        />
      </div>
      {/* Espacio inferior para título y descripción */}
      <div className="flex-1 p-4 md:p-6 flex flex-col justify-center">
        <h3 className="text-lg md:text-xl font-bold text-white mb-2 text-center">{title}</h3>
      
      </div>
    </div>
  );
}