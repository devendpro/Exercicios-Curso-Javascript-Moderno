const carrinho = [
    '{ "nome": "Borracha", "preco" : 3.45}',
    '{ "nome": "Caderno", "preco" : 13.90}',
    '{ "nome": "Caixa de lápis", "preco" : 41.22}',
    '{ "nome": "Caneta", "preco" : 7.50}',
]

// Retorna um array somente com os preços

const paraObjeto = json => JSON.parse(json)

const precos = a => a.preco

listaDePreco = carrinho.map(paraObjeto).map(precos)

console.log(listaDePreco)