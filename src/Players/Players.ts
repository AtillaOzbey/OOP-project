import CanvasRenderer from '../CanvasRenderer.js';

export default abstract class Players {
  protected image: HTMLImageElement;

  protected posX: number;

  protected posY: number;

  /**
   * Updates the character
   *@param elapsed time which has elapsed
   */
  // eslint-disable-next-line class-methods-use-this, @typescript-eslint/no-unused-vars
  public update(elapsed: number): void {

  }

  public getPosY(): number {
    return this.posY;
  }

  public getPosX(): number {
    return this.posX;
  }

  public getWidth(): number {
    return this.image.width;
  }

  public getHeight(): number {
    return this.image.height;
  }

  /**
   * Renders items on the canvas
   *@param canvas which canvas to render to
   */
  public render(canvas: HTMLCanvasElement): void {
    CanvasRenderer.drawImage(canvas, this.image, this.posX, this.posY);
  }
}
