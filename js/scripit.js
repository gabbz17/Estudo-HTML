function game(name, year) {
    console.log("My name is %s, and i have %d years old", name, year)
}  

console.log(game("Gabriel", 18))

const dados = {
    nome: "",
    idade: 0
}

const gabriel = dados

gabriel.nome = "Gabriel"
gabriel.idade = 18

console.log(gabriel)

function atributos(olhos, cabelos) {
    this.olhos = olhos 
    this.cabelos = cabelos 
}

const people = new atributos()

console.log(atributos(verdes, grisalhos))