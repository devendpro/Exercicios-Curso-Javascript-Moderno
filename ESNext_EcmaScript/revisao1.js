// let e const
// as duas palavras reservadas criadas recentemente
//dentro do JS
{
    var a = 2
    let b = 3
}

// variaveis declaradas com VAR podem ser acessadas
// fora do seu escopo/bloco
console.log(a)

// variaveis declaradas com LET NÃO podem ser acessadas
// fora do seu escopo/bloco
//console.log(b) // vai gerar um ERRO

// Template string
const produto = 'iPad'
console.log(`${produto}
é       
caro`) // vai quebrar as linhas conforme foi digitado.

// Operador Destructuring
const [l,e,...tras] = "Cod3r"
console.log(l,e,tras)

const [x, ,y] = [1,2,3]
console.log(x,y)


// Desestruturando um objeto
// a variavel NOME foi renomeada para "i"
const {idade: i, nome} = {nome:'Ana', idade: 9}
console.log(i,nome)




