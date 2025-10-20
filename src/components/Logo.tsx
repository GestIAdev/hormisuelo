import Image from 'next/image'

export default function Logo() {
  return (
    <a href="#" className="flex items-center">
      <Image
        src="/logo.png"
        alt="Hormi Suelo Logo"
        width={192}
        height={48}
        className="h-12 w-auto"
      />
    </a>
  );
}