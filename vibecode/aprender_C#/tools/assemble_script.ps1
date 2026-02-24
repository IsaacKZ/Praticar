$scriptPath = 'c:\Users\isaac\Praticar\vibecode\aprender_C#\script.js'
$enc = [System.Text.Encoding]::UTF8

# Ler o script original
$original = [System.IO.File]::ReadAllText($scriptPath, $enc)

# Ler novos conteúdos
$content04 = [System.IO.File]::ReadAllText('c:\Users\isaac\Praticar\vibecode\aprender_C#\src\content_levels_0_4.js', $enc)
$content59 = [System.IO.File]::ReadAllText('c:\Users\isaac\Praticar\vibecode\aprender_C#\src\content_levels_5_9.js', $enc)
$contentQC = [System.IO.File]::ReadAllText('c:\Users\isaac\Praticar\vibecode\aprender_C#\src\content_quiz_challenges.js', $enc)

# Montar o novo lessonsData (combina 0-4 + 5-9)
# content04 já tem o inicio "const lessonsData = {" 
# content59 tem o restante e termina com "};"
# Precisamos unir: content04 (sem o "};") + content59 (sem o "const lessonsData = {")

# Remover o ";" final e "}" do content04 para poder concatenar
$content04_body = $content04.TrimEnd()
# O content04 termina com uma virgula apos o ultimo item do level 4
# content59 comeca com "    // ========== LEVEL 5..."
# Vamos simplesmente tirar o "const lessonsData = {" do content59 e concatenar

$content59_body = $content59 -replace '^// ==================== LESSON DATA ====================\s*const lessonsData = \{', ''

$newLessonsData = $content04_body + "`r`n" + $content59_body.TrimStart()

Write-Host "Tamanho lessonsData: $($newLessonsData.Length)"

# Identificar limites no script original
# lessonsData começa em "// ==================== LESSON DATA ===================="
# e termina antes de "// ==================== GLOBAL STATE ===================="
$lessonStart = $original.IndexOf('// ==================== LESSON DATA ====================')
$globalStateMarker = '// ==================== GLOBAL STATE ===================='
$lessonEnd = $original.IndexOf($globalStateMarker)

if ($lessonStart -lt 0 -or $lessonEnd -lt 0) {
    Write-Host "ERRO: Nao encontrou marcadores de lessonsData!"
    Write-Host "lessonStart: $lessonStart"
    Write-Host "lessonEnd: $lessonEnd"
    exit 1
}

Write-Host "lessonsData: linhas $lessonStart ate $lessonEnd"

# QUIZ_DATA e CHALLENGES ficam entre GLOBAL STATE e "// Challenge state"
$quizMarker = '// ==================== QUIZ DATA ===================='
$challengeEndMarker = '// Challenge state'
$quizStart = $original.IndexOf($quizMarker)
$challengeEnd = $original.IndexOf($challengeEndMarker)

if ($quizStart -lt 0 -or $challengeEnd -lt 0) {
    Write-Host "ERRO: Nao encontrou marcadores de quiz!"
    Write-Host "quizStart: $quizStart, challengeEnd: $challengeEnd"
    exit 1
}

Write-Host "QUIZ+CHALLENGES: posicao $quizStart ate $challengeEnd"

# Montar novo script:
# parte1: do inicio ate antes do lessonsData
$part1 = $original.Substring(0, $lessonStart)
# parte2: do GLOBAL STATE ate antes do QUIZ
$part2 = $original.Substring($lessonEnd, $quizStart - $lessonEnd)
# parte3: do Challenge state em diante
$part3 = $original.Substring($challengeEnd)

# Novo script = part1 + newLessonsData + "\r\n\r\n" + part2 + newQuizChallenges + "\r\n" + part3
$newScript = $part1 + $newLessonsData + "`r`n`r`n" + $part2 + $contentQC + "`r`n" + $part3

Write-Host "Tamanho original: $($original.Length)"
Write-Host "Tamanho novo: $($newScript.Length)"

# Salvar
[System.IO.File]::WriteAllText($scriptPath, $newScript, $enc)
Write-Host "script.js atualizado com sucesso!"
