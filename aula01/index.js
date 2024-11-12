// const {soma} = require("./calculadora.js")

// let resultadoSoma = soma(10, 5)

// console.log("O resultado da soma é " + resultadoSoma)

const {verificarVelocidade} = require("./verificadorVelocidade.js")
const prompt = require("prompt-sync")()

let velocidadeAtual = prompt("Digite a velocidade atual: ")
let velocidadeMaxima = prompt("Digite a velocidade máxima: ")

verificarVelocidade(velocidadeAtual, velocidadeMaxima)