const fs = require('fs')


const caminho = __dirname + '/arquivo.json'


// sincrono...
const conteudo = fs.readFileSync(caminho,'UTF-8')
console.log(conteudo)

// assincono
fs.readFile(caminho,'UTF-8', (err,conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

// Forma mais simples de utilizar um arquivo JSON....de forma assincrona
const config = require('./arquivo.json')
console.log(config.db.port)

// ler conteudo de uma pasta
fs.readdir(__dirname,(err, arquivos) =>{
    console.log('Conteúdo da pasta...')
    console.log(arquivos)
})