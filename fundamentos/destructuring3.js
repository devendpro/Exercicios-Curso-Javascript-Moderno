/* Função para gerar número randomico */
//criando uma função que estamos passando
//um notação destructuring que vai receber
//um objeto
function rand({min = 0, max = 1000}) {
    const valor =Math.random() * (max - min) + min
    //floor vai arredondar para baixo. **ceil arredonda para cima
    return Math.floor(valor)
}

//criando um objeto com os valores min e max
//definidos
const obj = {max: 50, min:40}
console.log(rand(obj)) //chamando a função rand e passando o "obj"
console.log(rand({min: 955})) //chamando a função rand e passando destructuring informando apenas o valor min. O valor max vai pegar o padrão
console.log(rand({}))//Passando um objeto vazio. Nesse caso vai usar os valores padrão.
//console.log(rand())// Chamar a função e não passar um objeto vai dar erro, pois não tem objeto para ser desestruturado.
