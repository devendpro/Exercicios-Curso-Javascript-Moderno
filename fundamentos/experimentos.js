//usando o let dentro de um arquivo a variavel fica
//local, não é exportada. Inclusive não fica no global
let a = 3
global.b = 123

// this dentro de um arquivo é o module.exports
this.c = 456 // aqui vai exportar para fora do arquivo
this.d = false
this.e = 'teste'

console.log(a) // 3
console.log(global.b)  //123
console.log(this.c) // 456
console.log(module.exports.c) // 456

// dentro de nodejs cada arquivo é um modulo
// diferente da programação web que tudo é "global"
console.log(module.exports === this) // true
// vai colocar "pra fora" um objeto que tem todos os valores
console.log(module.exports) 


// criando uma variavel sem var ou let.
// que neste caso vai direto para o objeto "global"
abc = 123 // não devemos fazer isso!!!!
console.log(global.abc)





