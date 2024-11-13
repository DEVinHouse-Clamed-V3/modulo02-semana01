const usuario = { // 12
    nome: "Bruno",
    senha: 123465
}

usuario.nome = "Breno"
usuario.email = "bruno@email.com"

const usuario2 = {
    nome: usuario.nome,
    senha: usuario.senha
}

const usuario3 = {...usuario}

usuario2.nome = "Tiago"

console.log(usuario)
console.log(usuario2)
console.log(usuario3)