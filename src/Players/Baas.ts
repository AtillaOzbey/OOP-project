import ByteCorp from '../ByteCorp.js';
import CanvasRenderer from '../CanvasRenderer.js';
import KeyListener from '../KeyListener.js';

export default class Baas {
  private image: HTMLImageElement;

  private posX: number;

  private posY: number;

  public constructor(posx: number, posy: number) {
    this.posX = posx;
    this.posY = posy;
    this.image = CanvasRenderer.loadNewImage('./assets/Baas1.png');
  }


  public update(elapsed: number): void {

  }

  public render(canvas: HTMLCanvasElement): void {
    CanvasRenderer.drawImage(canvas, this.image, this.posX, this.posY);
  }
}
