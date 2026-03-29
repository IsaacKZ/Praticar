$folder = $PSScriptRoot | Split-Path -Parent
$htmlFiles = Get-ChildItem -Path $folder -Filter 'level-*.html'

# Old init block to find
$oldInit = @'
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

# New direct init block
$newInit = @'
    <script>
        (function initCodeMirror() {
            var el = document.getElementById('cm-editor');
            if (!el || typeof CodeMirror === 'undefined') return;
            csharpEditor = CodeMirror(el, {
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
                    'Tab': function(cm) { cm.replaceSelection('    '); },
                    'Ctrl-Enter': runCode
                }
            });
        })();
    </script>
'@

foreach ($file in $htmlFiles) {
    $content = [System.IO.File]::ReadAllText($file.FullName, [System.Text.Encoding]::UTF8)
    if ($content.Contains("DOMContentLoaded")) {
        $content = $content.Replace($oldInit, $newInit)
        [System.IO.File]::WriteAllText($file.FullName, $content, [System.Text.Encoding]::UTF8)
        Write-Host "Fixed init: $($file.Name)"
    } else {
        Write-Host "Skipped (already ok): $($file.Name)"
    }
}
