const brands = [
  'ARMCO',
  'MACCAFERRI',
  'SIMPSON Strong-Tie',
  'ferrocement®',
  'MANTA RAY',
  'TUBOS CORRUGADOS',
  'ALEIN International',
  'CON-AID',
  'STACO'
]

export default function Brands() {
  return (
    <section className="bg-hormi-black text-hormi-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-hormi-yellow mb-12">
          El Respaldo de los Líderes Mundiales. Somos sus Agentes Técnicos en Cuyo.
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {brands.map((brand, index) => (
            <div key={index} className="bg-gray-900 p-4 border-l-4 border-hormi-yellow rounded-lg hover:border-hormi-yellow transition-colors cursor-pointer text-center">
              <p className="text-hormi-yellow font-bold">{brand}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}