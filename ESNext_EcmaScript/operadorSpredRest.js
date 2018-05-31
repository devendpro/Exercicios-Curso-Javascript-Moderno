// operador ... rest = junta  | spred = espalhar
// usar rest com parametro de função
 

// Usar spred com objetos
const funcionario = {nome: 'Maria', salario: 12348.99 }

//dentro do objeto chamado clone, estamos colocando
// todos os atributos de funcionario (espalhando todos atributos..)
//** importante que é uma cópia de funcionários...não esta
// mais apontando para o objeto funcionario */
const clone = {ativo: true, ...funcionario}
console.log(clone)// usar spred com array
const grupoA = ['Pinta', 'Niña','Sta. Maria']
const navios = ['Titanic',...grupoA]
const grupofinal = [...grupoA,...navios]
console.log(navios)
console.log(grupofinal)
