function verificarVelocidade(velocidadeAtual, velocidadeMaxima){
    if(velocidadeAtual > (velocidadeMaxima * 1.2)){
        console.log("Multa Grave")
    } else if (velocidadeAtual > velocidadeMaxima){
        console.log("Multa leve")
    } else {
        console.log("Sem multa")
    }
}

module.exports = {verificarVelocidade}