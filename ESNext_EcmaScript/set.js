// não aceita repeticao, e não é indexado

const times = new Set()

times.add('Vasco')
//aceita adição encadeada
times.add('Galo').add('Fla').add('Vasco')
times.add('Palmeiras')
times.add('Vasco') // Vai ser ignorado, pois já existe

console.log(times)
console.log(times.size) // informa o tamanho do Set
console.log(times.has('vasco'))// = false, porque a procura é case sensitive
console.log(times.has('Vasco')) // true
console.log(times.has('Fla')) // True
times.delete('Fla')
console.log(times.has('Fla')) // false, foi excluido

const nomes = ['Jo', 'Lu', 'Pa', 'Jo']
const nomeSet = new Set(nomes) // Vai ignorar os repetidos
console.log(nomeSet)




