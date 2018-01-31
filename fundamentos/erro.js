function tratarErroELancar(e) {
   // throw 10
   //throw true
   //throw 'Deu erro'
   throw new Error('Erro de processamento tratado no catch...')
}

function imprimirNomeGritado(obj) {

    try {
        console.log(obj.name.toUpperCase() + '!!!!')
    } catch (e) {
        tratarErroELancar(e)
    } finally {
        console.log('chamada do finally')
    }

}

// Colocado "nome" ao invés de "name" para provocar o erro
const obj = {nome: 'Roberto'}

imprimirNomeGritado(obj)