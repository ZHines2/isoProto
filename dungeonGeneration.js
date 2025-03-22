/**
 * Generates a dungeon map with the specified width and height.
 * @param {number} width - The width of the dungeon map.
 * @param {number} height - The height of the dungeon map.
 * @returns {Array<Array<number>>} - The generated dungeon map.
 */
export function generateDungeon(width, height) {
  const dungeon = [];
  for (let y = 0; y < height; y++) {
    const row = [];
    for (let x = 0; x < width; x++) {
      row.push(Math.random() < 0.2 ? 1 : 0); // 1 represents a wall, 0 represents an empty space
    }
    dungeon.push(row);
  }
  return dungeon;
}
