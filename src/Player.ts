import ByteCorp from "./ByteCorp.js";
import CanvasRenderer from "./CanvasRenderer.js";
import KeyListener from "./KeyListener.js";

export default class Player {
  private image: HTMLImageElement;

  private speed: number;

  private posX: number;

  private posY: number;

  private movingLeft: boolean;

  private movingRight: boolean;

  private movingUp: boolean;

  private movingDown: boolean;

  public constructor(maxX: number, maxY: number) {
    this.posX = (maxX / 2) - 51;
    this.posY = maxY - 100;
    this.image = CanvasRenderer.loadNewImage('./assets/Alex_Front.png');
  }

  public moveLeft(): void {
    this.posX -= 5;
    this.image = CanvasRenderer.loadNewImage('./assets/Alex_Left.png');
  }

  public moveRight(): void {
    this.posX += 5;
    this.image = CanvasRenderer.loadNewImage('./assets/Alex_Right.png');
  }

  public moveUp(): void {
    this.posY -= 5;
    this.image = CanvasRenderer.loadNewImage('./assets/Alex_Back.png');
  }

  public moveDown(): void {
    this.posY += 5;
    this.image = CanvasRenderer.loadNewImage('./assets/Alex_Front.png');
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

  public update(elapsed: number): void {

  }

  public render(canvas: HTMLCanvasElement): void {
    CanvasRenderer.drawImage(canvas, this.image, this.posX, this.posY);
  }
}
