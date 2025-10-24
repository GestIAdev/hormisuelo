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

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitMessage('¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setSubmitMessage('Error al enviar el mensaje. Por favor, inténtalo de nuevo.');
      }
    } catch (error) {
      setSubmitMessage('Error al enviar el mensaje. Por favor, inténtalo de nuevo.');
    }

    setIsSubmitting(false);
  };

  return (
    <div className="w-full min-h-full flex flex-col items-center justify-start p-3 sm:p-4 md:p-8 section-fade-in">
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
              Mendoza, Argentina
            </p>
          </div>

          {/* Redes Sociales */}
          <div className="mb-6 md:mb-8">
            <h3 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4">
              Síguenos en Redes Sociales
            </h3>
            <div className="flex space-x-4">
              <a href="#" className="text-xl md:text-2xl text-gray-300 hover:text-hormi-yellow transition-colors">
                📘
              </a>
              <a href="#" className="text-xl md:text-2xl text-gray-300 hover:text-hormi-yellow transition-colors">
                📷
              </a>
              <a href="#" className="text-xl md:text-2xl text-gray-300 hover:text-hormi-yellow transition-colors">
                💼
              </a>
              <a href={`https://wa.me/5492616572068`} target="_blank" className="text-xl md:text-2xl text-gray-300 hover:text-hormi-yellow transition-colors">
                💬
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
              title="Ubicación Hormisuelo - Mendoza, Argentina"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3349.0481181635546!2d-68.85236!3d-32.88926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967bc29f8c522abd%3A0x1234567890ab!2sMendoza%2C%20Argentina!5e0!3m2!1ses!2sar!4v1234567890"
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