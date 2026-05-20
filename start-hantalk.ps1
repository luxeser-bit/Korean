$ErrorActionPreference = "Stop"

$ProjectRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$Port = 5173
$Url = "http://127.0.0.1:$Port"

Set-Location $ProjectRoot

function Find-Npm {
  $command = Get-Command npm.cmd -ErrorAction SilentlyContinue
  if ($command) {
    return $command.Source
  }

  $command = Get-Command npm -ErrorAction SilentlyContinue
  if ($command) {
    return $command.Source
  }

  $commonPaths = @(
    "$env:ProgramFiles\nodejs\npm.cmd",
    "${env:ProgramFiles(x86)}\nodejs\npm.cmd",
    "$env:APPDATA\npm\npm.cmd"
  )

  foreach ($path in $commonPaths) {
    if ($path -and (Test-Path $path)) {
      return $path
    }
  }

  return $null
}

function Find-Node {
  $command = Get-Command node.exe -ErrorAction SilentlyContinue
  if ($command) {
    return $command.Source
  }

  $command = Get-Command node -ErrorAction SilentlyContinue
  if ($command) {
    return $command.Source
  }

  $commonPaths = @(
    "$env:ProgramFiles\nodejs\node.exe",
    "${env:ProgramFiles(x86)}\nodejs\node.exe"
  )

  foreach ($path in $commonPaths) {
    if ($path -and (Test-Path $path)) {
      return $path
    }
  }

  return $null
}

$Npm = Find-Npm
$Node = Find-Node

if (-not $Npm -or -not $Node) {
  Write-Host ""
  Write-Host "Node.js/npm не найден." -ForegroundColor Yellow
  Write-Host "Установите Node.js LTS с https://nodejs.org/, затем запустите этот ярлык снова."
  Write-Host ""
  Read-Host "Нажмите Enter, чтобы закрыть окно"
  exit 1
}

$ViteEntry = "$ProjectRoot\node_modules\vite\bin\vite.js"

if (-not (Test-Path $ViteEntry)) {
  Write-Host "Первый запуск: устанавливаю зависимости React/Vite..."
  & $Npm install --ignore-scripts
  if ($LASTEXITCODE -ne 0) {
    Write-Host ""
    Write-Host "Не удалось установить зависимости." -ForegroundColor Red
    Read-Host "Нажмите Enter, чтобы закрыть окно"
    exit $LASTEXITCODE
  }
}

Write-Host "Запускаю HanTalk Korean: $Url"

Start-Job -ScriptBlock {
  param($TargetUrl)
  Start-Sleep -Seconds 3
  Start-Process $TargetUrl
} -ArgumentList $Url | Out-Null

& $Node $ViteEntry --host 127.0.0.1 --port $Port --strictPort

if ($LASTEXITCODE -ne 0) {
  Write-Host ""
  Write-Host "Сервер остановился с ошибкой. Возможно, порт $Port уже занят." -ForegroundColor Red
  Read-Host "Нажмите Enter, чтобы закрыть окно"
}
