console.log(module.exports)// é um  objeto vazio
console.log(module.exports === this) // = true
console.log(module.exports === exports)// = true

this.a = 1 // "a" esta visivel pra fora do arqvuio/modulo
exports.b = 2 // "b" esta visivel pra fora do arqvuio/modulo
module.exports.c = 3 // "c" esta visivel pra fora do arqvuio/modulo

//mesmo exports apontando pra null, o exports
//continua apontando para as variáveis criadas dentro do exports
// pois o que sempre é retornado é o module.exports
exports = null
console.log(module.exports)

module.exports = {publico = true} // para exportar corretamente, usar essa sintaxe