//Programa para inverter os caracteres de uma string

let texto = "este e um teste para inverter string";

let txtSeparado = texto.split(""); //separa o texto por caracteres ao mesmo tempo que os coloca numa array

const txtInvertido = [];

//iteracao para trocar a posicao dos caracteres
for (i = txtSeparado.length - 1; i >= 0; i--) {
  const valorIndex = txtSeparado[i];
  txtInvertido.push(valorIndex);
}

console.log(txtInvertido.join("")); //imprime o resultado transformado em string novamente
