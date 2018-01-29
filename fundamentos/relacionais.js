
// Aqui estamos comparando o valor
// sem preocupar com o tipo da variável.

console.log('01)', '1' == 1 ) // true
console.log('02)', '3' != 3 ) // false

//Aqui a análise verifica tambem o
// tipo da variável
console.log('03)', '1' === 1 ) // false
console.log('04)', '3' !== 3 ) // true


console.log('05)', 3 < 2  ) // false
console.log('06)', 3 > 2 )  // true
console.log('07)', 3 <= 2 ) // false
console.log('08)', 3 >= 2 ) // true

const d1 = new Date(0)
const d2 = new Date(0)

// Aqui vai comparar a referencia de
// memório e nos 2 casos o resultado
// é false.
console.log('09)', d1 == d2) // false
console.log('10)', d1 === d2) // false

// Aqui vai comparar o valor e como
// o tipo, quanto o valor são iguais
// o resultado nos 2 casos é true.
console.log('11)',d1.getTime() == d2.getTime()) //true
console.log('12)',d1.getTime() === d2.getTime()) //true

console.log('13)', undefined == null) // true

console.log('13)', undefined === null) // false
