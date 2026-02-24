$folder = $PSScriptRoot | Split-Path -Parent
$htmlFiles = Get-ChildItem -Path $folder -Filter 'level-*.html'

$newCode = "using System;`n`nConsole.WriteLine(`"Hello, World!`");"

foreach ($file in $htmlFiles) {
    $content = [System.IO.File]::ReadAllText($file.FullName, [System.Text.Encoding]::UTF8)
    
    # Titles
    $content = $content -replace 'Editor de CÓdigo</h2>', 'Editor de Código C#</h2>'
    $content = $content -replace 'Editor de Código</h2>', 'Editor de Código C#</h2>'
    $content = $content -replace 'Escreva e teste seu código C!', 'Escreva e teste seu código C#!'
    
    # Filename
    $content = $content -replace '<span>main.c</span>', '<span>Program.cs</span>'
    
    # Regex for textarea with real newlines
    $pattern = '(?s)<textarea id="code-input" spellcheck="false">.*?</textarea>'
    $replacement = "<textarea id='code-input' spellcheck='false'>$newCode</textarea>"
    $content = [regex]::Replace($content, $pattern, $replacement)

    [System.IO.File]::WriteAllText($file.FullName, $content, [System.Text.Encoding]::UTF8)
    Write-Host "Fixed: $($file.Name)"
}
