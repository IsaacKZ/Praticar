$folder = $PSScriptRoot | Split-Path -Parent
$htmlFiles = Get-ChildItem -Path $folder -Filter '*.html' | Where-Object { $_.Name -ne 'index_old.html' }

foreach ($file in $htmlFiles) {
    $content = Get-Content $file.FullName -Raw
    
    # Very loose regex for the title
    $content = $content -replace 'Editor de C[óó]digo(?! C#)', 'Editor de Código C#'
    $content = $content -replace 'c[óó]digo C!', 'código C#!'
    $content = $content -replace 'main\.c', 'Program.cs'
    
    # Catching textarea with ANY whitespace variations
    $pattern = '(?s)<textarea\s+id="code-input".*?>.*?</textarea>'
    $newTextarea = '<textarea id="code-input" spellcheck="false">using System;`n`nConsole.WriteLine("Hello, World!");</textarea>'
    $content = [regex]::Replace($content, $pattern, $newTextarea)

    Set-Content $file.FullName $content -Encoding UTF8
    Write-Host "Aggressively Fixed: $($file.Name)"
}
