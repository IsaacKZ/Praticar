$folder = $PSScriptRoot | Split-Path -Parent
$htmlFiles = Get-ChildItem -Path $folder -Filter '*.html' | Where-Object { $_.Name -ne 'index_old.html' }

foreach ($file in $htmlFiles) {
    $content = [System.IO.File]::ReadAllText($file.FullName, [System.Text.Encoding]::UTF8)
    
    # Aggressive Regex
    $content = $content -replace 'Editor de C[óó]digo', 'Editor de Código C#'
    $content = $content -replace 'teste seu c[óó]digo C!', 'teste seu código C#!'
    $content = $content -replace 'main\.c', 'Program.cs'
    
    [System.IO.File]::WriteAllText($file.FullName, $content, [System.Text.Encoding]::UTF8)
    Write-Host "Aggressive Fix: $($file.Name)"
}
