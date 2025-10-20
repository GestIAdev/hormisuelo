export const brand = {
  name: 'brand',
  title: 'Marca Aliada',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nombre',
      type: 'string',
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'website',
      title: 'Sitio Web',
      type: 'url',
    },
  ],
}