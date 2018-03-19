class LancamentoFinanceiro {
    constructor(nome = 'Genérico', valor = 0) {
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentosFinanceiros = []
    }

    addLancamentos(...lancamentosFinanceiros) {
        lancamentosFinanceiros.forEach(l => this.lancamentosFinanceiros.push(l))

    }

    sumario() {
        let valorConsolidado = 0
        this.lancamentosFinanceiros.forEach(l => {
            valorConsolidado += l.valor
        })

        return valorConsolidado
    }
}

const salario = new LancamentoFinanceiro('Salario',45000)
const contaDeLuz = new LancamentoFinanceiro('Luz',-220)

const contas = new CicloFinanceiro(6,2018)
contas.addLancamentos(salario,contaDeLuz)
console.log(contas.sumario())



