import CanvasRenderer from '../CanvasRenderer.js';

export default class Joch1 {
  private image: HTMLImageElement;

  private posX: number;

  private posY: number;

  public constructor() {
    this.posX = 573;
    this.posY = 405;
    this.image = CanvasRenderer.loadNewImage('./assets/Joch1.png');
  }

  /**
   * Updates the character
   *@param elapsed time which has elapsed
   */
  // eslint-disable-next-line class-methods-use-this, @typescript-eslint/no-unused-vars
  public update(elapsed: number): void {

  }

  /**
   * Renders items on the canvas
   *@param canvas which canvas to render to
   */
  public render(canvas: HTMLCanvasElement): void {
    CanvasRenderer.drawImage(canvas, this.image, this.posX, this.posY);
  }
}
