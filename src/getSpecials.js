/**
 * Extracts special attacks from a character object, ensuring description is always present.
 * @param {Object} character - The character object with a 'special' array.
 * @returns {{id: number, name: string, icon: string, description: string}[]} Array of normalized specials.
 */
export default function getSpecials({ special }) {
  return special.map(({ id, name, icon, description = 'Описание недоступно' }) => ({
    id,
    name,
    icon,
    description,
  }));
}