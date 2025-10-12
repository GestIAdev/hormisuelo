export const siteSettings = {
  name: 'siteSettings',
  title: 'Configuración del Sitio',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Título del Sitio',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Descripción',
      type: 'text',
    },
    {
      name: 'heroTitle',
      title: 'Título del Héroe',
      type: 'string',
    },
    {
      name: 'heroSubtitle',
      title: 'Subtítulo del Héroe',
      type: 'string',
    },
    {
      name: 'heroVideo',
      title: 'Video del Héroe',
      type: 'file',
    },
    {
      name: 'heroImage',
      title: 'Imagen del Héroe',
      type: 'image',
    },
  ],
}