function moduloMatematico(){
    let contador = 0;

    function somaUm(){
        contador++;
        console.log(contador)
    }

    function subtraiUm(){
        contador--;
        console.log(contador)
    }

    return {
        somaUm,
        subtraiUm
    }
}

const calculadora = moduloMatematico()
calculadora.somaUm()
calculadora.somaUm()
calculadora.somaUm()

calculadora.subtraiUm()

// contador = 1000