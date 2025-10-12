// components/ProjectCard.tsx
import Image from 'next/image';

type ProjectCardProps = {
  title: string;
  image: string;
  description: string;
};

export default function ProjectCard({ title, image, description }: ProjectCardProps) {
  return (
    <div className="relative overflow-hidden bg-black/50 backdrop-blur-md rounded-2xl border border-white/10 cursor-pointer transition-all duration-500 hover:border-hormi-yellow hover:shadow-[0_0_25px_rgba(255,195,0,0.3)] card-glow flex flex-col">
      {/* Imagen ocupa el 40% superior sin márgenes ni paddings */}
      <div className="h-2/5 w-full">
        <Image
          src={image}
          alt={`Imagen del proyecto ${title}`}
          width={400}
          height={160}
          className="w-full h-full object-cover"
        />
      </div>
      {/* Espacio inferior para título y descripción */}
      <div className="flex-1 p-6 flex flex-col justify-center">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-300 text-sm leading-relaxed card-content">{description}</p>
      </div>
    </div>
  );
}