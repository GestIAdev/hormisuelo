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
    <div
      className="relative overflow-hidden bg-black/50 backdrop-blur-md rounded-2xl p-6 border border-white/10 cursor-pointer transition-all duration-500 hover:border-hormi-yellow hover:shadow-[0_0_25px_rgba(255,195,0,0.3)] card-glow flex flex-col items-center justify-center text-center"
      onClick={handleClick}
    >
      <div className="relative z-10">
        <div className="mb-4">
          <Image
            src={logo}
            alt={`Logo de ${name}`}
            width={100}
            height={50}
            className="object-contain filter grayscale brightness-200 hover:filter-none transition-all duration-300"
          />
        </div>
        <h3 className="text-lg font-bold text-white">{name}</h3>
      </div>
    </div>
  );
}