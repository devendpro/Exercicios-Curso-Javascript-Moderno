const endereco = ['']

console.log(endereco === null)

let cep = endereco.map(function(e){
    return e + '39404-046'
})

const logradouro = a => a + ' Rui de albuquerque '
const num = a => a + ' 1052 '

console.log(endereco.map(logradouro).map(num))