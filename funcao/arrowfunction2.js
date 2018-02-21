function Pessoa(n){
    this.idade = 0

    setInterval(() =>{
        this.idade++
        console.log(this.idade ** n)
    },1)

}

//new Pessoa
Pessoa(2)