import ByteCorp from './ByteCorp.js';
import { GameLoop } from './GameLoop.js';

const game: ByteCorp = new ByteCorp(document.getElementById('game') as HTMLCanvasElement);

const gameLoop: GameLoop = new GameLoop(game);
window.addEventListener('load', () => {
  gameLoop.start();
});
