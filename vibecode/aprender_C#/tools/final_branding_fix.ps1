$folder = $PSScriptRoot | Split-Path -Parent
$htmlFiles = Get-ChildItem -Path $folder -Filter '*.html' | Where-Object { $_.Name -ne 'index_old.html' }

foreach ($file in $htmlFiles) {
    $content = [System.IO.File]::ReadAllText($file.FullName, [System.Text.Encoding]::UTF8)
    
    # Direct string replacement for exactly what I see in the files
    $content = $content.Replace("Editor de Código</h2>", "Editor de Código C#</h2>")
    $content = $content.Replace("Escreva e teste seu código C!</p>", "Escreva e teste seu código C#!</p>")
    $content = $content.Replace("<span>main.c</span>", "<span>Program.cs</span>")
    
    # Meta cleanups just to be absolutely sure
    $content = $content.Replace("Aprenda C do zero", "Aprenda C# do zero")
    $content = $content.Replace("aos ponteiros", "ao LINQ")

    [System.IO.File]::WriteAllText($file.FullName, $content, [System.Text.Encoding]::UTF8)
    Write-Host "Manual Fix: $($file.Name)"
}
