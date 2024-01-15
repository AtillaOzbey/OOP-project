import ByteCorp from './ByteCorp.js';
import CanvasRenderer from './CanvasRenderer.js';
import KeyListener from './KeyListener.js';
import Wall from './WallVert.js';

export default class Player {
  private image: HTMLImageElement;

  public speed: number;

  private posX: number;

  private posY: number;

  private movingLeft: boolean;

  private movingRight: boolean;

  private movingUp: boolean;

  private movingDown: boolean;

  public constructor(maxX: number, maxY: number) {
    this.posX = maxX;
    this.posY = maxY;
    this.speed = 4;
    this.image = CanvasRenderer.loadNewImage('./assets/arrow_right.png');
  }

  public moveLeft(): void {
    this.posX -= this.speed;
    this.movingLeft = true;
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
    this.posX += this.speed;
    this.movingRight = true;
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
    this.posY -= this.speed;
    this.movingUp = true;
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
    this.posY += this.speed;
    this.movingDown = true;
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
   * @param wall wall
   * @returns whether collision is true or not
   */
  public isCollidingWall(wall: Wall): boolean {
    return (wall.getPosX() + wall.getWidth() > this.posX
      && wall.getPosX() < this.posX + this.image.width
      && wall.getPosY() + wall.getHeight() > this.posY
      && wall.getPosY() < this.posY + this.image.height);
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
