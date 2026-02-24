$files = Get-ChildItem -Path . -Filter *.html
foreach ($f in $files) {
    $content = [System.IO.File]::ReadAllText($f.FullName, [System.Text.Encoding]::UTF8)
    $newContent = $content -replace 'href="style.css"', 'href="assets/style.css"'
    [System.IO.File]::WriteAllText($f.FullName, $newContent, [System.Text.Encoding]::UTF8)
    Write-Host "Updated $($f.Name)"
}
