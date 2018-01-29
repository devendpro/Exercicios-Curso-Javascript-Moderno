//fazendo destructuring de arrays

//Função para retornar numero randomico
//como parametro será passado um destructuring de um array
function rand([min = 0, max = 1000]) {
    //se o valor minimo for maior que o valor
    //máximo, então vamos usar a notação destructuring
    //para trocar os valores.
    if (min > max) [min, max] = [max, min]

    const valor = Math.random() * (max - min) + min
    //floor vai arredondar para baixo. **ceil arredonda para cima
    return Math.floor(valor)
}

console.log(rand([50,40]))
console.log(rand([995])) // Passando apenas o valor mínimo
console.log(rand([,10])) // Passando apenas o valor máximo
console.log(rand([]))// Passando um array vazio
console.log(rand()) // vai dar erro. Não é possivel desestruturar sem haver um array.