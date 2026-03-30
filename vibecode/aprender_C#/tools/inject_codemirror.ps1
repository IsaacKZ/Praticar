$folder = $PSScriptRoot | Split-Path -Parent

$cmHead = @'
    <!-- CodeMirror -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.18/codemirror.min.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.18/codemirror.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.18/mode/clike/clike.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.18/addon/edit/closebrackets.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.18/addon/edit/matchbrackets.min.js"></script>
'@

$cmScript = @'
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            csharpEditor = CodeMirror(document.getElementById('cm-editor'), {
                value: 'using System;\n\nConsole.WriteLine("Hello, World!");',
                mode: 'text/x-csharp',
                theme: 'vibecode',
                lineNumbers: true,
                autoCloseBrackets: true,
                matchBrackets: true,
                indentUnit: 4,
                tabSize: 4,
                indentWithTabs: false,
                lineWrapping: false,
                extraKeys: {
                    'Tab': (cm) => cm.replaceSelection('    '),
                    'Ctrl-Enter': runCode
                }
            });
        });
    </script>
'@

$htmlFiles = Get-ChildItem -Path $folder -Filter 'level-*.html'

foreach ($file in $htmlFiles) {
    $content = [System.IO.File]::ReadAllText($file.FullName, [System.Text.Encoding]::UTF8)

    # 1. Inject CodeMirror CSS/JS into <head> before </head>
    if (-not $content.Contains('codemirror.min.css')) {
        $content = $content -replace '</head>', "$cmHead`n</head>"
    }

    # 2. Replace textarea with cm-editor div (handle both quote styles and whitespace)
    $pattern = '(?s)<textarea\s+id=["\x27]code-input["\x27][^>]*>.*?</textarea>'
    $content = [regex]::Replace($content, $pattern, '<div id="cm-editor"></div>')

    # 3. Inject CodeMirror init script before </body>
    if (-not $content.Contains('csharpEditor = CodeMirror')) {
        $content = $content -replace '<script src="script\.js"></script>', "<script src=`"script.js`"></script>`n$cmScript"
    }

    [System.IO.File]::WriteAllText($file.FullName, $content, [System.Text.Encoding]::UTF8)
    Write-Host "Updated: $($file.Name)"
}
