$folder = $PSScriptRoot | Split-Path -Parent
if (!$folder) { $folder = Get-Location }
Write-Host "Project root caught as: $folder"

$htmlFiles = Get-ChildItem -Path $folder -Filter '*.html' | Where-Object { $_.Name -ne 'index_old.html' }

foreach ($file in $htmlFiles) {
    $content = [System.IO.File]::ReadAllText($file.FullName, [System.Text.Encoding]::UTF8)
    
    # 1. Fix Editor Title & Description
    $content = $content -replace 'Editor de Código</h2>', 'Editor de Código C#</h2>'
    $content = $content -replace 'Escreva e teste seu código C!', 'Escreva e teste seu código C#!'
    
    # 2. Fix Filename
    $content = $content -replace '<span>main.c</span>', '<span>Program.cs</span>'
    
    # 3. Fix Boilerplate Code
    $pattern = '(?s)<textarea id="code-input" spellcheck="false">.*?</textarea>'
    $replacement = '<textarea id="code-input" spellcheck="false">using System;`n`nConsole.WriteLine("Hello, World!");</textarea>'
    $content = [regex]::Replace($content, $pattern, $replacement)
    
    # 4. Final Meta Cleanups
    $content = $content -replace 'Aprenda C do zero', 'Aprenda C# do zero'
    $content = $content -replace 'aos ponteiros', 'ao LINQ'

    [System.IO.File]::WriteAllText($file.FullName, $content, [System.Text.Encoding]::UTF8)
    Write-Host "Fixed: $($file.Name)"
}
