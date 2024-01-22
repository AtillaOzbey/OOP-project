import CanvasRenderer from './CanvasRenderer.js';

export default class MessageBorder {
  private logo: HTMLImageElement;

  private posX: number;

  private posY: number;

  public constructor(logo: HTMLImageElement) {
    this.logo = logo;
    this.posX = 0;
    this.posY = 0;
  }

  /**
   * Changes the message in the border
   *@param image image to change to
   */
  public changeImage(image: HTMLImageElement): void {
    this.logo = image;
  }

  /**
   * renders the image
   *@param canvas chooses canvas
   */
  public render(canvas: HTMLCanvasElement): void {
    CanvasRenderer.drawImage(canvas, this.logo, this.posX, this.posY);
  }
}
