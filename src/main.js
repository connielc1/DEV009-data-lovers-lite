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
        <li>Valor: ${element.value}</li>
        <li>Nombre corto: ${element.name_short}</li> 
      </ul>
    ` ;
    carta.addEventListener("click", function () {
    });
    contenedor.appendChild(carta);
});
/*carta.document.createElement("Descripción") 
    carta.style.display = "block"; */
/* <li>Significado: ${element.meaning_up}</li> 
        <li>Significado inverso: ${element.meaning_rev}</li>
        <li>Descripción: ${element.desc}</li> */
const selectTipos=document.getElementById("Tipos")
selectTipos.addEventListener("change", () => {
const opcionArcanos= selectTipos.value;
console.log(opcionArcanos)
const cartasFiltradas=cards.filter(cards => cards.type === opcionArcanos)
console.log(cartasFiltradas)
});