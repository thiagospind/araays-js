const nomes = ["Evaldo", "Mari", "Camis"]

// nomes.forEach(function (nome, indice, array) {
//     console.log(nome, indice, array);
// });

// nomes.forEach((nome, indice, array) => console.log(nome, indice, array));

function imprimeNome(nome){
    console.log(nome);
}

nomes.forEach(imprimeNome);