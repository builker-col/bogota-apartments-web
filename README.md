<p align="center">
  <img src="public/img/logo.png" alt="Bogotá Apartments" width="420" />
</p>

<h1 align="center">Bogotá Apartments</h1>

<p align="center">
  Plataforma <strong>open source</strong> y <strong>open data</strong> para analizar el mercado inmobiliario de Bogotá D.C.
</p>

<p align="center">
  <a href="https://bogota-apartments.builker.com"><strong>Sitio web</strong></a> ·
  <a href="https://api.bogota-apartments.builker.com"><strong>API</strong></a>
</p>

---

## Acerca del proyecto

**Bogotá Apartments** publica estadísticas consolidadas del valor del suelo, reportes mensuales descargables y un visor de mapas catastrales. Los datos están disponibles para investigadores, desarrolladores y ciudadanos sin restricciones comerciales.

| Recurso | URL |
|---------|-----|
| Sitio web | [bogota-apartments.builker.com](https://bogota-apartments.builker.com) |
| API REST | [api.bogota-apartments.builker.com](https://api.bogota-apartments.builker.com) |

### Funcionalidades

- **Inicio** — Indicadores del mercado, gráficos interactivos y suscripción al boletín
- **Mapa GIS** — Visualizador georreferenciado con capas catastrales (preparado para Mapbox)
- **Descargas** — Reportes mensuales en CSV y JSON
- **API** — Documentación y ejemplos de integración (cURL, JavaScript, Python)

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

## Desarrollo local

Requisitos: Node.js 20+ y npm.

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en el navegador.

### Scripts disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Servidor de desarrollo con Turbopack |
| `npm run build` | Build de producción |
| `npm run start` | Servir build de producción |
| `npm run lint` | Ejecutar ESLint |

## Estructura del repositorio

```
app/                    # Rutas y layout (App Router)
  (site)/               # Páginas: /, /mapa, /descargas, /api
components/
  site/                 # Header, footer, shell
  views/                # Vistas por sección
lib/bogota-apartments/  # Datos mock, URLs del sitio y API
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
