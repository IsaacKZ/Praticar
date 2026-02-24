$folder = $PSScriptRoot | Split-Path -Parent
$htmlFiles = Get-ChildItem -Path $folder -Filter '*.html' | Where-Object { $_.Name -ne 'index_old.html' }

foreach ($file in $htmlFiles) {
    $content = Get-Content $file.FullName -Raw
    
    # Simple replacements
    $content = $content -replace 'Editor de Código(?!\s+C#)', 'Editor de Código C#'
    $content = $content -replace 'Editor de CÓdigo(?!\s+C#)', 'Editor de Código C#'
    $content = $content -replace 'seu código C!', 'seu código C#!'
    $content = $content -replace 'main\.c', 'Program.cs'
    
    # Catching textarea - keeping it simple and using real newlines
    $pattern = '(?s)<textarea\s+id="code-input".*?>.*?</textarea>'
    $newCode = 'using System;' + [Environment]::NewLine + [Environment]::NewLine + 'Console.WriteLine("Hello, World!");'
    $newTextarea = '<textarea id="code-input" spellcheck="false">' + $newCode + '</textarea>'
    
    $content = [regex]::Replace($content, $pattern, $newTextarea)

    [System.IO.File]::WriteAllText($file.FullName, $content, [System.Text.Encoding]::UTF8)
    Write-Host "Fixed: $($file.Name)"
}
