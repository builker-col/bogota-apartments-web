<p align="center">
  <img src="public/img/logo.png" alt="Bogotá Apartments" width="420" />
</p>

<h1 align="center">Bogotá Apartments</h1>

<p align="center">
  Plataforma <strong>open source</strong> y <strong>open data</strong> para analizar el mercado inmobiliario de Bogotá D.C.
</p>

<p align="center">
  <a href="https://bogota.builker.com"><strong>Sitio web</strong></a> ·
  <a href="https://api.bogota.builker.com"><strong>API</strong></a>
</p>

---

## Acerca del proyecto

**Bogotá Apartments** publica estadísticas consolidadas del valor del suelo, reportes mensuales descargables y un visor de mapas catastrales. Los datos están disponibles para investigadores, desarrolladores y ciudadanos sin restricciones comerciales.

| Recurso | URL |
|---------|-----|
| Sitio web | [bogota.builker.com](https://bogota.builker.com) |
| API REST | [api.bogota.builker.com](https://api.bogota.builker.com) |
| Contacto | [contacto@builker.com](mailto:contacto@builker.com) |

### Funcionalidades

- **Inicio** — Indicadores del mercado, gráficos interactivos y suscripción al boletín
- **Mapa GIS** — Visualizador georreferenciado con capas catastrales (preparado para Mapbox)
- **Descargas** — Reportes mensuales en CSV y JSON
- **API** — Documentación y ejemplos de integración (cURL, JavaScript, Python)
- **Blog** — Artículos sobre el mercado inmobiliario, gestionados con [Sanity CMS](https://www.sanity.io)

## Proyecto y aliados

Proyecto desarrollado por **[Builker S.A.S](https://builker.com)** con el apoyo de:

| Organización | Enlace |
|--------------|--------|
| [Inmodata](https://inmodata.builker.com) | Datos y analítica inmobiliaria |
| [Tayra](https://tayra.com.co) | Apoyo al ecosistema de datos abiertos |

## Stack tecnológico

- [Next.js 16](https://nextjs.org) (App Router)
- [React 19](https://react.dev)
- [Tailwind CSS 4](https://tailwindcss.com)
- [TypeScript](https://www.typescriptlang.org)
- [Lucide React](https://lucide.dev) — iconos
- [Sanity CMS](https://www.sanity.io) — blog y Studio embebido
- [next-sanity](https://github.com/sanity-io/next-sanity) — cliente GROQ e integración con Next.js

## Desarrollo local

Requisitos: Node.js 20+ y npm.

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en el navegador.

### Blog con Sanity CMS

1. Crea un proyecto en [sanity.io/manage](https://www.sanity.io/manage) o ejecuta `npx sanity@latest init` en la raíz del repositorio.
2. Copia `.env.example` a `.env.local` y completa las variables:

```bash
cp .env.example .env.local
```

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=tu-project-id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2025-01-01
```

3. Abre el Studio embebido en [http://localhost:3000/studio](http://localhost:3000/studio) (con `npm run dev`) o ejecuta `npm run studio` para el Studio standalone.
4. Crea un artículo de tipo **Artículo**, completa título, slug, resumen, imagen y contenido, y publícalo.
5. El artículo aparecerá en [http://localhost:3000/blog](http://localhost:3000/blog) y en `/blog/[slug]`.

Para desplegar el Studio hospedado en Sanity: `npm run studio:deploy`.

> **Nota:** `/studio` es de uso interno (gestión de contenido). La página pública `/blog` no enlaza al Studio.

### Versionado

La versión del sitio se define en `package.json` y se muestra en el footer (por ejemplo, `v0.1.0`). Para publicar una nueva versión, actualiza el campo `version` en ese archivo.

### Scripts disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Servidor de desarrollo con Turbopack |
| `npm run build` | Build de producción |
| `npm run start` | Servir build de producción |
| `npm run lint` | Ejecutar ESLint |
| `npm run studio` | Sanity Studio standalone |
| `npm run studio:deploy` | Desplegar Studio en Sanity Cloud |

## Estructura del repositorio

```
app/                    # Rutas y layout (App Router)
  (site)/               # Páginas: /, /mapa, /descargas, /api, /blog
  studio/               # Sanity Studio embebido (/studio)
components/
  blog/                 # Listado y vista de artículos
  site/                 # Header, footer, shell
  views/                # Vistas por sección
lib/
  bogota-apartments/    # Datos mock, URLs del sitio y API
  sanity/               # Cliente GROQ, queries e imágenes
sanity/                 # Esquemas y configuración de Sanity
public/                 # Assets estáticos (favicons, logo)
```

## Licencia de datos

Los datasets distribuidos por Bogotá Apartments son de uso libre (comercial, educativo y gubernamental). Al reutilizar la información, atribuye los créditos correspondientes a **Bogotá Apartments**.

---

<p align="center">
  Proyecto de <a href="https://builker.com">Builker S.A.S</a> ·
  Apoyo de <a href="https://inmodata.builker.com">Inmodata</a> y
  <a href="https://tayra.com.co">Tayra</a>
</p>

<p align="center">
  © 2026 Bogotá Apartments · Datos abiertos inmobiliarios
</p>
