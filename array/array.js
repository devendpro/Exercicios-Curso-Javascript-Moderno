console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('José','Ana','Maria')

console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']

console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo'
console.log(aprovados[3])

aprovados.push('João')

console.log(aprovados)

console.log(aprovados.length)

aprovados[9] = 'Daniel'

console.log(aprovados)

aprovados.sort() // Ordena os elementos do array

console.log(aprovados)

delete aprovados[1] // Vai excluir o valor e colocar undefined na posição

console.log(aprovados[1])

aprovados = ['Bia', 'Carlos', 'Ana']

aprovados.splice(1,2) // A partir do indice 1 exclui 1 elemento

console.log(aprovados)

aprovados.splice(0,2,'Elemento1', 'Elemento2')

console.log(aprovados)

aprovados.splice(1,1,'ElementoX', 'ElementoY')

console.log(aprovados)

