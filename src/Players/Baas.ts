import ByteCorp from '../ByteCorp.js';
import CanvasRenderer from '../CanvasRenderer.js';
import KeyListener from '../KeyListener.js';

export default class Baas {
  private image: HTMLImageElement;

  private posX: number;

  private posY: number;

  public constructor() {
    this.posX = 1169;
    this.posY = 580;
    this.image = CanvasRenderer.loadNewImage('./assets/Baas1.png');
  }


  public update(elapsed: number): void {

  }

  public render(canvas: HTMLCanvasElement): void {
    CanvasRenderer.drawImage(canvas, this.image, this.posX, this.posY);
  }
}
