# 📋 Instrucciones para Crear Repositorio en GitHub

## Paso 1: Preparar el Proyecto

✅ Ya está listo. El proyecto incluye:
- ✓ README.md - Descripción del proyecto
- ✓ LICENSE - Licencia MIT
- ✓ .gitignore - Archivos a ignorar
- ✓ CONTRIBUTING.md - Guía de contribuciones
- ✓ API_DOCUMENTATION.md - Documentación completa
- ✓ package.json - Dependencias
- ✓ vercel.json - Configuración de deploy

---

## Paso 2: Crear Repositorio en GitHub

### Opción A: Web (Recomendado)

1. Ve a https://github.com/new
2. Completa el formulario:

   | Campo | Valor |
   |-------|-------|
   | **Repository name** | `api-escuelas-py` |
   | **Description** | `API REST para datos de establecimientos educativos de Paraguay (2014, 2018, 2023)` |
   | **Visibility** | `Public` |
   | **Add README** | ✓ No (ya lo tenemos) |
   | **Add .gitignore** | ✓ No (ya existe) |
   | **Choose license** | ✓ No (ya tenemos MIT) |

3. Click en **Create repository**

---

## Paso 3: Inicializar Git Localmente

En tu terminal, dentro de `vercel-api-mec/`:

```bash
# Inicializar repositorio
git init

# Agregar todos los archivos
git add .

# Primer commit
git commit -m "🚀 Initial commit: API Establecimientos Educativos"

# Cambiar rama a main (si no está)
git branch -M main

# Agregar remote (reemplaza con tu URL de GitHub)
git remote add origin https://github.com/TU_USUARIO/api-escuelas-py.git

# Hacer push
git push -u origin main
```

---

## Paso 4: Configurar GitHub (Opcional pero Recomendado)

### Settings → General
- [x] Habilitar Wiki
- [x] Habilitar Issues
- [x] Habilitar Discussions
- [x] Habilitar Projects

### Settings → Branches
- [x] Proteger rama `main`
- [x] Requerir PR reviews
- [x] Requerir check de CI

### Settings → Actions
- [x] Habilitar GitHub Actions para CI/CD

---

## Paso 5: Crear Issues Iniciales

Crea issues para organizar el trabajo:

```
Issue 1: Ampliar datos con más años
Issue 2: Agregar búsqueda full-text
Issue 3: Crear dashboard de uso
Issue 4: Agregar tests
```

---

## Paso 6: Configurar Vercel (Opcional)

Si quieres deploy automático:

1. Ve a https://vercel.com
2. Import proyecto desde GitHub
3. Configura variables de entorno (si las necesitas)
4. Deploy automático en cada push a `main`

---

## Estructura de Ramas Sugerida

```
main (producción)
  ├── development (desarrollo)
  ├── feature/filtro-region
  ├── feature/search-full-text
  └── docs/update-guides
```

---

## 🎯 Checklist Antes de Hacer Push

```bash
# Verificar que todo está limpio
git status

# Ver cambios
git diff

# Agregar todos los cambios
git add .

# Commit con mensaje descriptivo
git commit -m "📝 Agregar documentación de repositorio"

# Hacer push
git push origin main
```

---

## 📊 Badges para el README

Puedes agregar badges al README.md:

```markdown
[![GitHub license](https://img.shields.io/github/license/tu-usuario/api-escuelas-py)](./LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/tu-usuario/api-escuelas-py)](../../issues)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D%2014-brightgreen)](https://nodejs.org)
[![Vercel Status](https://img.shields.io/badge/vercel-deployed-brightgreen)](https://tu-api.vercel.app)
```

---

## 🔐 Secretos y Variables

Si usas GitHub Secrets (para CI/CD):

1. Settings → Secrets and variables → Actions
2. Agregar variables si las necesitas

---

## 📈 Seguimiento del Proyecto

- **GitHub Projects** - Gestionar tareas
- **Milestones** - Versiones (v1.0, v1.1, etc)
- **Releases** - Publicar versiones
- **Discussions** - Preguntas de comunidad

---

## 💬 Primeros Pasos Después de Crear Repo

1. ✅ Agregar descripción en "About"
2. ✅ Agregar topics: `api`, `mec`, `paraguay`, `educacion`
3. ✅ Crear issues iniciales
4. ✅ Invitar colaboradores
5. ✅ Configurar branch protection

---

## 🚀 Deploy a Vercel

```bash
# Instalar Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel

# Obtener URL pública
vercel ls
```

---

## ❓ Comandos Git Útiles

```bash
# Ver historial
git log --oneline

# Cambiar de rama
git checkout development

# Crear rama nueva
git checkout -b feature/mi-feature

# Hacer pull de cambios
git pull origin main

# Ver ramas locales y remotas
git branch -a

# Eliminar rama local
git branch -d feature/mi-feature

# Eliminar rama remota
git push origin --delete feature/mi-feature
```

---

¡Tu repositorio está listo para subir! 🎉

**Última actualización:** 2026-04-17
