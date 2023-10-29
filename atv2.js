const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//Utilizando map, crie um novo array que contenha cada elemento do array original multiplicado por 2.
const doubledNumbers = numbers.map((num) => num * 2);
console.log("numeros duplicados: "+doubledNumbers); // Output: numeros duplicados: 2,4,6,8,10,12,14,16,18,20


//Utilizando filter, crie um novo array que contenha apenas os números pares do array original.
const apenasPares = numbers.filter((num) => num % 2 === 0);
console.log("numeros pares: "+apenasPares); // Output: numeros pares: 2,4,6,8,10

//Utilizando find, encontre o primeiro elemento do array original que seja maior que 5.
const maiorQueCinco = numbers.find((num) => num > 5);
console.log("numero maior que 5: "+maiorQueCinco); // Output: numero maior que 5: 6

//Utilizando indexOf, encontre o índice do elemento 4 no array.
const indiceQuatro = numbers.indexOf(4);
console.log("indice do elemento 4: "+indiceQuatro); // Output: indice do elemento 4: 3

//Utilizando fill, crie um novo array com 5 elementos, todos preenchidos com o valor 0.
const cincoZeros = new Array(5).fill(0);
console.log("array com 0: "+cincoZeros); // Output: array com 0: 0,0,0,0,0

//Utilizando some, verifique se há pelo menos um número par no array.
const temPar = numbers.some((num) => num % 2 === 0);
console.log("tem par: "+temPar); // Output: tem par: true

//Utilizando every, verifique se todos os elementos do array são menores que 10.
const menorQueDez = numbers.every((num) => num < 10 );
console.log("todos sao menor que dez: "+menorQueDez); // Output: todos sao menor que dez: false