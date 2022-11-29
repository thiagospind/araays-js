const notas = [7, 7, 8, 9];

//Spread operator = faz uma cópia do array original, sem referencia-lo.
let novasNotas = [...notas, 10];

for (let i = 0; i < notas.length; i++) {
    novasNotas.push(i)
}

// novasNotas.push(10);

console.log(`As novas notas são ${novasNotas}`);
console.log(`As notas otiginais são ${notas}`);