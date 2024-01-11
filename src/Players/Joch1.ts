import ByteCorp from '../ByteCorp.js';
import CanvasRenderer from '../CanvasRenderer.js';
import KeyListener from '../KeyListener.js';

export default class Joch1 {
  private image: HTMLImageElement;

  private posX: number;

  private posY: number;

  public constructor() {
    this.posX = 51;
    this.posY = 100;
    this.image = CanvasRenderer.loadNewImage('./assets/Joch1.png');
  }


  public update(elapsed: number): void {

  }

  public render(canvas: HTMLCanvasElement): void {
    CanvasRenderer.drawImage(canvas, this.image, this.posX, this.posY);
  }
}
