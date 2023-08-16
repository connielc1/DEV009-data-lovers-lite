// estas funciones son de ejemplo

export const example = () => {
  return 'example';
};

export const filtrarPorTipo = (cards,opcionArcanos) => {
  return cards.filter(cards => cards.type === opcionArcanos);
};
