$files = Get-ChildItem -Path "." -Filter "*.html" | Where-Object { $_.Name -ne "index_old.html" }
foreach ($f in $files) {
    $c = Get-Content $f.FullName -Raw
    $hasCM   = $c -match "codemirror.min.css"
    $hasDiv  = $c -match 'id="cm-editor"'
    $hasInit = $c -match "csharpEditor = CodeMirror"
    $hasOldTA= $c -match 'id="code-input"'
    Write-Host "$($f.Name): CM_CSS=$hasCM | CM_DIV=$hasDiv | CM_INIT=$hasInit | OLD_TEXTAREA=$hasOldTA"
}
