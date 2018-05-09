/* module.exports = function(...nomes){
    return nomes.map(nome => `Boa semana ${nome}!`)
} */
module.exports.BomDia = function(...nomes){
    return nomes.map(nome => `Bom dia ${nome}`)
}

module.exports.BoaNoite = function(...nomes){
    return nomes.map(nome => `Boa Noite ${nome}`)
}