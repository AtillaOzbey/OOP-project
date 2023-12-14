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
    this.image = CanvasRenderer.loadNewImage('./assets/logo_start.png');
  }

  public moveLeft(): void {
    this.posX -= 2;
  }

  public moveRight(): void {
    this.posX += 2;
  }

  public moveUp(): void {
    this.posY -= 2;
  }

  public moveDown(): void {
    this.posY += 2;
  }

  // public isColliding(fruit: Fruit): boolean {
  //   return true;
  // }

  public getPosY(): number {
    return this.posY;
  }

  public getPosX(): number {
    return this.posX;
  }

  public getWidth(): number {
    //return this.image.width;
    return 40;
  }

  public getHeight(): number {
    //return this.image.height;
    return 40;
  }

  public update(elapsed: number): void {

  }

  public render(canvas: HTMLCanvasElement): void {
    CanvasRenderer.drawImage(canvas, this.image, this.posX, this.posY);
  }
}
