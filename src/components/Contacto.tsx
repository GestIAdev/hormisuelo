// components/Contacto.tsx
'use client'

import { useState } from 'react';
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';

export default function Contacto() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const targetEmail = 'hormisuelo@hotmail.com';

    try {
      const resp = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(targetEmail)}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await resp.json().catch(() => ({}));

      if (resp.ok && data.success !== 'false') {
        setSubmitMessage('¡Mensaje enviado con éxito! Enviaremos una copia al correo de contacto.');
        setFormData({ name: '', email: '', phone: '', message: '' });
        setIsSubmitting(false);
        return;
      }

      // Mostrar mensaje de fallo o instrucciones si FormSubmit requiere activación
      if (data && data.message) {
        setSubmitMessage(data.message);
      } else {
        setSubmitMessage('Error al enviar el mensaje. Por favor, inténtalo de nuevo.');
      }
    } catch (error) {
      console.error('Error al enviar formulario a FormSubmit:', error);
      setSubmitMessage('Error al enviar el mensaje. Por favor, inténtalo de nuevo.');
    }

    setIsSubmitting(false);
  };

  return (
    <div className="w-full min-h-full flex flex-col items-center justify-start p-3 sm:p-4 md:p-8 section-fade-in relative">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">

        {/* Información de Contacto */}
        <div className="bg-black/60 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold section-title-glow mb-4 md:mb-6 text-center">
            Contáctanos
          </h2>
          <div className="decorative-line mx-auto mb-4"></div>
          <p className="text-sm sm:text-base md:text-lg text-gray-200 mb-6 md:mb-8 section-content">
            Estamos aquí para ayudarte con tus proyectos de ingeniería. No dudes en ponerte en contacto con nosotros.
          </p>

          {/* Teléfonos */}
          <div className="mb-6 md:mb-8">
            <h3 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4 flex items-center">
              <PhoneIcon className="w-5 h-5 md:w-6 md:h-6 mr-2 text-hormi-yellow" />
              Teléfonos
            </h3>
            <div className="space-y-2">
              <p className="text-gray-300 text-sm md:text-base flex items-center">
                <span className="mr-2">📞</span>
                261 657 2068
              </p>
              <p className="text-gray-300 text-sm md:text-base flex items-center">
                <span className="mr-2">📞</span>
                261 666 6865
              </p>
            </div>
          </div>

          {/* Dirección */}
          <div className="mb-6 md:mb-8">
            <h3 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4 flex items-center">
              <MapPinIcon className="w-5 h-5 md:w-6 md:h-6 mr-2 text-hormi-yellow" />
                Ubicación
            </h3>
              <p className="text-gray-300 text-sm md:text-base">
                Godoy Cruz 617, San José, Guaymallén, Mendoza, Argentina
              </p>
          </div>

          {/* Redes Sociales */}
          <div className="mb-6 md:mb-8">
            <h3 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4">
              Síguenos en Redes Sociales
            </h3>
            <div className="flex space-x-4 items-center">
              <a
                href="https://www.facebook.com/profile.php?id=100063890807330"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                title="Facebook"
                className="bg-[#1877F2] text-white w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-md hover:scale-105 transition-transform"
              >
                {/* Facebook SVG */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 md:w-7 md:h-7">
                  <path d="M22 12a10 10 0 10-11.5 9.9v-7h-2.2V12h2.2V9.8c0-2.2 1.3-3.4 3.3-3.4.95 0 1.95.17 1.95.17v2.14h-1.1c-1.09 0-1.43.68-1.43 1.38V12h2.44l-.39 2.9h-2.05v7A10 10 0 0022 12z" />
                </svg>
              </a>
              <a
                href={`https://wa.me/5492616666865`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contacto WhatsApp - Pagnotta Marta"
                title="Contactar por WhatsApp - Pagnotta Marta"
                className="bg-[#25D366] text-white w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 md:w-8 md:h-8">
                  <path d="M20.52 3.48A11.73 11.73 0 0012.05.25 11.78 11.78 0 001.5 11.94c0 2.08.54 4.12 1.56 5.92L.15 23.85l5.25-1.37a11.75 11.75 0 005.09 1.1h.01c6.47 0 11.85-5.22 11.86-11.87a11.7 11.7 0 00-3.9-8.13zM12.05 20.47h-.01a9.05 9.05 0 01-4.6-1.25l-.33-.2-3.11.81.83-3.03-.21-.31A9.07 9.07 0 012.99 11.9c0-4.99 4.06-9.05 9.06-9.05 2.42 0 4.69.94 6.42 2.65a8.98 8.98 0 012.64 6.39c0 4.99-4.06 9.03-9.05 9.03z" />
                  <path d="M17.02 14.23c-.29-.15-1.72-.85-1.99-.95-.27-.1-.47-.15-.67.15-.2.29-.78.95-.96 1.15-.18.2-.36.22-.66.07-.3-.15-1.27-.47-2.42-1.49-.9-.8-1.5-1.79-1.67-2.09-.17-.3-.02-.46.12-.61.12-.12.27-.32.4-.48.13-.16.17-.27.27-.45.1-.18.05-.34-.02-.48-.07-.15-.67-1.6-.92-2.19-.24-.58-.49-.5-.67-.51-.17-.01-.36-.01-.55-.01-.19 0-.5.07-.76.34-.26.27-1 1-1 2.48 0 1.48 1.03 2.92 1.17 3.12.15.2 2.02 3.08 4.9 4.31 2.88 1.23 2.88.82 3.4.77.52-.05 1.72-.7 1.97-1.37.25-.67.25-1.25.18-1.37-.07-.12-.27-.19-.56-.34z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Formulario de Contacto */}
        <div className="bg-black/60 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/10">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6 flex items-center">
            <EnvelopeIcon className="w-5 h-5 md:w-6 md:h-6 mr-2 text-hormi-yellow" />
            Envíanos un Mensaje
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
            <div>
              <label htmlFor="name" className="block text-xs md:text-sm font-medium text-gray-300 mb-2">
                Nombre Completo
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 md:px-4 py-2 md:py-3 bg-black/50 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:border-hormi-yellow focus:outline-none transition-colors text-sm md:text-base"
                placeholder="Tu nombre"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs md:text-sm font-medium text-gray-300 mb-2">
                Correo Electrónico
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 md:px-4 py-2 md:py-3 bg-black/50 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:border-hormi-yellow focus:outline-none transition-colors text-sm md:text-base"
                placeholder="tu@email.com"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-xs md:text-sm font-medium text-gray-300 mb-2">
                Teléfono
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3 md:px-4 py-2 md:py-3 bg-black/50 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:border-hormi-yellow focus:outline-none transition-colors text-sm md:text-base"
                placeholder="261 123 4567"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-xs md:text-sm font-medium text-gray-300 mb-2">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-3 md:px-4 py-2 md:py-3 bg-black/50 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:border-hormi-yellow focus:outline-none transition-colors resize-none text-sm md:text-base"
                placeholder="Cuéntanos sobre tu proyecto..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-hormi-yellow text-hormi-black px-6 md:px-8 py-2 md:py-3 rounded-lg font-bold text-sm md:text-lg hover:bg-yellow-500 hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
            </button>

            {submitMessage && (
              <p className={`text-center mt-4 text-xs sm:text-sm md:text-base ${submitMessage.includes('éxito') ? 'text-green-400' : 'text-red-400'}`}>
                {submitMessage}
              </p>
            )}
          </form>
        </div>

      </div>

      {/* Google Maps */}
      <div className="w-full max-w-6xl mt-8 md:mt-12">
        <div className="bg-black/60 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/10 overflow-hidden">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold section-title-glow mb-4 md:mb-6 text-center">
            Nuestra Ubicación
          </h2>
          <div className="decorative-line mx-auto mb-6 md:mb-8"></div>
          
          {/* Contenedor del mapa con aspect ratio responsivo */}
          <div className="w-full rounded-lg overflow-hidden" style={{ aspectRatio: '16/9', minHeight: '300px' }}>
            <iframe
              title="Ubicación Hormisuelo - Godoy Cruz 617, Guaymallén, Mendoza"
              src="https://www.google.com/maps?q=Godoy+Cruz+617,+San+Jose,+Guaymall%C3%A9n,+Mendoza,+Argentina&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      
    </div>
  );
}