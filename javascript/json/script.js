
//OBJETO CARRO
const carro = {
    marca: "Fiat",
    modelo: "Uno",
    motor: ["1.6", "1.4", "1.0"] // dentro de um json/objeto pode conter arrays
}

let texto = JSON.stringify(carro)//converte objetos em texto
document.getElementById('area').innerHTML = texto; //colocou o texto em HTML


let objeto = JSON.parse(texto); //converte texto para objeto
console.log(objeto.motor[2]); //para mostrar em console novamente, DEVO CONVERTER NOVAMENTE PARA FORMA OBJETO


document.getElementById('area').innerHTML = carro; // Usando somente isso mais a const acima, não é possível ler no documento HTML, pois, é necessário o JSON


