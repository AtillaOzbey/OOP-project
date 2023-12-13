import SpaceEscape from './ByteCorp.js';
import { GameLoop } from './GameLoop.js';

const game: SpaceEscape = new SpaceEscape(document.getElementById('game') as HTMLCanvasElement);

const gameLoop: GameLoop = new GameLoop(game);
window.addEventListener('load', () => {
  gameLoop.start();
});
