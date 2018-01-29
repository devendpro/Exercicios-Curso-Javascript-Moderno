//Função sem retorno

function imprimirSoma(a,b){
    console.log(a + b)
}

imprimirSoma(2,3)
imprimirSoma(4)// Se não passar o segundo parametro
               // vai retornar NaN
imprimirSoma(5,6,7,8,9) //Nesse caso vai pegar
                        //os dois primeiros parametros
                        //e ignora o resto
//Funcao com retorno
function soma(a=0,b=0) {
    return a +b
}

console.log(soma(2,7))
console.log(soma(8))
console.log(soma())