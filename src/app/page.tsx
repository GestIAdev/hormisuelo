// app/page.tsx (VERSIÓN FINAL CON LÓGICA DE FONDOS MÚLTIPLES)
'use client'

import { useState } from 'react'; 
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MarcasAliadas from '@/components/MarcasAliadas';
import Servicios from '@/components/Servicios';
import Proyectos from '@/components/Proyectos';
import Contacto from '@/components/Contacto';
// ServiceCard probablemente no necesita ser importado aquí, sino dentro de Servicios.tsx
// import ServiceCard from '@/components/ServiceCard' 

export default function Home() {
  const [activeView, setActiveView] = useState('INICIO');

  return (
    <div className="relative h-screen w-screen overflow-hidden">

      {/* --- INICIO DE LA SECCIÓN DE FONDOS DINÁMICOS (CAPA 0) --- */}

      {/* Regla 1: Si la vista es INICIO, muestra el video en el 40% izquierdo */}
      {activeView === 'INICIO' && (
        <div className="absolute left-0 top-0 w-[40%] h-full z-[-1] background-transition">
          <video autoPlay muted loop className="w-full h-full object-cover">
            <source src="/Excavadoraaerea1.mp4" type="video/mp4" />
          </video>
        </div>
      )}

      {/* Regla 2: Si la vista es SERVICIOS, muestra la imagen a pantalla completa */}
      {activeView === 'SERVICIOS' && (
        <div className="absolute inset-0 z-[-1] background-transition">
          <div 
            className="w-full h-full bg-cover bg-center" 
            style={{ backgroundImage: `url('/fondoservicios.png')` }}
          ></div>
          {/* Overlay oscuro para que el fondo no compita con las tarjetas */}
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
      )}

      {/* Regla 3: Si la vista es MARCAS ALIADAS, muestra la imagen a pantalla completa */}
      {activeView === 'MARCAS ALIADAS' && (
        <div className="absolute inset-0 z-[-1] background-transition">
          <div 
            className="w-full h-full bg-cover bg-center" 
            style={{ backgroundImage: `url('/redneural.webp')` }}
          ></div>
          {/* Overlay oscuro para que el fondo no compita con las tarjetas */}
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
      )}

      {/* Regla 4: Si la vista es PROYECTOS, muestra la imagen a pantalla completa */}
      {activeView === 'PROYECTOS' && (
        <div className="absolute inset-0 z-[-1] background-transition">
          <div 
            className="w-full h-full bg-cover bg-center" 
            style={{ backgroundImage: `url('/tunel1.jpeg')` }}
          ></div>
          {/* Overlay oscuro para que el fondo no compita con las tarjetas */}
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
      )}

      {/* Regla 5: Si la vista es CONTACTO, muestra la imagen a pantalla completa */}
      {activeView === 'CONTACTO' && (
        <div className="absolute inset-0 z-[-1] background-transition">
          <div 
            className="w-full h-full bg-cover bg-center" 
            style={{ backgroundImage: `url('/dique1.jpeg')` }}
          ></div>
          {/* Overlay oscuro para que el fondo no compita con las tarjetas */}
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
      )}

      {/* --- FIN DE LA SECCIÓN DE FONDOS --- */}


      {/* CAPA 1: ESTRUCTURA DE CONTENIDO SUPERPUESTA (Sin cambios) */}
      <div className="relative z-10 h-full w-full flex flex-col">
        <Navbar activeView={activeView} setActiveView={setActiveView} />

        <main className="flex-grow overflow-y-auto">
          {activeView === 'INICIO' && <Hero />}
          {activeView === 'MARCAS ALIADAS' && <MarcasAliadas />}
          {activeView === 'SERVICIOS' && <Servicios />}
          {activeView === 'PROYECTOS' && <Proyectos />}
          {activeView === 'CONTACTO' && <Contacto />}
        </main>

        <Footer />
      </div>

    </div>
  );
}