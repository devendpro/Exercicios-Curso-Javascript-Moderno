function compras(trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    //const comprarTv32 = !!(trabalho1 ^ trabalho2) //bitwise xor
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete //operador unário

    return {comprarSorvete, comprarTv50, comprarTv32, manterSaudavel}


}

console.log('1)----------------')
console.log(compras(true,true))
console.log('2)----------------')
console.log(compras(true,false))
console.log('3)----------------')
console.log(compras(false,true))
console.log('4)----------------')
console.log(compras(false,false))