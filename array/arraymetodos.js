const pilotos = ['Vettel','Alonso','Raikkonen','Massa']

pilotos.pop() // Remove o último elemento do array

console.log(pilotos)

pilotos.push('Verstappen') // adiciona elemento  ao array

console.log(pilotos)

pilotos.shift() // Remove o primeiro elento da lista

console.log(pilotos)

pilotos.unshift('Hamilton') //Adiciona um elemento no inicio do Array

console.log(pilotos)

// Splice pode adicionar, como remover elementos do array
// Vai adicionar o elemento a partir do indice 2, e não vai remover ninguem
pilotos.splice(2,0,'Bottas','Massa') 

console.log(pilotos)

// Remover elementos a partir do splice
// A partir do terceiro elemento, vai remover 1 elemento
pilotos.splice(3,1)

// Metodo SLICE. Retorna um novo array
// Retorna a lista de elementos, a partir do indice 2.
const algunsPilotos1 = pilotos.slice(2)

console.log(algunsPilotos1)

// Slice pegando uma parte dos elementos, definindo o inicio e fim.
const algunsPilotos2 = pilotos.slice(1,4)
console.log(algunsPilotos2)

const letras = ['a','b','c','d']

const ltr = letras.slice(1,3)

console.log(ltr)





