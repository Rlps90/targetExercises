//Programa para verificar se um dado numero pertence a sequencia de fibonacci, que eh uma array onde o proximo valor sempre sera a soma dos 2 numeros anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...)

let fibonacci = [0, 1];
let i = 0;
let inputNum = 56; // valor escolhido

const finalFibo = [...fibonacci]; //cria uma copia para nao alterar a original

//Enquanto o valor solicitado for maior que a sequencia, adicionar o valor à array finalFibo
while (inputNum > finalFibo[i]) {
  finalFibo.push(finalFibo[i] + finalFibo[i + 1]);
  i += 1;
}

//Verifica se o valor solicitado esta incluso na sequencia fibonacci ou nao e mostra o resultado
if (finalFibo.includes(inputNum)) {
  console.log("Pertence");
} else {
  console.log("Nao Pertence");
}
