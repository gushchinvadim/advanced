import getSpecials from '../getSpecials.js';

describe('getSpecials', () => {
  test('should return specials with description filled when missing', () => {
    const character = {
      name: 'Лучник',
      special: [
        {
          id: 8,
          name: 'Двойной выстрел',
          icon: 'http://icon1.png',
          description: 'Двойной выстрел наносит двойной урон',
        },
        {
          id: 9,
          name: 'Нокаутирующий удар',
          icon: 'http://icon2.png',
          // no description
        },
      ],
    };

    const result = getSpecials(character);
    const expected = [
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://icon1.png',
        description: 'Двойной выстрел наносит двойной урон',
      },
      {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://icon2.png',
        description: 'Описание недоступно',
      },
    ];

    expect(result).toEqual(expected);
  });

  test('should handle empty special array', () => {
    const character = { special: [] };
    expect(getSpecials(character)).toEqual([]);
  });

  test('should work when all specials have descriptions', () => {
    const character = {
      special: [
        { id: 1, name: 'Атака', icon: 'x', description: 'Описание есть' },
      ],
    };
    const result = getSpecials(character);
    expect(result).toEqual([
      { id: 1, name: 'Атака', icon: 'x', description: 'Описание есть' },
    ]);
  });

  test('should throw if special is not provided', () => {
    expect(() => getSpecials({})).toThrow();
  });
});