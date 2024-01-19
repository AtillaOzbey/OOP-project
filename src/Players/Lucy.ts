import CanvasRenderer from '../CanvasRenderer.js';
import Players from './Players.js';

export default class Lucy extends Players {
  public constructor(posX: number, posY: number) {
    super();
    this.posX = posX;
    this.posY = posY;
    this.image = CanvasRenderer.loadNewImage('./assets/Lucy.png');
  }

  /**
   * Updates the character
   *@param elapsed time which has elapsed
   */
  // eslint-disable-next-line class-methods-use-this, @typescript-eslint/no-unused-vars
  public override update(elapsed: number): void {

  }

  /**
   * Renders items on the canvas
   *@param canvas which canvas to render to
   */
  public override render(canvas: HTMLCanvasElement): void {
    CanvasRenderer.drawImage(canvas, this.image, this.posX, this.posY);
  }
}
