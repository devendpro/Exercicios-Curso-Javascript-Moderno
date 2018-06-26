// Tagged templates - processa o template dentro de uma função
function tag(partes,...valores){
    console.log(partes)
    console.log(valores)
    return 'Outra string'
}

const aluno = 'Will'
const situacao = 'Aprovado'

//console.log(aluno,situacao)
console.log(tag `${aluno} esta ${situacao}.`)