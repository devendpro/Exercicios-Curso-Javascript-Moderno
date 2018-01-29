//fazendo o destructuring de um array de
//elemento único.
let [a] = [10]
//sa = 30

console.log(a)

//fazendo o destructuring de um array, onde
//estamos pegando alguns membros.
//*elementos das posições 2 e 4 foram ignorados */
const [n1, ,n3, ,n5,n6=0] = [10,7,9,8]

console.log(n1,n3,n5,n6)

//desestruturando um array multidimensional
/* 2 arrays */
const [,[,nota]] = [[,8,8],[9,6,8]]

console.log(nota)
