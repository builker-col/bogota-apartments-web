# Bogotá Real Estate Open Data

Proyecto de Builker para publicar, consultar y explorar datos abiertos del mercado inmobiliario de Bogotá. Es una iniciativa independiente del portal general `datos.builker.com` y reemplaza conceptualmente al proyecto archivado Bogotá Apartments.

## Estado

La interfaz funciona actualmente como prototipo. No publica todavía cifras reales ni habilita descargas externas.

- **Bucket de datos:** integración pendiente para archivos versionados.
- **Datos y consultas:** experiencia mock preparada para Inmodata API.
- **Mapas:** visualización mock preparada para Inmodata Maps API.
- **IA:** flujo mock preparado para Inmodata Intelligence.

Todos los contenidos simulados están marcados como `Demo` o `Próximamente` en la interfaz.

## Rutas

- `/` — presentación y arquitectura del proyecto.
- `/consultas` — filtros y asistente en modo demo.
- `/mapa` — prototipo de exploración territorial.
- `/descargas` — catálogo previsto de datasets.
- `/api` — contrato preliminar de integración.
- `/blog` — bitácora del proyecto.
- `/studio` — Sanity Studio.

## Desarrollo

```bash
npm install
npm run dev
```

Validación de producción:

```bash
npm run lint
npm run build
```

## Variables

Consulta `.env.example` para configurar Sanity. Las credenciales del bucket y de Inmodata deberán incorporarse únicamente en el servidor cuando las integraciones estén listas; no deben exponerse en componentes cliente.

## Propiedad

Construido por [Builker](https://builker.com) con tecnología de datos prevista de [Inmodata](https://inmodata.io).
