console.log("linha 1")

function esperar3segundos(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("linha 6")
            resolve("Os 3 segundos acabaram!")
        }, 3000)
    })
}

async function lerFuncao3segundos(){
    try {
        let resultado = await esperar3segundos()
        console.log("linha 15")
        console.log(resultado)

    } catch (erro){
        console.error(erro)
    }
}

lerFuncao3segundos()

console.log("linha 16")

// esperar3segundos()
// .then(resultado => console.log(resultado))
// .catch(erro => console.error(erro))

