export const filtrarPorTipo = (cards, opcionArcanos) => {
  return cards.filter(cards => cards.type === opcionArcanos);
};
export const selectOrdenAlfabetico = (cards, selectOrden) => {
  const sortedCards = [...cards]
  if (selectOrden === "a-z") {
    sortedCards.sort((a, b) => (a.name > b.name ? 1 : -1));
  } else if (selectOrden === "z-a") {
    sortedCards.sort((a, b) => (a.name < b.name ? 1 : -1));
  }
  return sortedCards;
};