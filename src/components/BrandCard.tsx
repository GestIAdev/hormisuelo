// components/BrandCard.tsx
import Image from 'next/image';

type BrandCardProps = {
  name: string;
  logo: string;
  link: string;
};

export default function BrandCard({ name, logo, link }: BrandCardProps) {
  const handleClick = () => {
    window.open(link, '_blank');
  };

  return (
    <div className="relative overflow-hidden bg-black/50 backdrop-blur-md rounded-2xl border border-white/10 cursor-pointer transition-all duration-500 hover:border-hormi-yellow hover:shadow-[0_0_25px_rgba(255,195,0,0.3)] card-glow flex flex-col h-full">
      {/* Imagen ocupa el 80% superior sin márgenes */}
      <div className="h-4/5 w-full flex items-center justify-center bg-black/30" onClick={handleClick}>
        <Image
          src={logo}
          alt={`Logo de ${name}`}
          width={200}
          height={160}
          className="w-full h-full object-cover"
        />
      </div>
      {/* Nombre ocupa el 20% inferior */}
      <div className="h-1/5 w-full flex items-center justify-center bg-black/60" onClick={handleClick}>
        <h3 className="text-xs md:text-sm font-bold text-white text-center line-clamp-2 px-2">{name}</h3>
      </div>
    </div>
  );
}