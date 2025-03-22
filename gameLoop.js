import { PLAYER_SPEED } from './constants.js';

/**
 * Handles player movement based on keyboard input.
 */
export function handlePlayerMovement() {
  document.addEventListener('keydown', (event) => {
    switch (event.key) {
      case 'ArrowUp':
        playerY -= PLAYER_SPEED;
        break;
      case 'ArrowDown':
        playerY += PLAYER_SPEED;
        break;
      case 'ArrowLeft':
        playerX -= PLAYER_SPEED;
        break;
      case 'ArrowRight':
        playerX += PLAYER_SPEED;
        break;
    }
  });
}

/**
 * Main game loop function.
 */
export function gameLoop(ctx, dungeon, playerX, playerY) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  renderDungeon(ctx, dungeon);
  renderPlayer(ctx, playerX, playerY);
  handlePlayerMovement();
  requestAnimationFrame(() => gameLoop(ctx, dungeon, playerX, playerY));
}
