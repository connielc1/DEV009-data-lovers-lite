import { filtrarPorTipo } from '../src/data.js';
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


