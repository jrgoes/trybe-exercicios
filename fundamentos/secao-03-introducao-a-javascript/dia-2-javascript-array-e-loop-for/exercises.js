let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

console.log('\n=============================EX1================================\n')
//Percorra o array imprimindo todos os valores nele contidos com a função console.log();
console.log('Impressao de todos os valores contidos no Array: ')
for ( index = 0 ; index < numbers.length ; index ++ ) {
  console.log(numbers[index]);
}
console.log('\n=============================EX2================================\n')
//Some todos os valores contidos no array e imprima o resultado;
let resultado = 0;

for ( index = 0 ; index < numbers.length ; index ++ ) {
  resultado = resultado + numbers[index];
}
console.log("Soma dos valores contidos no Array: " + resultado)

console.log('\n=============================EX3================================\n')
//Calcule e imprima a média aritmética dos valores contidos no array;

media = resultado / numbers.length;
console.log('Média aritmética dos valores do array: ' + media);

console.log('\n=============================EX4================================\n')
//Com base no código que acabou de gerar, faça com que, caso o valor final seja maior que 20, imprima a mensagem: “valor maior que 20”. Caso não seja, imprima a mensagem: “valor menor ou igual a 20”;

if (media > 20) {
  console.log('Valor maior que 20');
}	else {
  console.log('Valor menor ou igual a 20');
}

console.log('\n=============================EX5================================\n')
//Utilizando for, descubra qual o maior valor contido no array e imprima-o;
let maiorValor = 0;

for ( index = 0 ; index < numbers.length ; index ++ ) {
  if (numbers[index] > maiorValor) {
  	maiorValor = numbers[index];
  }
}
console.log('O maior valor é: ' + maiorValor);

console.log('\n=============================EX6================================\n')
//Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”;

console.log('Numeros ímpares do Array: ')
for ( index = 0 ; index < numbers.length ; index ++ ) {
  if (numbers[index] % 2 !== 0 ) {
    console.log(numbers[index]);
  }
}

console.log('\n=============================EX7================================\n')
//Utilizando for, descubra qual o menor valor contido no array e imprima-o;
let menorValor = 99999;

for ( index = 0 ; index < numbers.length ; index ++ ) {
  if (numbers[index] < menorValor) {
  	menorValor = numbers[index];
  }
}
console.log('O menor valor é: ' + menorValor);

console.log('\n=============================EX8================================\n')
//Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;
let array = [];

for ( index = 1 ; index < 26 ; index ++ ) {
	array.push(index);
}
console.log(array)

console.log('\n=============================EX9================================\n')
//Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.

for ( index = 0 ; index < array.length ; index ++ ) {
	console.log('Divisao do elemento [' + index + '] do Array por 2: ' + array[index]/2);
}