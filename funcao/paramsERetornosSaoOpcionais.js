function area(largura, altura){
    const area = largura * altura
    if (area > 20){
        console.log(`Valor acima do permitido: ${area}m2.`)
    } else {
        return area
    }
}

console.log(area(2,2)) // retorna 4
console.log(area(2)) // passando apenas 1 valor. Retorna NaN
console.log(area()) // Não passando apenas 1 valor. Retorna NaN

// Passando mais parametros do que o que foi declarado na função
// Vai pegar apenas os 2 primeiros parametros e ignorar os outros.
console.log(area(2,3,17,22,33)) // retorna 6
// imprime a mensagem declarada no if da funcao
// e retorna undefined :(
console.log(area(5,5))



