function getRandomInt(min,max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min
}

/* ===================== Exercício operação aritmética básica ===================== */
console.log('---------- EXERCICIO OPERACAO ARITMETICA BASICA ----------\n');
let a = 25;
let b = 5;

console.log('Valor de a: ' + a);
console.log('Valor de b: ' + b + '\n');
console.log('Resultado da Soma: ' + (a + b));
console.log('Resultado da Subtração: ' + (a - b));
console.log('Resultado da Multiplicação:' + (a * b));
console.log('Resultado da Divisão: ' + (a / b));
console.log('Resultado do Módulo: ' + (a % b));

/* ===================== Exercício if/else 1 ===================== */
console.log('\n---------- EXERCICIO IF/ELSE 1 ----------\n');

a = 43;
b = 21;

console.log('Valor de a: ' + a);
console.log('Valor de b: ' + b + '\n');

if (a > b) {
  console.log('"a" é maior do que "b"');
}
else if (a === b) {
  console.log('"a" é igual a "b"');
}
else {
  console.log('"a" é menor do que "b"');
}

/* ===================== Exercício if/else 2 ===================== */
console.log('\n---------- EXERCICIO if/else 2 ----------\n');

a = 10;
b = 12;
let c = 16;

console.log('Valor de a: ' + a);
console.log('Valor de b: ' + b);
console.log('Valor de c: ' + c + '\n');

if (a > b && a > c) {
  console.log('"a" é maior que "b" e "c"')
} 
else if (b > a && b > c) {
  console.log('"b" é maior que "a" e "c"')
} 
else if (c > a && c > a) {
  console.log('"c" é maior que "a" e "b"')
}

/* ===================== Exercício if/else 3 ===================== */
console.log('\n---------- EXERCICIO if/else 3 ----------\n');

a = getRandomInt(-10, 10);

console.log('Valor de a: ' + a + '\n');

if (a > 0) {
  console.log('"a" é positivo');
}
else if (a === 0) {
  console.log('"a" é igual a zero')
}
else {
  console.log('"a" é negativo')
}

/* ===================== Exercício if/else 4 ===================== */
console.log('\n---------- EXERCICIO if/else 4 ----------\n');

const angulo1 = 90;
const angulo2 = 45;
const angulo3 = 45;
let somaAngulos = angulo1 + angulo2 + angulo3;

console.log('Valor do angulo 1: ' + angulo1);
console.log('Valor do angulo 2: ' + angulo2);
console.log('Valor do angulo 3: ' + angulo3 + '\n');

if (angulo1 > 0 && angulo2 > 0 && angulo3 > 0) {
  if (somaAngulos === 180) {
  console.log('É um triangulo?: ' + true);
  } else {
  console.log('É um triangulo?: ' + false);
  }
} else {
  console.log('Erro: valor de angulo negativo ou igual a zero!')
}

/* ===================== Exercício switch/case ===================== */
console.log('\n---------- EXERCICIO switch/case ----------\n');

const pecaXadrez = 'CaVaLo';
console.log('Peça escolhida: ' + pecaXadrez + '\n');

switch (pecaXadrez.toLowerCase()){
  case 'rei':
    console.log('Rei: Qualquer direção, uma casa por vez.');
    break;
  case 'rainha':
    console.log('Rainha: Qualquer direção (vertical, horizontal e diagonal), quantas casas quiser, desde que estejam livres.');
    break;
  case 'torre':
    console.log('Torre: Quantas casas quiser na horizontal e vertical, em linha reta.');
    break;
  case 'bispo':
    console.log('Bispo: Diagonal, quantas casas quiser.');
    break;
  case 'cavalo':
    console.log('Cavalo: Pode saltar sobre outras peças, movimento "um-dois" ou "em L" (duas casas na horizontal e uma na vertical ou duas na vertical e uma na horizontal)');
    break;
  case 'peao':   
    console.log('Peão: sempre uma casa pasra frente, exceto no primeiro movimento que pode mover-se duas casas.');
    break;
  default:
    console.log('Erro, peça inválida.')
    break                          
};

/* ===================== Exercício if/else 5 ===================== */
console.log('\n---------- EXERCICIO if/else 5 ----------\n');

let nota = getRandomInt(0,100);

if (nota >= 90) {
  console.log('Nota: A ' + '(' + nota + ')')
} else if (nota >= 60) {
  console.log('Nota: B ' + '(' + nota + ')')
} else if (nota >= 70) {
  console.log('Nota: C ' + '(' + nota + ')')
} else if (nota >= 60) {
  console.log('Nota: D ' + '(' + nota + ')')
} else if (nota >= 50) {
  console.log('Nota: E ' + '(' + nota + ')')
} else {
  console.log('Nota: F ' + '(' + nota + ')')
}
