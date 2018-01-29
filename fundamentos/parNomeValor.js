const saudacao = 'Opa' //contexto léxico 1
                       // léxico (local do código onde foi declarada a variável)
function exec() {
    const saudacao = 'Fala aê!'
    return saudacao
}

// Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Av. Rui de Albuquerque',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente.endereco.logradouro)
console.log(cliente)
