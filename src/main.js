import data from '/data/tarot/tarot.js';
import { filtrarPorTipo } from './data.js';
import { selectOrdenAlfabetico } from './data.js';
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
  if (opcionArcanos === "todas") {
    cards.forEach(element => {
      dibujarTarjetas(element)
    });
  } else {
    const cartasFiltradas = filtrarPorTipo(cards, opcionArcanos)
    cartasFiltradas.forEach(element => {
      dibujarTarjetas(element)

    });
  }
});
const ordenAlfabetico = document.getElementById("alfabetico")
ordenAlfabetico.addEventListener("change", () => {
  const selectOrden = ordenAlfabetico.value
  const cartasOrdenadas = selectOrdenAlfabetico(cards, selectOrden)
  contenedor.innerHTML = "";
  cartasOrdenadas.forEach(element => {
    dibujarTarjetas(element);
  });
});
