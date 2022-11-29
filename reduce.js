const numeros = [43, 50, 65, 12]

function operacaoNumerica(acc, atual) {
    console.log(acc, atual, acc + atual)
    return atual + acc
}
   
const soma = numeros.reduce(operacaoNumerica, 0)

