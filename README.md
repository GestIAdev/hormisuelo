# Hormi Suelo Landing Page

Esta es la landing page para Hormi Suelo, construida con Next.js, Sanity.io y Vercel.

## Tecnologías Utilizadas

- **Frontend**: Next.js con TypeScript y Tailwind CSS
- **CMS**: Sanity.io para gestión de contenido
- **Despliegue**: Vercel con Serverless Functions
- **Colores**: Negro (#000000) y Amarillo (#FFD700)

## Configuración Inicial

1. **Instala las dependencias**:
   ```bash
   npm install
   ```

2. **Configura Sanity.io**:
   - Ve a [sanity.io](https://sanity.io) y crea una cuenta.
   - Crea un nuevo proyecto llamado "Hormi Suelo CMS".
   - Obtén el Project ID y Dataset (production).
   - Actualiza el archivo `.env.local`:
     ```
     NEXT_PUBLIC_SANITY_PROJECT_ID=tu_project_id_aqui
     NEXT_PUBLIC_SANITY_DATASET=production
     ```

3. **Ejecuta el servidor de desarrollo**:
   ```bash
   npm run dev
   ```
   Abre [http://localhost:3001](http://localhost:3001) en tu navegador.

4. **Accede al CMS**:
   ```bash
   npm run sanity
   ```
   Esto abrirá Sanity Studio en tu navegador para gestionar el contenido.

## Estructura de la Página

- **Hero**: Video/imagen de fondo con título, subtítulo y botón CTA.
- **Factores Clave**: Tres columnas destacando experiencia, obras y socios.
- **Galería de Proyectos**: Muestra proyectos destacados.
- **Marcas Aliadas**: Logos de proveedores con enlaces.
- **Formulario de Contacto**: Envío de consultas vía Serverless Function.
- **Footer**: Información de contacto.

## Gestión de Contenido

En Sanity Studio puedes:
- Agregar/editar proyectos con imágenes y descripciones.
- Gestionar logos de marcas aliadas.
- Actualizar textos del sitio (títulos, descripciones).
- Subir videos/imágenes para el hero.

## Despliegue en Vercel

1. **Sube el código a GitHub**:
   - Crea un repositorio en GitHub.
   - Sube todo el código del proyecto.

2. **Conecta con Vercel**:
   - Ve a [vercel.com](https://vercel.com) y crea una cuenta.
   - Importa tu repositorio de GitHub.
   - Configura las variables de entorno en Vercel (igual que en .env.local).

3. **Deploy**:
   - Vercel detectará automáticamente Next.js y lo desplegará.
   - La URL de producción se generará automáticamente.

## Configuración del Formulario de Contacto

El formulario envía emails. Para producción, configura un servicio de email como:
- SendGrid
- Mailgun
- O usa el email de Hormi Suelo

Actualiza la función en `src/app/api/contact/route.ts` con tus credenciales.

## Optimizaciones Incluidas

- Optimización automática de imágenes con Next.js Image.
- SEO con metadatos apropiados.
- Diseño responsive para móviles.
- CDN global con Vercel.

## Próximos Pasos

1. Agregar contenido real en Sanity.
2. Subir assets (logos, imágenes, videos) a la carpeta `public/`.
3. Configurar envío real de emails.
4. Probar en diferentes dispositivos.
5. Desplegar y compartir la URL con el cliente.

## Soporte

Si necesitas ayuda, revisa la documentación de:
- [Next.js](https://nextjs.org/docs)
- [Sanity.io](https://www.sanity.io/docs)
- [Vercel](https://vercel.com/docs)
