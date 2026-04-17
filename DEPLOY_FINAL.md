# 🚀 GUÍA FINAL: Deploy a GitHub + Vercel

## ✅ Estado Actual

```
✓ Repositorio git inicializado
✓ Primer commit realizado (1282 insertiones)
✓ Rama: main
✓ Ubicación: C:\Users\HP 250 G10\Documents\GITHUT\API-EscuelasPy\vercel-api-mec
```

---

## 📋 PASO 1: Crear Repositorio en GitHub

### 1.1 Ir a GitHub
```
https://github.com/new
```

### 1.2 Rellenar el formulario

| Campo | Valor |
|-------|-------|
| **Repository name** | `api-escuelas-py` |
| **Description** | `API REST para datos de establecimientos educativos de Paraguay (2014, 2018, 2023)` |
| **Visibility** | `Public` |
| **Add README** | ❌ NO |
| **Add .gitignore** | ❌ NO |
| **Add license** | ❌ NO |

### 1.3 Click "Create repository"

**⚠️ IMPORTANTE:** No hagas nada más en esta página. Espera a que aparezca "Quick setup".

---

## 🔗 PASO 2: Conectar tu Git Local con GitHub

Después de crear el repo, GitHub mostrará:

```bash
git remote add origin https://github.com/wmlumen/api-escuelas-py.git
git branch -M main
git push -u origin main
```

### Ejecutar en PowerShell:

```powershell
cd "c:\Users\HP 250 G10\Documents\GITHUT\API-EscuelasPy\vercel-api-mec"

git remote add origin https://github.com/wmlumen/api-escuelas-py.git
git push -u origin main
```

**Nota:** Si pide autenticación:
- Usa GitHub CLI o Token de acceso personal
- [Crear token aquí](https://github.com/settings/tokens)

---

## 🔐 Autenticación con GitHub (Si Pide Contraseña)

### Opción A: GitHub CLI (Recomendado)

```bash
# Instalar GitHub CLI
winget install GitHub.cli

# Autenticarse
gh auth login

# Usar SSH para push (más seguro)
git remote set-url origin git@github.com:wmlumen/api-escuelas-py.git
```

### Opción B: Token Personal

1. Ve a https://github.com/settings/tokens
2. Click "Generate new token (classic)"
3. Nombre: `api-escuelas-py-token`
4. Selecciona scopes:
   - ✓ `repo` (completo)
   - ✓ `workflow`
5. Click "Generate token"
6. **Copia el token** (no se verá de nuevo)

Luego en PowerShell:

```powershell
git remote add origin https://TU_TOKEN@github.com/wmlumen/api-escuelas-py.git
git push -u origin main
```

---

## 📊 PASO 3: Verificar en GitHub

Después del push:

1. Ve a https://github.com/wmlumen/api-escuelas-py
2. Verifica que ves:
   - ✓ Todos los archivos (`api/`, `README.md`, etc)
   - ✓ 11 commits/archivos
   - ✓ README mostrado en la página principal

3. Agregar descripción del repositorio:
   - Click "Edit" en "About"
   - Description: `API de establecimientos educativos con datos 2014, 2018, 2023`
   - Website: (tu URL de Vercel cuando esté lista)
   - Topics: `api`, `mec`, `paraguay`, `educacion`, `rest-api`

---

## 🚀 PASO 4: Deploy a Vercel

### 4.1 Crear Cuenta en Vercel (Si no la tienes)

```
https://vercel.com/signup
```

Selecciona "Continue with GitHub"

### 4.2 Conectar Repositorio

1. Login a https://vercel.com
2. Click "Add New" → "Project"
3. Selecciona "Import Git Repository"
4. Busca `api-escuelas-py`
5. Click "Import"

### 4.3 Configuración del Proyecto

**Framework Preset:** Dejar vacío (es Node.js básico)

**Environment Variables:** Dejar en blanco (no necesita)

**Root Directory:** `.` (por defecto)

Click **"Deploy"**

---

## 📈 PASO 5: Configuración Post-Deploy

### Dominio Personalizado (Opcional)

En Vercel:
1. Settings → Domains
2. Agregar dominio personalizado si tienes uno

### Custom Domain FREE (Alternativa)

1. Ve a https://freenom.com
2. Obtén un dominio `.ml` o `.tk` gratis
3. Configura DNS en Vercel

---

## ✅ Verificación Final

### Después de GitHub:
```
✓ Repositorio creado
✓ Código subido
✓ README visible
✓ Topics agregados
```

### Después de Vercel:
```
✓ Proyecto importado
✓ Deploy completado
✓ URL pública generada: https://api-escuelas-py.vercel.app
✓ API funcionando en línea
```

### Probar API en línea:

```bash
# Año 2023
https://api-escuelas-py.vercel.app/api/establecimientos?anio=2023&limit=10

# Año 2018
https://api-escuelas-py.vercel.app/api/establecimientos?anio=2018&departamento=CENTRAL

# Información de años
https://api-escuelas-py.vercel.app/api/anos
```

---

## 🔄 Workflow Futuro

Para hacer cambios en el futuro:

```bash
# 1. Hacer cambios en tu código

# 2. Commit
git add .
git commit -m "📝 Descripción del cambio"

# 3. Push
git push origin main

# 4. Vercel se desplegará automáticamente
```

---

## 🎯 Orden de Ejecución

### ⏱️ Tiempo total: ~10 minutos

```
1. Crear repo en GitHub              (2 min)
2. Push desde PowerShell             (2 min)
3. Verificar en GitHub               (1 min)
4. Crear proyecto en Vercel          (2 min)
5. Esperar deploy                    (2 min)
6. Probar URL pública               (1 min)
```

---

## 📞 Comandos Rápidos

### PowerShell

```powershell
# Navegar al proyecto
cd "c:\Users\HP 250 G10\Documents\GITHUT\API-EscuelasPy\vercel-api-mec"

# Ver logs
git log --oneline

# Ver estado
git status

# Push
git push origin main

# Ver ramas
git branch -a
```

---

## ❓ Troubleshooting

### Error: "Repository not found"
→ Verifica que la URL sea correcta: `https://github.com/wmlumen/api-escuelas-py.git`

### Error: "Authentication failed"
→ Usa GitHub CLI o token personal

### Vercel no detecta cambios
→ Verifica que el push llegó a GitHub (mira en `github.com/wmlumen/api-escuelas-py`)

### API no responde
→ Espera 5 minutos a que Vercel termine el deploy
→ Revisa "Deployments" en Vercel dashboard

---

## 🎉 ¡Éxito!

Una vez completado:

- ✅ Tu API está **pública en GitHub**
- ✅ Se despliega automáticamente en **Vercel**
- ✅ Puedes compartir la URL: `https://api-escuelas-py.vercel.app`
- ✅ Cualquiera puede acceder a los datos
- ✅ Puedes agregar colaboradores

**URL Final de la API:**
```
https://api-escuelas-py.vercel.app/api/establecimientos
```

---

**Última actualización:** 2026-04-17
**Usuario:** wmlumen
**Email:** wmlumen@gmail.com
