// Objeto.preventExtensions. Bloqueia que o objeto
// seja extendido, ou seja, que sejam adicionados
// novos atributos no objeto. Excluir atributos será
// possível, porém não poderá acrescentar novos!

const produto = Object.preventExtensions({
  nome: 'Qualquer'  ,preco: 1.99, tag:'promoção'
})

console.log('Extensível:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar'
delete produto.tag
console.log(produto)

// Object.seal *** selar
// Bloqueia adição e exclusão de atributos do objeto.
// Porem consegue modificar os valores do objeto.
const pessoa = {nome:'Juliana', idade:35}
Object.seal(pessoa)
console.log('Selado:',Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 20
console.log(pessoa)

//Object.freeze = selado + valores constantes
// Não consegue mexer nos atributos e tambem
// nos valores do objeto.



