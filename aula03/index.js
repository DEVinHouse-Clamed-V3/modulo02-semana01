function saudacao(nome){
    return function () {
        console.log(`Seja bem-vindo ${nome}!`)
    }
}

const mensagem = saudacao("Bruno")
mensagem()
mensagem()
mensagem()
