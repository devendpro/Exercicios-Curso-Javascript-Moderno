const tecnologias = new Map()

tecnologias.set('react', {framework: false})
tecnologias.set('angular', {framework: true})

console.log(tecnologias.get('react').framework)

// criar uma constante com chaves variadas
const chavesVariadas = new Map([
    [function(){}, 'Funcao'],
    [{}, 'Objeto'],
    [123, 'Numero'],
])

chavesVariadas.forEach((vl,ch) => {
    console.log(ch,vl)
})


//Mostra se o valor esta ou nao contido nesse Map
console.log(chavesVariadas.has(123))
chavesVariadas.delete(123) // funcao tb retorna true ou false
console.log(chavesVariadas.has(123))

//informa quantos elementos esta dentro do map
console.log(chavesVariadas.size)

// O map nao aceita repeticao de chaves
// quando adicionado uma chave existente
// O que acontece é que o valor é substituido.
chavesVariadas.set(123,'a')
chavesVariadas.set(123,'b') // vai matar o valor "a" da chave 123
chavesVariadas.set(456,'b') // colocou o valor "b" de novo, mas em outra chave
console.log(chavesVariadas)

