// const numeros = [10, 3, 5, 8, 2]

// const numerosPares = numeros.filter((numeroAtual) => {
//     return numeroAtual % 2 == 0 // true ou false
// })

// console.log(numerosPares)
// console.log(numeros)

const pessoas = [
    {nome: 'Tiago', idade: 22},
    {nome: 'Gustavo', idade: 75},
    {nome: 'Monica', idade: 20},
    {nome: 'João', idade: 15}
]

const pessoasVotantes = pessoas.filter((pessoaAtual) => {
    if(pessoaAtual.idade < 16 || pessoaAtual.idade > 70){
        return false
    } else {
        return true
    }
})

console.log(pessoasVotantes)
console.log(pessoas)