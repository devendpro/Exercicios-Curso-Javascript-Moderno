require('./global')

console.log(MinhaApp.saudacao())

// Como setei o objeto como freeze, o nome 
//não será alterado
MinhaApp.nome = 'Eita! Mudou o nome'
console.log(MinhaApp.nome)
