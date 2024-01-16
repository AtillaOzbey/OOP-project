import ByteCorp from '../ByteCorp.js';
import CanvasRenderer from '../CanvasRenderer.js';
import KeyListener from '../KeyListener.js';

export default class Lucy {
  private image: HTMLImageElement;

  private posX: number;

  private posY: number;

  public constructor() {
    this.posX = 573;
    this.posY = 140;
    this.image = CanvasRenderer.loadNewImage('./assets/Lucy.png');
  }


  public update(elapsed: number): void {

  }

  public render(canvas: HTMLCanvasElement): void {
    CanvasRenderer.drawImage(canvas, this.image, this.posX, this.posY);
  }
}
