/*
const pessoa = ["Gilmar", "Peron", "18", "Estudante"];

document.getElementById('teste').innerHTML = pessoa.join(" - ");

pessoa.push("Adicionar"); Adiciona no final do array  

pessoa.unshift("Adicionar"); Adicionar no inicio do array (altera a ordem dos indices, o valor 1 passa a ser 0)

delete pessoa[0]; Deleta o valor do indice 0 mas não altera a ordem dos outros indices (o indice 0 nao existirá mais, o valor 0 será undefined.)

pessoa.pop(); Remove o último item do array

pessoa.shift(); Remove o primeiro item da matriz (obs: removendo o primeiro o índice passar a ser o que seria o indice 1)

pessoa.splice(1,0, "item adicionado 1", "item adicionado 2");

*/
// CONCATENAR VÁRIOS ARRAYS
/*
const lista1 = ["Arroz", "Feijão", "Leite", "Macarrão"]
const lista2 = ["Suco", "Refrigerante", "Carne"]
const lista3 = ["Salgadinho", "Docinhos"]

const superLista = lista1.concat(lista2, lista3);

document.getElementById('teste').innerHTML = superLista
*/
//FATIANDO ARRAYS
/*
const jogadores = [
    "Biro Biro",
    "Ribamar", 
    "Maradona", 
    "Pelé", 
    "Neymar", 
    "Messi", 
    "Cristiano Ronaldo", 
    "Vampeta",
    "Dimitri"
];

const craques = jogadores.slice(2,7); Quero ver apenas os elementos do indice 2 até o 7

const jogOrdem = jogadores.sort(); Deixa os itens em Ordem (alfabética)

jogadores.sort();
jogadores.reverse();

    O método acima deixa as coisas em ordem oposota, primeiro devo deixar em ordem depois colocar reverse();
*/



const numeros = [40, 100, 1, 5, 25, 10]

//numeros.sort(function(a,b){return a-b}); Colocar em ordem Numérica (entendi nada, só segue o jogo)

/*
document.getElementById('teste').innerHTML = maiorNumero(numeros);
function maiorNumero(array){
    return Math.max.apply(null, array)
}

    Esse Método irá pegar o maior número
*/

/*
document.getElementById('teste').innerHTML = menorNumero(numeros);
function menorNumero(array){
    return Math.min.apply(null, array)

    Esse Método irá pegar o menos número 
}
*/
/*
const maior20 = numeros.filter(filtragem);

document.getElementById('teste').innerHTML = maior20;
function filtragem(value, index, array){
    return value > 20;
}

    Esse Método irá filtrar numeros
*/