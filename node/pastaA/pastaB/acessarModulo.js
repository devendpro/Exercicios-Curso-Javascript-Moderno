const moduloA = require('../../moduloA')
console.log(moduloA.ola)


// modulo saudacao, criado dentro de node_modules
const saudacao = require('saudacao')
console.log(saudacao.ola)

const c = require('./pastaC')
console.log(c.ola2)


/* const http = require('http')
http.createServer((req,res) =>{
    res.write('Bom dia William')
    res.end()
}).listen(8080) */

