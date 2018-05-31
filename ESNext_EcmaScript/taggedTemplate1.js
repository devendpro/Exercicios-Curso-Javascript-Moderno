// Tagged templates - processa o template dentro de uma função
function tag(partes,...valores){
    
}

const pessoa = {nome : 'Maria', idade: 60}
const novapessoa = {ativo: true,...pessoa}

console.log(pessoa,novapessoa)