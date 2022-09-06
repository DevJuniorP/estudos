const items = [
    {
        id: 0,
        nome: 'camiseta1',
        img: 'modelo.png',
        quantidade: 0
    },
    {
        id: 1,
        nome: 'camiseta2',
        img: 'modelo.png',
        quantidade: 0
    },
    {
        id: 2,
        nome: 'camiseta3',
        img: 'modelo.png',
        quantidade: 0
    },
    {
        id: 3,
        nome: 'camiseta4',
        img: 'modelo.png',
        quatidade: 0
    }
]

inicializarLoja = () => { //é a mesma coisa que criar a função do jeito normal
    var containerProdutos = document.getElementById('produtos');
    items.map((val)=>{ //mesma coisa que usar function antes de val
        containerProdutos.innerHTML += `
        
        <div class = "produto-single">
            <img src = "`+val.img+`" />
            <p>`+val.nome+`</p>
            <a key="`+val.id+`" href = "#">Adicionar ao Carrinho</a>
        </div>
        
        `;
    })
}

inicializarLoja(); //para poder chamar a função

atualizarCarrinho = () => {

    var containerCarrinho = document.getElementById('carrinho');
    containerCarrinho.innerHTML = "";
    items.map((val)=>{ //mesma coisa que usar function antes de val
        if(val.quantidade > 0){
        containerCarrinho.innerHTML += `
        
        <p>`+val.nome+` | quantidade: `+val.quantidade+`</p>
        <hr>
        
        `;
        }
    })
}


var links = document.getElementsByTagName("a");

for(var i = 0; i < links.length; i++){
    links[i].addEventListener("click", function(){
        let key = this.getAttribute('key');
        items[key].quantidade++
        atualizarCarrinho();
        return false;
    })
}