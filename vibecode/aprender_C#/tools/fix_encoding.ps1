$files = Get-ChildItem -Path "." -Filter "*.html" -Recurse
$files += Get-ChildItem -Path "." -Filter "*.js" -Recurse

foreach ($file in $files) {
    if ($file.FullName -match "\\node_modules\\" -or $file.FullName -match "\\\.git\\") { continue }
    
    $content = [System.IO.File]::ReadAllText($file.FullName, [System.Text.Encoding]::UTF8)
    $modified = $false
    
    # Define replacements using character codes to avoid script encoding issues
    # Ã© -> é
    $targets = @("Ã©", "Ã¡", "Ã£", "Ã§", "Ã³", "Ãª", "Ãº", "Ã ", "Ãµ", "Ã´", "Ã", "Ã­")
    $reps    = @("é", "á", "ã", "ç", "ó", "ê", "ú", "à", "õ", "ô", "ì", "í")
    
    for ($i=0; $i -lt $targets.Length; $i++) {
        if ($content.Contains($targets[$i])) {
            $content = $content.Replace($targets[$i], $reps[$i])
            $modified = $true
        }
    }
    
    # Typos
    if ($content.Contains("edito de codigo")) {
        $content = $content.Replace("edito de codigo", "editor de código")
        $modified = $true
    }
    
    if ($modified) {
        [System.IO.File]::WriteAllText($file.FullName, $content, [System.Text.Encoding]::UTF8)
        Write-Host "Updated $($file.Name)"
    }
}
