import orderByProps from '../orderByProps.js';

describe('orderByProps', () => {
  const obj = { name: 'мечник', health: 10, level: 2, attack: 80, defence: 40 };

  test('should return properties ordered by given array, then alphabetically', () => {
    const order = ['name', 'level'];
    const result = orderByProps(obj, order);
    const expected = [
      { key: 'name', value: 'мечник' },
      { key: 'level', value: 2 },
      { key: 'attack', value: 80 },
      { key: 'defence', value: 40 },
      { key: 'health', value: 10 },
    ];
    expect(result).toEqual(expected);
  });

  test('should handle empty order array', () => {
    const result = orderByProps(obj, []);
    const expected = [
      { key: 'attack', value: 80 },
      { key: 'defence', value: 40 },
      { key: 'health', value: 10 },
      { key: 'level', value: 2 },
      { key: 'name', value: 'мечник' },
    ];
    expect(result).toEqual(expected);
  });

  test('should handle object with no extra properties', () => {
    const simpleObj = { a: 1, b: 2 };
    const result = orderByProps(simpleObj, ['b', 'a']);
    const expected = [
      { key: 'b', value: 2 },
      { key: 'a', value: 1 },
    ];
    expect(result).toEqual(expected);
  });

  test('should ignore inherited properties', () => {
    function Parent() {
      this.inherited = 'parent';
    }
    Parent.prototype.extra = 'prototype';
    const child = new Parent();
    child.own = 'child';

    const result = orderByProps(child, ['own']);
    expect(result).toEqual([
      { key: 'own', value: 'child' },
      { key: 'inherited', value: 'parent' },
    ]);
    // Note: 'extra' from prototype is not included — correct!
  });

  test('should work with empty object', () => {
    expect(orderByProps({})).toEqual([]);
  });
});