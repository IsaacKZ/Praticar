$files = Get-ChildItem -Path "." -Filter "level-*.html"

$map = @{
    "Ã©" = "é";
    "Ã¡" = "á";
    "Ã£" = "ã";
    "Ã§" = "ç";
    "Ã³" = "ó";
    "Ãª" = "ê";
    "Ãº" = "ú";
    "Ã " = "à";
    "Ãµ" = "õ";
    "Ã´" = "ô";
    "Ã¬" = "ì";
    "Ã­" = "í";
}

foreach ($f in $files) {
    $content = Get-Content $f.FullName -Raw -Encoding UTF8
    $modified = $false
    foreach ($key in $map.Keys) {
        if ($content -match [regex]::Escape($key)) {
            $content = $content -replace [regex]::Escape($key), $map[$key]
            $modified = $true
        }
    }
    if ($modified) {
        Set-Content -Path $f.FullName -Value $content -Encoding UTF8
        Write-Host "Fixed $($f.Name)"
    }
}
