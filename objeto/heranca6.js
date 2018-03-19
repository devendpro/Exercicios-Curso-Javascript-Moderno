function Aula(nome, videoID){
    this.nome = nome
    this.videoID = videoID
}


// No uso do NEW na criação de um novo
// objeto, o novo objeto vai apontar para
// Funcao.prototype
const aula1 = new Aula('Bem vindo',123)
const aula2 = new Aula('Última Aula',789)

console.log(aula1,aula2)


// simulando o operador new
// os parametros são:
// FUNÇÃO (função construtora)
// Conjunto de parametros para criação do objeto
// *** nesse caso passando os parametros como ...params
// *** o javascript vai concatenar todos parametros
// *** em um array
function novo(f, ...params) {
    //criando um objeto vazio
    const obj = {}
    // fazer o objeto criado aponte para
    // funcao.prototype
    obj.__proto__ = f.prototype
    // chamar a funcao do parametro.
    // chamar o metodo apply dessa funcao
    f.apply(obj,params)

    // retorno da função será o objeto criado
    return obj
}

const aula3 = novo(Aula,'Primeira aula',123)
const aula4 = novo(Aula,'Última aula',456)
console.log(aula3,aula4)