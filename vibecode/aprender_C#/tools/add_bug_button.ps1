$folder = $PSScriptRoot | Split-Path -Parent
$htmlFiles = Get-ChildItem -Path $folder -Filter 'level-*.html'

$buttonHtml = @'
            <button class="bug-btn" onclick="openBugHunt(LEVEL_REPLACE)"><i class='bx bx-bug'></i> Caça ao Bug</button>
'@

foreach ($file in $htmlFiles) {
    if ($file.Name -match 'level-(\d+)\.html') {
        $level = $matches[1]
        $content = [System.IO.File]::ReadAllText($file.FullName, [System.Text.Encoding]::UTF8)
        
        # Only add if it's one of the levels we have data for (0, 1, 2)
        if ("0","1","2" -contains $level) {
            if (-not $content.Contains('openBugHunt')) {
                $specificButton = $buttonHtml.Replace('LEVEL_REPLACE', $level)
                $target = '</section>'
                # We want to add it inside the .level-actions section
                $pattern = '(?s)(<section class="level-actions">.*?)(' + [regex]::Escape($target) + ')'
                if ($content -match $pattern) {
                    $content = $content -replace $pattern, "`$1`n$specificButton`n    `$2"
                    [System.IO.File]::WriteAllText($file.FullName, $content, [System.Text.Encoding]::UTF8)
                    Write-Host "Added Bug Hunt button to: $($file.Name)"
                }
            } else {
                Write-Host "Skipped (already has Bug Hunt): $($file.Name)"
            }
        }
    }
}
