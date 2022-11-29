const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

// Criação de instancia da classe Set(). Um set (conjunto) não pode ter itens repetidos.
// const meuSet = new Set(nomes);

const nomesAtualizados = [... new Set(nomes)];

console.log(nomesAtualizados);