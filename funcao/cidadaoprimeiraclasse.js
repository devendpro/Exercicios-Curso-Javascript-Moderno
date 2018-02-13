//funcao em JS é First-Class Object (Citizens)
// Higher-order function

// criar funcao de forma literal
function fun1(){}

// Armazenar em uma variável
const fun2 = function(){return 'Hello'}

// Armazenar em um array
const array = [function(a,b){return a + b},fun1,fun2]

// Executanto uma funcao pertencente a um array
console.log(array[0](2,3))

//Armazenar em um atributo de obejto
const obj = {}
obj.falar = function(){ return 'Opa'}
console.log(obj.falar())

// Passar funcao como param
function run(fun){
  fun()
}
run(function() {console.log('Executando...')})

// Uma funçãopode retornar/conter uma função
function soma(a,b){
    return function(c){
        console.log(a + b + c)
    }
}
//Fazendo chamada direta
soma(2,3)(4) // vai retornar 9
// Armazenando numa constante primeiro
const cincoMais = soma(2,3)
cincoMais(4) // vai retornar 9



