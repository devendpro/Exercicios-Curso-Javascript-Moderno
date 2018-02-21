
// função anonima escrita na forma tradicional
let dobro = function (a){
    return 2 * a
}

// função arrow
dobro = (a) => {
    return 2 * a
}

// funcao arrow mais reduzida ainda
dobro = a => 2 * a // return esta implicito
console.log(dobro(Math.PI))


let ola = function(){
    return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá' //Possui um param *** Javascrip permite ignorar parametros.
console.log(ola())
