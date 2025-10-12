export default function TrustFactors() {
  return (
    <section className="bg-hormi-black text-hormi-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-900 p-6 border-l-4 border-hormi-yellow text-center">
            <div className="text-hormi-yellow text-6xl mb-4">🗺️</div>
            <h3 className="text-xl font-bold mb-2 text-hormi-yellow">Expertos en Cuyo</h3>
            <p className="text-hormi-gray">Más de 40 años al servicio de Mendoza, San Juan y San Luis.</p>
          </div>
          <div className="bg-gray-900 p-6 border-l-4 border-hormi-yellow text-center">
            <div className="text-hormi-yellow text-6xl mb-4">🏗️</div>
            <h3 className="text-xl font-bold mb-2 text-hormi-yellow">+400 Obras Realizadas</h3>
            <p className="text-hormi-gray">Un historial probado de éxito y confianza en la región.</p>
          </div>
          <div className="bg-gray-900 p-6 border-l-4 border-hormi-yellow text-center">
            <div className="text-hormi-yellow text-6xl mb-4">🤝</div>
            <h3 className="text-xl font-bold mb-2 text-hormi-yellow">Socios de Líderes Globales</h3>
            <p className="text-hormi-gray">Agentes técnicos de las mejores marcas del sector.</p>
          </div>
        </div>
      </div>
    </section>
  )
}