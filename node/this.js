console.log(this === global) // false
console.log(this === module) // false

console.log(this === module.exports) // true
console.log(this === exports) // true

// cuidado ao acessar o this dentro
// de uma função que esta dentro do module
function logThis(){
    console.log('Dentro de uma função....')
    console.log(this === exports) //false
    console.log(this === module.exports) //false
    console.log(this === global) //true

}

logThis()