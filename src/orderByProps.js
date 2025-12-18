/**
 * Returns an array of object properties sorted by given order, then alphabetically.
 * @param {Object} obj - The object to process.
 * @param {string[]} order - Array of property names defining the priority order.
 * @returns {{key: string, value: any}[]} Sorted array of key-value pairs.
 */
export default function orderByProps(obj, order = []) {
  const ordered = [];
  const rest = [];

  // Use for...in as required
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      if (order.includes(key)) {
        ordered.push({ key, value: obj[key] });
      } else {
        rest.push({ key, value: obj[key] });
      }
    }
  }

  // Sort ordered by the index in `order`
  ordered.sort((a, b) => order.indexOf(a.key) - order.indexOf(b.key));

  // Sort rest alphabetically by key
  rest.sort((a, b) => a.key.localeCompare(b.key));

  return [...ordered, ...rest];
}