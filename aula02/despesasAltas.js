/**
 * 1 - tenho um uma lista de despesas
 * 2 - criar a função 'filtrarDespesasAltas'
 * 3 - criar a lógica para filtrar as despesas pelo valor limite
 * 4 - executar a função
 * 5 - armazenar o resultado da função em uma variável
 * 6 - exibir o resultado no console
 */

const prompt = require("prompt-sync")()

// 1 - tenho um uma lista de despesas
const despesas = [
    { nome: "Aluguel", valor: 1200 },
    { nome: "Mercado", valor: 450 },
    { nome: "Internet", valor: 100 },
    { nome: "Restaurante", valor: 200 },
    { nome: "Transporte", valor: 150 },
    { nome: "Cinema", valor: 50 },
    { nome: "Academia", valor: 90 }
  ];

  // 2 - criar a função 'filtrarDespesasAltas'
  function filtrarDespesasAltas(listaDespesas, valorLimite){
    // 3 - criar a lógica para filtrar as despesas pelo valor limite
    return listaDespesas.filter((despesa) => {
        return despesa.valor > valorLimite // true ou false
    })
  }
  
  let limite = Number(prompt("Digite o valor limite: "))

  // 4 - executar a função
  // 5 - armazenar o resultado da função em uma variável
  const despesasAltas = filtrarDespesasAltas(despesas, limite);

  // 6 - exibir o resultado no console
  console.log(despesasAltas)