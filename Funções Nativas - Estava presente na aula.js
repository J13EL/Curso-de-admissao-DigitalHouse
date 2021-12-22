function estavaPresenteNaAula(nomeDoAluno, nomesDosPresentes) {
var presente = nomesDosPresentes.indexOf(nomeDoAluno)

if (presente != -1) {
return true;
} else {
return false
}
}
