# 🏫 API Establecimientos Educativos Paraguay

API REST para consultar datos de instituciones educativas de Paraguay con información de múltiples años (2014, 2018, 2023).

## 📋 Descripción

Esta API proporciona acceso a una base de datos completa de establecimientos e instituciones educativas en Paraguay, incluyendo:

- ✅ Datos de **3 años diferentes** (2014, 2018, 2023)
- 📍 Información de ubicación (departamento, distrito, localidad)
- 🔍 Múltiples opciones de filtrado y búsqueda
- 📊 Paginación de resultados
- 🌐 CORS habilitado para consultas web

**Fuente de datos:** MEC Paraguay (Ministerio de Educación y Ciencias)

---

## 🚀 Quick Start

### Instalación Local

```bash
# Clonar repositorio
git clone https://github.com/tu-usuario/api-escuelas-py.git
cd api-escuelas-py

# Instalar dependencias
npm install

# Deploy local (Vercel)
npm run dev
```

### Deploy a Vercel

```bash
npm install -g vercel
npm run deploy
```

---

## 📚 Endpoints

### 1. Información de Años Disponibles
```
GET /api/anos
```
Retorna información sobre los años disponibles y ejemplos de uso.

### 2. Consultar Establecimientos
```
GET /api/establecimientos
```

**Parámetros:**
- `anio` (number): Año de consulta - 2014, 2018 ó 2023 (default: 2018)
- `departamento` (string): Filtrar por departamento
- `distrito` (string): Filtrar por distrito
- `nombre` (string): Buscar por nombre de institución
- `numero` (string): Filtrar por código
- `limit` (number): Resultados por página (default: 100)
- `offset` (number): Desplazamiento (default: 0)

**Ejemplo:**
```
GET /api/establecimientos?anio=2023&departamento=CENTRAL&limit=50
```

### 3. Resumen por Departamentos
```
GET /api/departamentos
```
Obtiene resumen de departamentos y cantidad de instituciones.

---

## 📊 Estructura de Datos

Cada institución contiene:

```json
{
  "nombre_institucion": "Escuela X",
  "codigo_institucion": "1001051",
  "nombre_departamento": "ALTO PARANA",
  "nombre_distrito": "CIUDAD DEL ESTE",
  "direccion": "Calle Principal",
  "anio": 2014
}
```

---

## 🎯 Casos de Uso

### Listar instituciones de un año
```bash
curl "https://api.ejemplo.com/api/establecimientos?anio=2023"
```

### Filtrar por departamento y paginación
```bash
curl "https://api.ejemplo.com/api/establecimientos?anio=2023&departamento=CENTRAL&limit=50&offset=0"
```

### Búsqueda por nombre
```bash
curl "https://api.ejemplo.com/api/establecimientos?anio=2023&nombre=Colegio%20Nacional"
```

---

## 📁 Estructura del Proyecto

```
vercel-api-mec/
├── api/
│   ├── establecimientos.js      # Endpoint principal (multi-año)
│   ├── anos.js                   # Info de años disponibles
│   └── departamentos.js          # Resumen de departamentos
├── package.json                  # Dependencias
├── vercel.json                   # Configuración Vercel
├── API_DOCUMENTATION.md          # Documentación detallada
└── README.md                     # Este archivo
```

---

## 🔧 Configuración

### Variables de Entorno
No se requieren variables de entorno para esta API.

### Vercel
La API está configurada para desplegarse automáticamente en Vercel:

```json
{
  "version": 2,
  "builds": [
    {
      "src": "api/**/*.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/api/(.*)",
      "dest": "/api/$1"
    }
  ]
}
```

---

## 📈 Años Disponibles

| Año | Tipo | Registros |
|-----|------|-----------|
| 2014 | Establecimientos | ~8,000 |
| 2018 | Instituciones | ~8,500 |
| 2023 | Establecimientos | ~8,800 |

---

## 🔄 CORS

Todos los endpoints tienen CORS habilitado para consultas desde cualquier origen.

```
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: GET, OPTIONS
```

---

## 📝 Documentación Completa

Para más detalles, consulta [API_DOCUMENTATION.md](./API_DOCUMENTATION.md)

---

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el repositorio
2. Crea una rama (`git checkout -b feature/mi-feature`)
3. Commit los cambios (`git commit -am 'Agrega feature'`)
4. Push a la rama (`git push origin feature/mi-feature`)
5. Abre un Pull Request

---

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Ver [LICENSE](./LICENSE) para más detalles.

---

## 🐛 Reportar Problemas

Si encuentras un bug, por favor abre un [issue](../../issues) con:

- Descripción del problema
- URL del endpoint afectado
- Parámetros utilizados
- Respuesta obtenida

---

## 📞 Contacto

- **Autor:** Tu Nombre
- **Email:** tu-email@ejemplo.com
- **GitHub:** [@tu-usuario](https://github.com/tu-usuario)

---

## 📊 Estadísticas

- **Total de Departamentos:** 18
- **Total de Distritos:** 220+
- **Total de Registros:** 25,300+ (combinado 3 años)
- **Uptime:** 99.9% (Vercel)

---

## ✅ Requisitos

- Node.js 14+
- npm o yarn
- Vercel CLI (para deploy)

---

**Última actualización:** 2026-04-17  
**Fuente de datos:** MEC Paraguay - Ministerio de Educación y Ciencias
