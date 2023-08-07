import data from '/data/tarot/tarot.js';
const contenedor = document.getElementById("contenido");
const cards = data.cards
const dibujarTarjetas = (element) => {
    contenedor.innerHTML += `
            <div>
                <img src=${element.img} alt=${element.name}>
                <p>${element.name}</p>  
                <ul>
                <li>Tipo: ${element.type}</li>
                <li>Valor: ${element.value}</li>
                <li>Nombre corto: ${element.name_short}</li> 
              </ul> </div>
            ` ;
}
cards.forEach(element => {
    dibujarTarjetas(element)
});
const selectTipos = document.getElementById("Tipos")
selectTipos.addEventListener("change", () => {
    const opcionArcanos = selectTipos.value;
    contenedor.innerHTML = ""
    if (opcionArcanos == "todas") {
        cards.forEach(element => {
            dibujarTarjetas(element)
        });
    } else {
        const cartasFiltradas = cards.filter(cards => cards.type === opcionArcanos)
        cartasFiltradas.forEach(element => {
            dibujarTarjetas(element)

        });
    }
});
const ordenAlfabetico = document.getElementById("alfabetico")
ordenAlfabetico.addEventListener("change", () => {
    const selectOrden = ordenAlfabetico.value;
    if (selectOrden === "a-z") {
        cards.sort((a, b) => a.name > b.name ? 1 : -1);
    } else if (selectOrden === "z-a") {
        cards.sort((a, b) => a.name < b.name ? 1 : -1);
    }
    contenedor.innerHTML = "";
    cards.forEach(element => {
        dibujarTarjetas(element);
    });
});
    /*carta.addEventListener("click", function () {
});
contenedor.appendChild(carta); */
/*carta.document.createElement("Descripción")
carta.style.display = "block"; */
/* <li>Significado: ${element.meaning_up}</li> 
        <li>Significado inverso: ${element.meaning_rev}</li>
<li>Descripción: ${element.desc}</li> */