import CanvasRenderer from '../CanvasRenderer.js';

export default class Baas {
  private image: HTMLImageElement;

  private posX: number;

  private posY: number;

  public constructor(posx: number, posy: number) {
    this.posX = posx;
    this.posY = posy;
    this.image = CanvasRenderer.loadNewImage('./assets/Baas1.png');
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
