# Script PowerShell para hacer push a GitHub automáticamente
# Ejecutar en PowerShell: .\push_github.ps1

Write-Host "`n╔═══════════════════════════════════════════════════════╗" -ForegroundColor Cyan
Write-Host "║   🚀 PUSH A GITHUB - API ESCUELAS PY              ║" -ForegroundColor Cyan
Write-Host "╚═══════════════════════════════════════════════════════╝`n" -ForegroundColor Cyan

# Navegar al directorio
$projectPath = "c:\Users\HP 250 G10\Documents\GITHUT\API-EscuelasPy\vercel-api-mec"
Set-Location $projectPath

Write-Host "📁 Directorio: $projectPath`n" -ForegroundColor Yellow

# 1. Verificar que estamos en main
Write-Host "1️⃣  Verificando rama..." -ForegroundColor Green
$currentBranch = git rev-parse --abbrev-ref HEAD
Write-Host "   Rama actual: $currentBranch`n"

if ($currentBranch -ne "main") {
    Write-Host "   ⚠️  No estamos en main, cambiando..." -ForegroundColor Yellow
    git checkout -b main
}

# 2. Verificar estado
Write-Host "2️⃣  Verificando estado de git..." -ForegroundColor Green
$status = git status --porcelain
if ($status) {
    Write-Host "   ⚠️  Hay cambios sin commitar:" -ForegroundColor Yellow
    Write-Host $status
    Write-Host "`n   ¿Continuar? (s/n): " -NoNewline
    $response = Read-Host
    if ($response -ne "s" -and $response -ne "S") {
        Write-Host "   ❌ Cancelado" -ForegroundColor Red
        exit 1
    }
} else {
    Write-Host "   ✅ Todo está limpio`n"
}

# 3. Solicitar datos de GitHub si no está configurado
Write-Host "3️⃣  Verificando remote..." -ForegroundColor Green
$remoteUrl = git remote get-url origin 2>$null
if (-not $remoteUrl) {
    Write-Host "   No hay remote configurado`n" -ForegroundColor Yellow
    Write-Host "   Ingresa tu usuario de GitHub: " -NoNewline
    $user = Read-Host
    Write-Host "   Ingresa el nombre del repositorio: " -NoNewline
    $repo = Read-Host
    
    $remoteUrl = "https://github.com/$user/$repo.git"
    Write-Host "`n   Agregando remote: $remoteUrl" -ForegroundColor Cyan
    git remote add origin $remoteUrl
} else {
    Write-Host "   ✅ Remote: $remoteUrl`n"
}

# 4. Hacer push
Write-Host "4️⃣  Haciendo push a GitHub..." -ForegroundColor Green
Write-Host "   Ejecutando: git push -u origin main`n"

try {
    git push -u origin main
    if ($LASTEXITCODE -eq 0) {
        Write-Host "`n✅ ¡Push exitoso!`n" -ForegroundColor Green
        Write-Host "📊 URL del repositorio:" -ForegroundColor Cyan
        Write-Host "   $remoteUrl`n"
        
        # Extraer usuario y repo
        $matches = [regex]::Matches($remoteUrl, 'github\.com/([^/]+)/(.+)\.git')
        if ($matches.Count -gt 0) {
            $user = $matches[0].Groups[1].Value
            $repo = $matches[0].Groups[2].Value
            $repoUrl = "https://github.com/$user/$repo"
            Write-Host "🌐 Abre en navegador: $repoUrl`n"
        }
        
        Write-Host "⏭️  Próximos pasos:" -ForegroundColor Yellow
        Write-Host "   1. Abre https://vercel.com" -ForegroundColor Gray
        Write-Host "   2. Click 'Add New' > 'Project'" -ForegroundColor Gray
        Write-Host "   3. 'Import Git Repository'" -ForegroundColor Gray
        Write-Host "   4. Selecciona el repositorio" -ForegroundColor Gray
        Write-Host "   5. Click 'Deploy'`n" -ForegroundColor Gray
        
    } else {
        Write-Host "`n❌ Error en el push" -ForegroundColor Red
        exit 1
    }
} catch {
    Write-Host "`n❌ Error: $_" -ForegroundColor Red
    exit 1
}

Write-Host "╔═══════════════════════════════════════════════════════╗" -ForegroundColor Green
Write-Host "║              ✅ TODO COMPLETADO                       ║" -ForegroundColor Green
Write-Host "╚═══════════════════════════════════════════════════════╝`n" -ForegroundColor Green
