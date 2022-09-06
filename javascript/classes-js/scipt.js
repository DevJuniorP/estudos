class Carro{ //A primeira letra do nome da classe deve ser MAIÚSCULA
    constructor(valor1, valor2, valor3){
        this.marca = valor1
        this.modelo = valor2
        this.ano = valor3
    }
    buzina(){
        return this.modelo+" buzinou: Biiiiiiiiiip"; // se não tiver o this.modelo+ = o modelo não será sele.
    }
}
const uno = new Carro("Fiat", "Uno", 2001);
console.log(uno)
const gol = new Carro("Volkswagen", "Gol", 2010);
console.log(gol.ano)