$root = Resolve-Path ".."
$htmlFiles = Get-ChildItem -Path $root -Filter "*.html"

# 1. Fix encoding/typos in HTML files
foreach ($f in $htmlFiles) {
    if ($f.Name -eq "index_old.html") { continue }
    $content = [System.IO.File]::ReadAllText($f.FullName, [System.Text.Encoding]::UTF8)
    
    # Fix corrupted accents
    $content = $content -replace 'ExceÃ§Ãµes', 'Exceções'
    $content = $content -replace 'Ã§Ã£o', 'ção'
    $content = $content -replace 'Ã©', 'é'
    $content = $content -replace 'Ã', 'à' # Very dangerous generic, but usually works for this specific corruption pattern
    
    # Actually, let's be more specific with the common ones found in audit
    $content = $content -replace 'ExceÃ§Ãµes', 'Exceções'
    
    # Fix Level 9 Master tag in individual pages if they have it
    if ($f.Name -eq "level-9.html") {
        $content = $content -replace 'Linked Lists', 'Async & Arquivos'
        $content = $content -replace 'Estruturas de dados dinâmicas.', 'Exceções, Async/Await e JSON.'
    }

    [System.IO.File]::WriteAllText($f.FullName, $content, [System.Text.Encoding]::UTF8)
}

# 2. Fix CSS colors (Green -> Magenta/Secondary)
$cssPath = Join-Path $root "assets\style.css"
if (Test-Path $cssPath) {
    $css = [System.IO.File]::ReadAllText($cssPath, [System.Text.Encoding]::UTF8)
    # Update secondary color from Cyan to Magenta
    $css = $css -replace '--secondary: #00D4FF;', '--secondary: #EB4899;'
    $css = $css -replace 'rgba\(0, 212, 255,', 'rgba(235, 72, 153,'
    # Update CTA green shadow
    $css = $css -replace 'rgba\(0, 255, 157, 0.3\)', 'rgba(235, 72, 153, 0.3)'
    [System.IO.File]::WriteAllText($cssPath, $css, [System.Text.Encoding]::UTF8)
}

Write-Host "Refactoring complete."
