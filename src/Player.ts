import ByteCorp from './ByteCorp.js';
import CanvasRenderer from './CanvasRenderer.js';
import KeyListener from './KeyListener.js';
import Wall from './Wall.js';

export default class Player {
  private image: HTMLImageElement;

  private speed: number;

  private posX: number;

  private posY: number;

  private movingLeft: boolean;

  private movingRight: boolean;

  private movingUp: boolean;

  private movingDown: boolean;

  private wall: Wall;

  public constructor(maxX: number, maxY: number) {
    this.posX = maxX;
    this.posY = maxY;
    this.image = CanvasRenderer.loadNewImage('./assets/arrow_right.png');
  }

  public moveLeft(): void {
    this.posX -= 5;
    // if (this.posX < 20) {
    //   this.posX = 20;
    // }
    // if (this.posX < 1000 && this.posX > 935 && this.posY > 300) {
    //   this.posX = 1000;
    // }
    // this.image = CanvasRenderer.loadNewImage('./assets/Alex_Left.png');
    this.image = CanvasRenderer.loadNewImage('./assets/arrow_left.png');
  }

  public moveRight(): void {
    this.posX += 5;
    // this.image = CanvasRenderer.loadNewImage('./assets/Alex_Right.png');
    // if (this.posX > 1310) {
    //   this.posX = 1310;
    // }
    // if (this.posX > 935 && this.posX < 950 && this.posY > 300) {
    //   this.posX = 935;
    // }
    this.image = CanvasRenderer.loadNewImage('./assets/arrow_right.png');
  }

  public moveUp(): void {
    this.posY -= 5;
    // this.image = CanvasRenderer.loadNewImage('./assets/Alex_Back.png');
    // if (this.posY < 25) {
    //   this.posY = 25;
    // }
    // if (this.posY < 410 && this.posY > 390 && this.posX > 950 && this.posX < 1165) {
    //   this.posY = 410;
    // }
    // if (this.posY < 410 && this.posY > 390 && this.posX > 1180 && this.posX < 1500) {
    //   this.posY = 410;
    // }
    this.image = CanvasRenderer.loadNewImage('./assets/arrow_up.png');
  }

  public moveDown(): void {
    this.posY += 5;
    // this.image = CanvasRenderer.loadNewImage('./assets/Alex_Front.png');
    // if (this.posY > 610) {
    //   this.posY = 610;
    // }
    // if (this.posY > 300 && this.posY < 350 && this.posX > 1180 && this.posX < 1500) {
    //   this.posY = 300;
    // }
    // if (this.posY > 300 && this.posY < 350 && this.posX > 950 && this.posX < 1165) {
    //   this.posY = 300;
    // }
    this.image = CanvasRenderer.loadNewImage('./assets/arrow_down.png');
  }

  /**
   * Collision with wall
   */
  public isCollidingWithItem(item: Wall): boolean {
    return (this.getPosX() < this.wall.getPosX() + this.wall.getWidth()
      && this.getPosX() + this.getWidth() > this.wall.getPosX()
      && this.getPosY() + this.getHeight() > this.wall.getPosY()
      && this.getPosY() < this.wall.getPosY() + this.wall.getHeight());
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
