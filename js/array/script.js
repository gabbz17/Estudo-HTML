Array = [
    "Gabriel",
    "Leticia"
]

console.log(Array)

const dados = [
    "Gabriel",
    18,
    "TI"
]

delete dados[2] //deleta o dado encontrado naquele campo

console.log(dados)

console.log("Nome: %s. Idade: %d. Curso: %s", dados[0], dados[1], dados[2])

const frases = [
    "Bom dia",
    "Boa tarde",
    "Boa noite"
]


function cont(arrayObj) {
    for(let obj of arrayObj) {
        if(obj.x > obj.y) {
            console.log("%d é maior que %d", obj.x, obj.y)
        }
    }
}
const entrada = [
    {x: 10, y: 6},
    {x: 7, y: 6},
    {x: 3, y: 6}
]

cont(entrada)

function study() {

    let nome = "Gabbz"

}

console.log(study.nome)


var contador = 0
var media = 0

function some(obj) {
    for(let obj1 of obj) {
        contador += obj1.x
        media ++
    }
}

var ent = [
    {x: 3},
    {x: 6},
    {x: 4},
    {x: 1},
    {x: 3}
]

some(ent)

console.log("Total: " + contador)
console.log("Média: " + media)
console.log("Resultado: " + (contador / media))



const insert = [
    2, 4, 7, 6
]

var somador = 0

function soma(array) {
    for(let obj of array) {
        somador += obj
    }
}

soma(insert)
console.log(insert)
console.log("Resultado: " + (somador / insert.length))
console.log(somador)
console.log(insert.length)




var num = 0

function par(a) {
    for(let obj of a) {
        if(obj.x%2 == 0 && obj.y%2 == 0) {
            num ++
        }
    }
}

const input = [
    {x: 10, y: 6},
    {x: 0, y: 6},
    {x: 3, y: 6}
]

par(input)
console.log("Quantidades de linhas pares: %d", num)