const notas = [6.7,7.4,9.8,8.1,7.7]


//Percorrer um array, retornando os elementos
for (let i in notas){
    console.log(parseInt(i) + 1, notas[i])
   // console.log(typeof(i))
}

// Declarando um objeto
const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso:64
}

//Percorrendo os atributos do objeto
console.log("\nObjeto: Pessoa\n")
for (let atributo in pessoa){// Usar o let para que o atributo fique visivel somente dentro do for
    console.log(`${atributo} = ${pessoa[atributo]}`)
}

//console.log(atributo)