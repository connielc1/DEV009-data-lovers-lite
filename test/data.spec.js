import { filtrarPorTipo } from '../src/data.js';
import { selectOrdenAlfabetico } from '../src/data.js';
const data = [
  {
    "name": "The Magician",
    "type": "major",
  },
  {
    "name": "Page of Wands",
    "type": "minor",
  },
  {
    "name": "Four of Wands",
    "type": "minor",
  }
]

describe('filtrarPorTipo', () => {
  it('is a function', () => {
    expect(typeof filtrarPorTipo).toBe('function');
  });

  it('debería retornar por el tipo seleccionado', () => {
    const result1 = [{
      "name": "The Magician",
      "type": "major",
    }]
    expect(filtrarPorTipo(data, "major")).toEqual(result1)
  });
});
describe('selectOrdenAlfabetico', () => {
  it('debería ordenar por alfabeto en creciente', () => {
    const ordenCartasCreciente = [
      {
        "name": "Four of Wands",
        "type": "minor",
      },
      {
        "name": "Page of Wands",
        "type": "minor",
      },
      {
        "name": "The Magician",
        "type": "major",
      }
    ];

    const selectOrdenCreciente = selectOrdenAlfabetico(data, "a-z");

    expect(selectOrdenCreciente).toStrictEqual(ordenCartasCreciente);
  });

  it('debería ordenar por alfabeto en decreciente', () => {
    const ordenCartasD = [
      {
        "name": "The Magician",
        "type": "major",
      },
      {
        "name": "Page of Wands",
        "type": "minor",
      },
      {
        "name": "Four of Wands",
        "type": "minor",
      }
    ];

    const selectOrden = selectOrdenAlfabetico(data, "z-a");

    expect(selectOrden).toStrictEqual(ordenCartasD);
  });

})


