export default function ProjectsGallery() {
  return (
    <section className="py-16 bg-hormi-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-hormi-yellow mb-12">Nuestros Proyectos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Placeholder projects */}
          {[1,2,3].map((i) => (
            <div key={i} className="bg-gray-900 p-4 border-l-4 border-hormi-yellow rounded-lg">
              <div className="h-48 bg-hormi-gray mb-4"></div>
              <h3 className="text-xl font-bold text-hormi-yellow">Proyecto {i}</h3>
              <p className="text-hormi-gray">Descripción del proyecto.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}