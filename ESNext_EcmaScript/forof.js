// Exemplo de for of
for (let letra of 'William') {
    console.log(letra)
}

const assuntoEcma = ['Map', 'Set', 'Promisse']

for (let i in assuntoEcma) {
    console.log(i) // vai imprimir o indice
}

for (let assunto of assuntoEcma) {
    console.log(assunto) // vai imprimir o valor
}

const assuntoMap = new Map([
    ['Map', {abordado: true}],
    ['Set', {abordado: true}],
    ['Promisse', {abordado: false}],
])

for (let assunto of assuntoMap) {
    console.log(assunto)
}

for (let chave of assuntoMap.keys()) {
    console.log(chave)
}

for (let valor of assuntoMap.values()) {
    console.log(valor)
}

// fazendo um destructing
for (let [ch,vl] of assuntoMap.entries()) {
    console.log(ch,vl)
}

const s = new Set(['a','b','c'])
for (let letra of s) {
    console.log(letra)
}