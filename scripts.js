import { TILE_SIZE, MAP_WIDTH, MAP_HEIGHT, PLAYER_SPEED } from './constants.js';
import { generateDungeon } from './dungeonGeneration.js';
import { renderDungeon, renderPlayer } from './rendering.js';
import { gameLoop, handlePlayerMovement } from './gameLoop.js';

// Initialize canvas and context
const canvas = document.getElementById('dungeonCanvas');
const ctx = canvas.getContext('2d');

// Initialize player position
let playerX = canvas.width / 2;
let playerY = canvas.height / 2;

// Generate dungeon
const dungeon = generateDungeon(MAP_WIDTH, MAP_HEIGHT);

// Main game loop
function mainLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  renderDungeon(ctx, dungeon);
  renderPlayer(ctx, playerX, playerY);
  handlePlayerMovement();
  requestAnimationFrame(mainLoop);
}

// Start the game loop
mainLoop();
