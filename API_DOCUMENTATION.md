# 📚 Documentación de API - Establecimientos Educativos Paraguay

## 🎯 Propósito
API para consultar datos de **establecimientos e instituciones educativas** de Paraguay con información de múltiples años (2014, 2018, 2023).

---

## 📅 Años Disponibles

| Año | Tipo | Registros | Fuente |
|-----|------|-----------|--------|
| 2014 | Establecimientos Escolares | ~8,000 | MEC Paraguay |
| 2018 | Instituciones Educativas | ~8,500 | MEC Paraguay |
| 2023 | Establecimientos Escolares | ~8,800 | MEC Paraguay |

---

## 🔌 Endpoints Principales

### 1. **Información de Años Disponibles**
- **Ruta:** `/api/anos`
- **Método:** GET
- **Descripción:** Obtiene información sobre los años disponibles y parámetros de consulta

**Respuesta:**
```json
{
  "success": true,
  "anos_disponibles": {
    "2014": { ... },
    "2018": { ... },
    "2023": { ... }
  },
  "ejemplos_uso": { ... }
}
```

---

### 2. **Consultar Establecimientos/Instituciones**
- **Ruta:** `/api/establecimientos`
- **Método:** GET
- **Descripción:** Accede a datos de instituciones educativas con múltiples opciones de filtrado

**Parámetros de consulta:**

| Parámetro | Tipo | Default | Descripción |
|-----------|------|---------|-------------|
| `anio` | number | 2018 | Año de consulta: 2014, 2018 ó 2023 |
| `departamento` | string | - | Filtrar por nombre/código de departamento |
| `distrito` | string | - | Filtrar por nombre/código de distrito |
| `nombre` | string | - | Buscar por nombre de institución |
| `numero` | string | - | Filtrar por código de institución |
| `limit` | number | 100 | Resultados por página (max: 1000) |
| `offset` | number | 0 | Desplazamiento para paginación |

---

## 📝 Ejemplos de Uso

### Obtener datos del año 2014
```
GET /api/establecimientos?anio=2014
```

### Buscar instituciones en un departamento (2023)
```
GET /api/establecimientos?anio=2023&departamento=CENTRAL&limit=50
```

### Filtrar por año y zona
```
GET /api/establecimientos?anio=2018&departamento=ITAPUA&limit=100
```

### Búsqueda por nombre de institución
```
GET /api/establecimientos?anio=2023&nombre=Escuela%20Nacional
```

### Obtener institución específica por código
```
GET /api/establecimientos?anio=2014&numero=1001051
```

### Paginación (primeros 50 registros)
```
GET /api/establecimientos?anio=2023&limit=50&offset=0
```

### Página siguiente (registros 51-100)
```
GET /api/establecimientos?anio=2023&limit=50&offset=50
```

---

## 📊 Estructura de Respuesta

```json
{
  "success": true,
  "ano": 2014,
  "tipo_dato": "establecimientos",
  "total_encontrados": 350,
  "pagina": {
    "limit": 50,
    "offset": 0,
    "resultado_inicio": 1,
    "resultado_fin": 50,
    "total_paginas": 7
  },
  "filtros_aplicados": {
    "anio": "2014",
    "departamento": "CENTRAL",
    "distrito": null,
    "nombre": null,
    "numero": null
  },
  "data": [
    {
      "id": "EST_1001051",
      "codigo_institucion": "1001051",
      "nombre_institucion": "Escuela X",
      "nombre_departamento": "CENTRAL",
      "nombre_distrito": "DISTRITO Y",
      "direccion": "Calle Principal",
      "anio": 2014,
      ...otros_campos
    }
  ],
  "metadata": {
    "source": "MEC Paraguay",
    "years_disponibles": ["2014", "2018", "2023"],
    "current_year": "2014",
    "estadisticas_ano": {
      "departamentos": 18,
      "distritos": 220,
      "establecimientos_registrados": 8000
    },
    "last_update": "2026-04-17T..."
  }
}
```

---

## ✅ Respuesta Exitosa (200 OK)

```json
{
  "success": true,
  "total_encontrados": 45,
  "pagina": {
    "limit": 50,
    "offset": 0,
    "total_paginas": 1
  },
  "data": [...]
}
```

---

## ❌ Respuestas de Error

**Año no válido (400 Bad Request):**
```json
{
  "success": false,
  "error": "Año no soportado: 2020",
  "anos_disponibles": ["2014", "2018", "2023"]
}
```

**Error en servidor (500 Internal Server Error):**
```json
{
  "success": false,
  "error": "Error al procesar la solicitud",
  "message": "Detalles específicos del error"
}
```

**Método no permitido (405):**
```json
{
  "error": "Método no permitido"
}
```

---

## 🔄 CORS

✅ Todos los endpoints tienen CORS habilitado para consultas desde cualquier origen.

```
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: GET, OPTIONS
```

---

## 🎓 Casos de Uso Comunes

### 1. Listar todas las escuelas de un departamento específico
```
/api/establecimientos?anio=2023&departamento=ITAPUA&limit=200
```

### 2. Comparar instituciones entre años
```
# Año 2014
/api/establecimientos?anio=2014&departamento=CENTRAL

# Año 2023
/api/establecimientos?anio=2023&departamento=CENTRAL
```

### 3. Buscar escuela por nombre
```
/api/establecimientos?anio=2023&nombre=Colegio%20Nacional
```

### 4. Exportar datos en bloques
```
# Bloque 1
/api/establecimientos?anio=2023&limit=500&offset=0

# Bloque 2
/api/establecimientos?anio=2023&limit=500&offset=500
```

---

## 📌 Notas Importantes

- El año **por defecto es 2018** si no se especifica
- Máximo 1000 resultados por consulta
- La **paginación comienza en offset=0**
- Los filtros se pueden **combinar** para búsquedas más precisas
- Todos los años contienen **18 departamentos**

---

**Última actualización:** 2026-04-17  
**Fuente:** MEC Paraguay - Ministerio de Educación y Ciencias
