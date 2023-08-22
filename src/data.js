export const filtrarPorTipo = (cards, opcionArcanos) => {
  return cards.filter(cards => cards.type === opcionArcanos);
};
