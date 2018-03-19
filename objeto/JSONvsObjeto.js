/*
JSON é um formato de dados. Não é algo que seja executado.
JSON é um formato textual, diferente de um objeto.
*/

// converter um objeto para um formato JSON
const obj = {
    a: 1,
    b: 2,
    c: 3,
    soma() {
        return a + b + c
    }
}
// Veja que a a função soma não aparece no resultado.
console.log(JSON.stringify(obj)) // resultado: {"a":1,"b":2,"c":3}

// Transformando um JSON em objeto
//console.log(JSON.parse("{a:1,b:2,c:3}")) //<= esse não é um formado JSON válido!
//console.log(JSON.parse("{'a':1,'b':2,'c':3}")) //<= todo nome de atributo em JSON deve ser delimitado por aspas duplas!
console.log(JSON.parse('{"a":1,"b":2,"c":3}')) 

console.log(JSON.parse('{"a": 1.7,"b" : "string", "c" : true, "d": {}, "e":[] }'))

