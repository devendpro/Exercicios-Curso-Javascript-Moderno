function soBoaNoticia(nota){
    if (nota >= 7) {
        console.log('Noticia nota: ' + nota)
    }
}

soBoaNoticia(8.1)
soBoaNoticia(6.7)

function seForVerdadeEuFalo(valor) {
    //independente do tipo passado o javascript
    //vai converter para true ou false.
    if (valor) {
        console.log('É verdade...' + valor)
    }
}

seForVerdadeEuFalo()      // alse
seForVerdadeEuFalo(null)  // false
seForVerdadeEuFalo(NaN)   // false
seForVerdadeEuFalo('')    // false
seForVerdadeEuFalo(0)     // único número que vai ser falso
seForVerdadeEuFalo(-1)    // VERDADEIRO
seForVerdadeEuFalo(' ')   // VERDADEIRO
seForVerdadeEuFalo([])    // VERDADEIRO Array vazio
seForVerdadeEuFalo([1,2]) // VERDADEIRO Array com elementos
seForVerdadeEuFalo({})    // VERDADEIRO Objeto vazio





