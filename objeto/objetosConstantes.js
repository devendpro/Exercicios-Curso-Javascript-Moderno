
// pessoa aponta para um endereço de memória
// pessoa -> 0x789521A
const pessoa = {nome: 'Joao'}
pessoa.nome = 'Pedro'
console.log(pessoa)
// nesse caso o objeto pessoa
//não pode apontar para outro endereço
//porque PESSOA foi declarada como constante
//pessoa = {nome: 'Ana'}

// Aqui esta "congenlando" o objeto PESSOA.
// Dessa forma não pode mais alterar
// os atributos do objeto.
// Apesar de que pode ser passado novos atributos
//sem gerar erro, mas os valores não serão
// alterados.
Object.freeze(pessoa)
