const nomes = ["João", "Ana", "Caio", "Lara", "Marjorie", "Leo"];

//Remove itens de um array a partir da posição e quantidade de itens informação;
//Na primeira posição se informa o indice inicial onde se tira o primeiro item.
//Na segunda posição se informa a quantidade de itens a se retirar.
//A partir da terceira posição do array, pode-se incluir itens.
nomes.splice(1,2, "Rodrigo", "Thiago");

console.log(nomes);