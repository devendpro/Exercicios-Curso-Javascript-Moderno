console.log(typeof String) //é uma função
console.log(typeof Array) //é uma função
console.log(typeof Object) //é uma função

// Toda função tem um atributo chamado .Prototype....


// Adicionando um protótipo a função String
String.prototype.reverse = function () {
    // Split transforma a string em array de letras
    // Para arrays existe a função Reverse
    // A função Join junta tudo de novo em uma nova string
    return this.split('').reverse().join('')
}

console.log('William Martins'.reverse())


Array.prototype.first = function(){
    // O acesso à função "prototypeada" é feita através do THIS
    return this[0] // retorna o primeiro elemento do array. Não seria necessário criar essa função....pode usar os [0] pra  isso
}

console.log([1,2,3,4,5].first())
console.log(['a','b','c'].first())

// Susbstituindo uma função que já existe (sobrescrevendo)...
// NÃO FAÇA ISSO EM CASA!
String.prototype.toString = function (){
    return 'QUEBRANDO TUDO'
}


// Nesse caso o retorno vai ser 'ODUT ODNARBEUQ', porque
// a função toString foi sobrescrita. OMG!
console.log('William'.reverse()) 
