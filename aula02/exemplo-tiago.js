const animais = [
    { tipo: "gato", idade: 2 },
    { tipo: "cão", idade: 4 },
    { tipo: "gato", idade: 3 },
    { tipo: "cão", idade: 1 },
];
  

function conveterIdadeParaHumana(valorAtual) {
    return valorAtual.map((animal) => {
        let idadeAnimal
        if(animal.tipo === 'gato') {
            idadeAnimal = animal.idade * 15
        }else if(animal.tipo === 'cão'){
            idadeAnimal = animal.idade * 7
        }
        return {...animal, idadeAnimal}
    })
}

console.log(conveterIdadeParaHumana(animais))