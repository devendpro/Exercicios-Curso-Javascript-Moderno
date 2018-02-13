const pessoa ={
    saudacao: 'Bom dia',
    falar(){
        // para poder acessar o atributo saudacao, 
        // utiliza a palavra THIS.
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre paradigmas: funcional e OO


// Nesse caso o BIND amarra a execução ao objeto
// que será identificado como THIS.
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()