import type { Metadata } from "next";
import { Montserrat, Lato } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const lato = Lato({
  variable: "--font-lato",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hormi Suelo - Ingeniería de Vanguardia en Cuyo",
  description: "Soluciones robustas para el suelo y hormigón, respaldadas por marcas líderes mundiales. Más de 40 años de experiencia en Mendoza, San Juan y San Luis.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${montserrat.variable} ${lato.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}