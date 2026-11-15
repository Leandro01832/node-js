nome = "desafio node"
var nome = "Leandro"
var sobrenome = "Luis"

const global = {
    nome: "Leo"
}


const teste = () => {
    console.log(global.nome)
    let nome = "teste"
    console.log(nome)
}
teste()
console.log(nome + " " + sobrenome)

const teste2 = "teste2"
console.log(teste2)
