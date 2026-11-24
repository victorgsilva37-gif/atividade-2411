async function buscarprodutos() {
    let url = " https://fakestoreapi.com/products"; 
let resposta = await fetch (url);
let data = await resposta.json()

   console.log()
}

buscarprodutos();