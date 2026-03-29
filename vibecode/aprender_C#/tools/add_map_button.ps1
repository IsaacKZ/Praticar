$folder = $PSScriptRoot | Split-Path -Parent
$htmlFiles = Get-ChildItem -Path $folder -Filter 'level-*.html'

$buttonHtml = @'
                <a href="skills-map.html" class="editor-nav-btn" title="Mapa de Habilidades">
                    <i class='bx bx-sitemap'></i>
                </a>
'@

foreach ($file in $htmlFiles) {
    $content = [System.IO.File]::ReadAllText($file.FullName, [System.Text.Encoding]::UTF8)
    
    # Check if the button is already there
    if (-not $content.Contains('skills-map.html')) {
        # Inject before the editor button
        $target = '<button class="editor-nav-btn" onclick="openEditor()"'
        if ($content.Contains($target)) {
            $content = $content.Replace($target, "$buttonHtml`n                $target")
            [System.IO.File]::WriteAllText($file.FullName, $content, [System.Text.Encoding]::UTF8)
            Write-Host "Added button to: $($file.Name)"
        }
    } else {
        Write-Host "Skipped (already has button): $($file.Name)"
    }
}
