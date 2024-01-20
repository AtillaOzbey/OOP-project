import CanvasRenderer from './CanvasRenderer.js';
import KeyListener from './KeyListener.js';

export default class MessageBorder {
  private logo: HTMLImageElement;

  private posX: number;

  private posY: number;



  public constructor(logo: HTMLImageElement) {
    this.logo = logo;
    this.posX = 0;
    this.posY = 0;
  }

  public changeImage(image: HTMLImageElement): void {
    this.logo = image;
  }

  public render(canvas: HTMLCanvasElement): void {
    CanvasRenderer.drawImage(canvas, this.logo, this.posX, this.posY);
  }
}
