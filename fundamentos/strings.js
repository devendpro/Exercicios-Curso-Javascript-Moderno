const escola = "Cod3r"

console.log(escola.charAt(4))
//ao pedir pra mostrar um caracter
//numa possição que não existe
//na string, javascript não retorna
//um erro, e sim uma string vazia :-))
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3))

//pra saber em que posição um caracter
//esta dentro da string
console.log(escola.indexOf('r'))

//pegando uma substring de uma
// palavra a partir de uma posição
console.log(escola.substring(2))//vai pegar a substring a partir da posição 2

//pegando uma substring informando
//inicio e fim da substring na palavra
console.log(escola.substring(2,4))//vai do indice 2 até o 4, sem incluir a posição 4

//concatenando strings
console.log('Escola '.concat(escola).concat("!"))

//pode concatenar com o sinal de +
console.log('Escola ' + (escola) + "!")

//dando um replace numa string
console.log(escola.replace(3,'e'))

console.log('Ana,Maria,José'.split(','))


