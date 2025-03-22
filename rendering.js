/**
 * Renders the dungeon map on the canvas.
 * @param {CanvasRenderingContext2D} ctx - The canvas rendering context.
 * @param {Array<Array<number>>} dungeon - The dungeon map to render.
 */
export function renderDungeon(ctx, dungeon) {
  for (let y = 0; y < dungeon.length; y++) {
    for (let x = 0; x < dungeon[y].length; x++) {
      if (dungeon[y][x] === 1) {
        ctx.fillStyle = 'black'; // Wall color
      } else {
        ctx.fillStyle = 'white'; // Empty space color
      }
      ctx.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
    }
  }
}

/**
 * Renders the player on the canvas.
 * @param {CanvasRenderingContext2D} ctx - The canvas rendering context.
 * @param {number} playerX - The x-coordinate of the player.
 * @param {number} playerY - The y-coordinate of the player.
 */
export function renderPlayer(ctx, playerX, playerY) {
  ctx.fillStyle = 'blue'; // Player color
  ctx.fillRect(playerX, playerY, TILE_SIZE, TILE_SIZE);
}
