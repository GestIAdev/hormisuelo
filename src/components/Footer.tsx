export default function Footer() {
  return (
    <footer className="w-full p-2 md:p-4 bg-black/30 backdrop-blur-sm text-center text-hormi-white z-30">
      <p className="text-hormi-yellow text-xs md:text-sm">&copy; {new Date().getFullYear()} Hormi Suelo Ingeniería. Todos los derechos reservados.</p>
    </footer>
  );
}