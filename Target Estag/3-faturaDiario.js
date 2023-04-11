//Programa para coletar os dias de menor e maior faturamento, como tambem os dias em que o faturamento foi superior a media mensal

const dataJson = require("./dados.json");

let diasFaturamentoAcima = 0;

let valores = dataJson
  .map((v) => {
    return v.valor;
  })
  .filter((v) => v > 0); // como os finais de semana sao irrelevantes, removemos os dias com faturamento 0

let faturaMin = Math.min.apply(null, valores).toFixed(2);
let faturaMax = Math.max.apply(null, valores).toFixed(2);

let mediaFat = ([...valores].reduce((a, b) => a + b, 0) / valores.length) // tira a media de faturamento por dia, excluindo os finais de semana e feriados
  .toFixed(2);

for (i = 0; i < valores.length; i++) {
  if (valores[i] > mediaFat) {
    // seleciona os dias que o faturamento foi maior do que a media mensal
    diasFaturamentoAcima++;
  }
}

console.log("Menor Faturamento do Mes: R$", faturaMin); //menor faturamento do mes
console.log("Maior Faturamento do Mes: R$", faturaMax); //maior faturamento do mes
console.log("Media de faturamento do mes: R$", mediaFat); //media mensal de faturamento
console.log("Dias com faturamento acima da media:", diasFaturamentoAcima); //Quantidade de dias acima da media mensal
