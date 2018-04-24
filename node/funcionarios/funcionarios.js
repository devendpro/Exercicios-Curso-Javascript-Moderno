const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const chineses = funcionariosChineses => funcionariosChineses.pais === 'China'
const mulheres = funcionariosMulheres => funcionariosMulheres.genero === 'F'

const menorSalario = (funcioario,funcionarioAtual) => {
    return funcioario.salario < funcionarioAtual.salario ? funcioario : funcionarioAtual
}


axios.get(url).then(response =>{
    const funcionarios = response.data
    //console.log(funcionarios)

    // mulher chinesa com menor salário
    const funcionario = funcionarios
        .filter(chineses)
        .filter(mulheres)
        .reduce(menorSalario)

    console.log(funcionario)
})