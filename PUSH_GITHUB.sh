#!/bin/bash
# Script para conectar con GitHub y hacer push

# ========================================
# ⚠️  IMPORTANTE: Antes de ejecutar esto
# ========================================
# 1. Ve a https://github.com/new
# 2. Crea un repositorio llamado: api-escuelas-py
# 3. NO agregues README, .gitignore ni license
# 4. Copia el comando push que GitHub te muestre
# 5. O usa el comando abajo reemplazando TU_USUARIO

# ========================================
# OPCIÓN 1: Copiar el comando de GitHub
# ========================================
# GitHub te mostrará algo como:
# git remote add origin https://github.com/wmlumen/api-escuelas-py.git
# git branch -M main
# git push -u origin main

# ========================================
# OPCIÓN 2: Ejecutar este script
# ========================================

# Configurar remote
git remote add origin https://github.com/wmlumen/api-escuelas-py.git

# Verificar que todo está listo
echo "✓ Verificando estado..."
git status

# Push a GitHub
echo "📤 Subiendo a GitHub..."
git push -u origin main

echo "✓ ¡Listo! Tu repositorio está en GitHub"
echo "Url: https://github.com/wmlumen/api-escuelas-py"
