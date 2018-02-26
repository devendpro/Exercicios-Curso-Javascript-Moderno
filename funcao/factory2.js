function criarProduto(nome,preco){
    return{
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Notebook',219.0))
//console.log(criarProduto('Notebook',300.0))