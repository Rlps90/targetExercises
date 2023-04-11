//Programa para calcular a porcentagem de faturamento mensal de cada estado

const faturamento = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53,
};

let copiaFaturamento = { ...faturamento }; //copia do objeto original

const somaValores = Object.values(faturamento).reduce((a, b) => a + b, 0); //soma todos os valores do objeto

let porcentagem = Object.keys(copiaFaturamento).reduce((elem, key) => {
  let valor = copiaFaturamento[key]; //atribui a variavel valor o faturamento de cada estado
  elem[key] = ((valor / somaValores) * 100).toFixed(2) + "%"; //transforma em porcentagem
  return elem;
}, {});

console.log(porcentagem);
