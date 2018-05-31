//ES8: Object.values/Object.entries
//Object.keys já existia no JS
const obj = { a:1, b:2, c:3 }
console.log(Object.keys(obj))
console.log(Object.values(obj))
console.log(Object.entries(obj))

// Melhorias na Notação Literal de objetos
const nome = 'Joana'

const pessoa = {
    nome, // ja cria um atributo para o
          // objeto baseado na variavel 
          // NOME declarada anteriormente
    // para declarar uma função não precisa
    // mais declarar a palavra FUNCTION
    ola() {
        return 'Ola'
    }
}
console.log(pessoa.nome,pessoa.ola())

// Class
// Internamente as classes em JS serão
// convertidas para funções
class Animal{} // < Classe Vazia
class Cachorro extends Animal { // Herança em Classe
  
  falar(){
      let latido = 'au au'
      return latido
  }
}
console.log(new Cachorro().falar())
const Kiko = new Cachorro
console.log(Kiko.falar())
