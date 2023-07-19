import data from '/data/tarot/tarot.js';
const contenedor = document.getElementById("root");
console.log(data)
const cards = data.cards
console.log(cards)
cards.forEach(element => {

    contenedor.innerHTML+=`
    <div>
        <img src=${element.img} alt=${element.name}>
        <p>${element.name}</p>  
    </div>` ;   

});