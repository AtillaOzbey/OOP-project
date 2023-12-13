import { Game } from './GameLoop.js';

import CanvasRenderer from './CanvasRenderer.js';

export default class ByteCorp extends Game {
  private canvas: HTMLCanvasElement;

  public constructor(canvas: HTMLCanvasElement) {
    super();
    this.canvas = canvas;
    this.canvas.height = window.innerHeight;
    this.canvas.width = window.innerWidth;
  }

  /**
   * Create a new item to fly through space.
   *
   * It can either be a new power up or a new meteor, depending on random chance.
   */
  private makeItem(): void {

  }

  /**
   * Process all input. Called from the GameLoop.
   */
  public processInput(): void {

  }

  /**
   * Update game state. Called from the GameLoop
   *
   * @param elapsed time elapsed from the GameLoop
   * @returns true if the game should continue
   */
  public update(elapsed: number): boolean {
    return true;
  }

  /**
   * Tests conditions whether game is over. If time left is less than 0
   *
   * @returns True if game is over
   */
  private isGameOver(): boolean {
    return false;
  }

  /**
   * Render all the elements in the screen. Called from GameLoop
   */
  public render(): void {
    CanvasRenderer.clearCanvas(this.canvas);
  }
}
