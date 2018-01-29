//Armazenando uma funcao em uma variável
const imprimirSoma = function(a,b){
    console.log(a + b)    
}

imprimirSoma(2,3)

//Armazenando uma função arrow
//em uma variável
const soma = (a,b) => {
    return a + b
}

console.log(soma(7,4))

//retorno implicito (Arrow function reduzida)
const subtracao = (a,b) => a-b

console.log(subtracao(9,5))

const imprimir2 = a => console.log(a)

imprimir2("Hello!")