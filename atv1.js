//array predefinido para achar pares e impares:
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//Crie uma função declarada que receba um array de inteiros e retorna um array contendo os números pares
function acharPares(array){
    let numerosPares = [];
    for (let numero of array) {
        if (numero % 2 == 0) {
            numerosPares.push(numero);
        }
    }
    return numerosPares;
}
console.log("numeros pares: "+acharPares(array));

//Crie uma função anônima que receba um array de inteiros e retorna um array contendo apenas os números ímpares deste array.
const acharImpares = array => array.filter(numero => numero % 2 !== 0);
console.log("numeros impares: "+acharImpares(array));

//Crie uma função recursiva que receba N e retorne o resultado fatorial deste número
function calcularFatorial(n) {
    if (n == 0) {
        return 1;
    }
    return n * calcularFatorial(n - 1);
}
console.log("fatorial de 4: "+calcularFatorial(4));
console.log("fatorial de 5: "+calcularFatorial(5));