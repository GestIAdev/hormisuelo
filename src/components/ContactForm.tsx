'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Enviar a Vercel Function
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    if (response.ok) {
      alert('Mensaje enviado!')
    }
  }

  return (
    <section className="py-16 bg-hormi-black text-hormi-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-hormi-yellow mb-12">Contáctanos</h2>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="mb-4">
            <label className="block mb-2 text-hormi-yellow">Nombre</label>
            <input
              type="text"
              className="w-full p-3 bg-gray-900 text-hormi-white border border-hormi-gray rounded focus:border-hormi-yellow focus:outline-none"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-hormi-yellow">Email</label>
            <input
              type="email"
              className="w-full p-3 bg-gray-900 text-hormi-white border border-hormi-gray rounded focus:border-hormi-yellow focus:outline-none"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-hormi-yellow">Mensaje</label>
            <textarea
              className="w-full p-3 bg-gray-900 text-hormi-white border border-hormi-gray rounded focus:border-hormi-yellow focus:outline-none"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              required
            ></textarea>
          </div>
          <button type="submit" className="bg-hormi-yellow text-hormi-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-500 hover:scale-105 transition-all duration-300 animate-breathe">
            Enviar
          </button>
        </form>
      </div>
    </section>
  )
}