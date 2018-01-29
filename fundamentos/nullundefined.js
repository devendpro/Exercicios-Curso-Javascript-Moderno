let valor // não inicializada
console.log(valor)
valor = null
console.log(valor) //inicializada. Não esta apontando pra nenhum lugar da memória
//valor = undefined // Nunca aponte a variável para undefined de propósito.
//console.log(valor.toString()) variável nulas não retornam string. Retorna erro

const produto ={}
console.log(produto.preco)// nesse caso vai retornar undefined
console.log(produto)

produto.preco = 3.58
console.log(produto)

produto.preco = undefined
console.log(!!produto.preco)
//delete produto.preco // O delete retira o atributo preco de produto
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)
