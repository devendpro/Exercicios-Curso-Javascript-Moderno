function retornarNumeroInteiroAleatorio(min,max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

do {
    opcao = retornarNumeroInteiroAleatorio(-1,10)
    console.log(`Opção escolhida foi ${opcao}.`)
} while (opcao != -1)

retornarNumeroInteiroAleatorio(-1,7)