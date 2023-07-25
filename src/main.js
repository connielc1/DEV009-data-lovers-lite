import data from '/data/tarot/tarot.js';
const contenedor = document.getElementById("contenido");
console.log(data)
const cards = data.cards
console.log(cards)
cards.forEach(element => {
    let carta = document.createElement("div");
    carta.innerHTML += `

        <img src=${element.img} alt=${element.name}>
        <p>${element.name}</p>  
        <ul>
        <li>Tipo: ${element.type}</li>
        <li>Valor</li>
        <li>Descripción</li>
        <li>Significado</li>
        <li>Significado inverso</li>
      </ul>
    ` ; 
    carta.addEventListener("click",function(){
        console.log("hola")
    });
contenedor.appendChild(carta);
});