const valores = [7.7,8.9,6.3,9.2]
console.log(valores[0],valores[3])
console.log(valores[4])

valores[4] = 10
console.log(valores)

valores[4] = 20
console.log(valores)
//pegar a quantidade de elementos do array
console.log(valores.length) 

valores.push({id: 3},false,null,'teste')
console.log(valores, valores.length)

//excluir o ultimo elemento do array
console.log(valores.pop())
console.log(valores)

//excluir elemento do array a partir do indice
delete valores[0]
console.log(valores)

valores.push('William')
console.log(valores)

valores[0] = 'Martins'
console.log(valores)


console.log(typeof valores)