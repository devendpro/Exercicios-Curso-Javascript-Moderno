/* import { resolve } from "url";
import { rejects } from "assert"; */

function falarDepoisDe(segundos,frase) {
    return new Promise((resolve,reject) => {
        setTimeout(() =>{
            resolve(frase) // resolve aceita apenas um parametro.
                           // Quando houver mais de um valor a ser
                           // passado, então devemos usar um objeto.
            //reject(frase) // FAZENDO A CHAMADA DO REJECT
        }, segundos * 1000)
    })
}

falarDepoisDe(3,'Que legal!')
    .then(frase => frase.concat(' William '))
    .then(frase => frase.concat('Martins '))
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e)) // capturar o erro, e mostrar no console.


