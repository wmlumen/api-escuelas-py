# Contribuyendo a API Establecimientos Educativos Paraguay

¡Gracias por tu interés en contribuir! Este documento te guía sobre cómo hacerlo.

## 🎯 Código de Conducta

Por favor, lee y respeta nuestro código de conducta en todas las interacciones.

## 🐛 Reportar Bugs

### Antes de reportar
- Verifica que el bug no haya sido reportado
- Actualiza a la versión más reciente
- Lee la documentación

### Al reportar incluye
- Descripción clara del problema
- Pasos para reproducir
- Comportamiento actual vs esperado
- URL del endpoint (si aplica)
- Parámetros utilizados

**Ejemplo:**
```
Título: Error al filtrar por departamento en año 2014

Pasos para reproducir:
1. GET /api/establecimientos?anio=2014&departamento=CENTRAL
2. Resultado esperado: 50 registros
3. Resultado actual: Error 500

Detalles: El error ocurre solo con años anteriores a 2023
```

## 💡 Sugerencias de Features

1. Crea un issue con "Feature request:" en el título
2. Describe el caso de uso
3. Explica por qué sería útil

## 📝 Pull Requests

### Proceso

1. **Fork** el repositorio
2. **Clone** tu fork
   ```bash
   git clone https://github.com/tu-usuario/api-escuelas-py.git
   cd api-escuelas-py
   ```

3. **Crea una rama** con nombre descriptivo
   ```bash
   git checkout -b feature/agregar-filtro-region
   ```

4. **Realiza cambios** y haz commits descriptivos
   ```bash
   git commit -m "Agregar filtro por región administrativa"
   ```

5. **Push** a tu fork
   ```bash
   git push origin feature/agregar-filtro-region
   ```

6. **Abre un Pull Request** con descripción detallada

### Estándares de Código

- **Estilo:** JavaScript ES6+
- **Indentación:** 2 espacios
- **Comillas:** Simple quotes
- **Punto y coma:** Requerido
- **Nombre de variables:** camelCase
- **Nombres de funciones:** camelCase

**Ejemplo:**
```javascript
export default async function handler(req, res) {
  const { anio = 2018, departamento } = req.query;
  
  if (!['2014', '2018', '2023'].includes(String(anio))) {
    return res.status(400).json({ error: 'Año inválido' });
  }
  
  // Resto del código...
}
```

### Testing

- Prueba localmente con `npm run dev`
- Verifica que funcione en diferentes años
- Prueba con parámetros inválidos

### Documentación

Si tu PR afecta:
- **API:** Actualiza [API_DOCUMENTATION.md](./API_DOCUMENTATION.md)
- **Instalación:** Actualiza [README.md](./README.md)
- **Features nuevas:** Documenta en README.md

### Commit Messages

Usa mensajes claros y descriptivos:

```
✨ Agregar filtro por región
🐛 Corregir paginación en año 2014
📚 Actualizar documentación de endpoints
🔧 Optimizar queries a MEC
```

**Prefijos recomendados:**
- ✨ Feature
- 🐛 Bug fix
- 📚 Documentation
- 🔧 Chore/Refactor
- 🚀 Performance
- 🔒 Security

## 🚀 Proceso de Review

1. Revisamos tu PR en 24-48 horas
2. Podemos solicitar cambios
3. Una vez aprobado, se merge a main
4. Se deploya automáticamente a Vercel

## 📋 Checklist antes de enviar PR

- [ ] Código sigue estándares del proyecto
- [ ] Incluye documentación actualizada
- [ ] Probado localmente
- [ ] Sin consoles.log() de debug
- [ ] CORS configurado correctamente
- [ ] Maneja errores apropiadamente

## 🎓 Desarrollo Local

```bash
# Instalar dependencias
npm install

# Ejecutar en local
npm run dev

# Probar endpoint
curl http://localhost:3000/api/establecimientos?anio=2023
```

## 📞 Preguntas

- Abre un [Discussion](../../discussions)
- Revisa [API_DOCUMENTATION.md](./API_DOCUMENTATION.md)
- Contacta al equipo

---

¡Gracias por contribuir! 🎉
