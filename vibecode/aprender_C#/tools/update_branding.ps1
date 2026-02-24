$folder = Resolve-Path ".." # Root project folder
$htmlFiles = Get-ChildItem -Path $folder -Filter '*.html' | Where-Object { $_.Name -ne 'index_old.html' }

$replacements = @(
    [pscustomobject]@{ From = 'VibeCode: Aprenda C<'; To = 'VibeCode: Aprenda C#<' },
    [pscustomobject]@{ From = 'VibeCode_C &copy;'; To = 'VibeCode_C# &copy;' },
    [pscustomobject]@{ From = 'e muito <code>printf</code>'; To = 'e muito <code>Console.WriteLine</code>' },
    [pscustomobject]@{ From = 'Vibe<span>Code</span>_C<'; To = 'Vibe<span>Code</span>_C#<' },
    [pscustomobject]@{ From = 'Aprenda C do zero. 100 aulas práticas. Do básico aos ponteiros.'; To = 'Aprenda C# do zero. 100 aulas práticas. Do básico ao LINQ.' },
    [pscustomobject]@{ From = 'Aprenda C do zero. 100 aulas praticas. Do basico aos ponteiros.'; To = 'Aprenda C# do zero. 100 aulas práticas. Do básico ao LINQ.' },
    [pscustomobject]@{ From = 'Aprenda C - Level'; To = 'Aprenda C# - Level' },
    [pscustomobject]@{ From = 'ponteiros.'; To = 'LINQ.' },
    [pscustomobject]@{ From = 'Editor de Código C<'; To = 'Editor de Código C#<' },
    [pscustomobject]@{ From = 'Escreva e teste seu código C!'; To = 'Escreva e teste seu código C#!' },
    [pscustomobject]@{ From = '<span>main.c</span>'; To = '<span>Program.cs</span>' },
    [pscustomobject]@{ From = 'Learn C<'; To = 'Learn C#<' },
    [pscustomobject]@{ From = 'VibeCode_C - LEARN C JAVASCRIPT'; To = 'VibeCode_CS - LEARN C# JAVASCRIPT' },
    [pscustomobject]@{ From = '#include <stdio.h>`n`nint main() {`n    printf("Hello, World!\n");`n    return 0;`n}'; To = 'using System;`n`nConsole.WriteLine("Hello, World!");' }
)

foreach ($file in $htmlFiles) {
    $content = [System.IO.File]::ReadAllText($file.FullName, [System.Text.Encoding]::UTF8)
    $changed = $false
    foreach ($r in $replacements) {
        if ($content.Contains($r.From)) {
            $content = $content.Replace($r.From, $r.To)
            $changed = $true
        }
    }
    if ($changed) {
        [System.IO.File]::WriteAllText($file.FullName, $content, [System.Text.Encoding]::UTF8)
        Write-Host "Updated: $($file.Name)"
    } else {
        Write-Host "No changes: $($file.Name)"
    }
}
Write-Host "Done."
