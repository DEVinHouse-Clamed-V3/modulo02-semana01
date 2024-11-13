// const numeros = [10, 3, 5, 8, 2]

// numeros.map((valorAtual, indice, arrayInteiro) => {
//     console.log(`O número atual é ${valorAtual} e o seu índice é ${indice}. O array inteiro é ${arrayInteiro}`)
// })

// const dobroArray = numeros.map((valorAtual) => {
//     return valorAtual * 2
// })
// console.log(numeros)
// console.log(dobroArray)

const pessoas = [
    {nome: 'Tiago', idade: 22},
    {nome: 'Gustavo', idade: 75},
    {nome: 'Monica', idade: 20},
    {nome: 'João', idade: 15}
]

pessoas.map((pessoaAtual) => {
    if(pessoaAtual.idade < 16){
        console.log(`${pessoaAtual.nome} não vota!`)
    } else if (pessoaAtual.idade > 70){
        console.log(`${pessoaAtual.nome} não vota!`)
    } else {
        console.log(`${pessoaAtual.nome} vota!`)
    }
})