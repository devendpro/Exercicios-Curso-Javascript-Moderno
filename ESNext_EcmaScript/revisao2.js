// Arrow function
// Possibilita sintaxe mais concisa
// Possibilita criar funções de 1 linha
// São sempre anonimas
// "Para fazer chamadas atribui-se à uma variável.
const soma = (a,b) => a + b
console.log(soma(9,8))

// Quando a arrow function tiver um corpo
// deve-se usar o RETURN
// quando houver somente um parametro não
// precisa de parenteses.
const soma2 = a => {
    return a + 2
}
console.log(soma2(7))

// Arrow function com THIS
// THIS = exportes ou module.exports
const lexico1 = () => console.log(this === exports)
// OU 
const lexico2 = () => console.log(this === module.exports)
// Se NÃO fosse uma função Arrow o THIS iria
// apontar para GLOBAL.

// parametro default
// É a possibilidade de dentro de um parametro
// de uma função passar um valor default para 
// o parametro
function log(texto = 'Node') {
    console.log(texto)
}
log(undefined)// se undefined vai imprimir valor padrão
log(null)// vai imprimir null
log('Novo parametro')

//Operador rest (agrupar)
//Pode ser também spread (espalhar)
// Colocar varios parametros na chamada da função
// que serão agrupados em um array
// Exemplo:
function total(...numeros){
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(9,8,7))

