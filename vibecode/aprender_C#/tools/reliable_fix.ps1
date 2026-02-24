$folder = $PSScriptRoot | Split-Path -Parent
$htmlFiles = Get-ChildItem -Path $folder -Filter '*.html' | Where-Object { $_.Name -match 'level-[1-9]' -or $_.Name -eq 'recursos.html' }

foreach ($file in $htmlFiles) {
    $content = Get-Content $file.FullName -Raw
    
    # Titles & descriptions
    $content = $content -replace "Editor de Código</h2>", "Editor de Código C#</h2>"
    $content = $content -replace "teste seu código C!", "teste seu código C#!"
    $content = $content -replace "<span>main\.c</span>", "<span>Program.cs</span>"
    
    # Meta
    $content = $content -replace "Aprenda C do zero", "Aprenda C# do zero"
    $content = $content -replace "aos ponteiros", "ao LINQ"
    
    # Textarea content - more aggressive match
    $pattern = '(?s)<textarea id="code-input" spellcheck="false">.*?</textarea>'
    $newTextarea = '<textarea id="code-input" spellcheck="false">using System;`n`nConsole.WriteLine("Hello, World!");</textarea>'
    $content = [regex]::Replace($content, $pattern, $newTextarea)

    Set-Content $file.FullName $content -Encoding UTF8
    Write-Host "Processed: $($file.Name)"
}
