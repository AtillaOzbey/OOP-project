import CanvasRenderer from '../CanvasRenderer.js';
import WallVert from '../WallVert.js';

export default class PlayerGrootPijl {
  private image: HTMLImageElement;

  private speed: number;

  private posX: number;

  private posY: number;

  private movingLeft: boolean;

  private movingRight: boolean;

  private movingUp: boolean;

  private movingDown: boolean;

  public constructor(maxX: number, maxY: number, speed: number) {
    this.posX = maxX;
    this.posY = maxY;
    this.speed = speed;
    if (this.speed === 1) {
      this.image = CanvasRenderer.loadNewImage('./assets/arrow_right2.png');
    } else if (this.speed === 2) {
      this.image = CanvasRenderer.loadNewImage('./assets/arrow_right.png');
    }
  }

  /**
   *Makes the player move left
   */
  public moveLeft(): void {
    this.posX -= this.speed;
    if (this.speed === 1) {
      this.image = CanvasRenderer.loadNewImage('./assets/arrow_left2.png');
    } else if (this.speed === 2) {
      this.image = CanvasRenderer.loadNewImage('./assets/arrow_left.png');
    }
  }

  /**
   *Makes the player move right
   */
  public moveRight(): void {
    this.posX += this.speed;
    this.movingRight = true;
    if (this.speed === 1) {
      this.image = CanvasRenderer.loadNewImage('./assets/arrow_right2.png');
    } else if (this.speed === 2) {
      this.image = CanvasRenderer.loadNewImage('./assets/arrow_right.png');
    }
  }

  /**
   *Makes the player move up
   */
  public moveUp(): void {
    this.posY -= this.speed;
    this.movingUp = true;
    if (this.speed === 1) {
      this.image = CanvasRenderer.loadNewImage('./assets/arrow_up2.png');
    } else if (this.speed === 2) {
      this.image = CanvasRenderer.loadNewImage('./assets/arrow_up.png');
    }
  }

  /**
   *Makes the player move down
   */
  public moveDown(): void {
    this.posY += this.speed;
    this.movingDown = true;
    if (this.speed === 1) {
      this.image = CanvasRenderer.loadNewImage('./assets/arrow_down2.png');
    } else if (this.speed === 2) {
      this.image = CanvasRenderer.loadNewImage('./assets/arrow_down.png');
    }
  }

  /**
   * Collision with wall
   * @param wall wall
   * @returns whether collision is true or not
   */
  public isCollidingWall(wall: WallVert): boolean {
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

  /**
   * Updates the level
   *@param elapsed time which has elapsed
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, class-methods-use-this
  public update(elapsed: number): void {

  }

  /**
   * Render all the elements in the screen. Called from GameLoop
   * @param canvas the canvas to render to
   */
  public render(canvas: HTMLCanvasElement): void {
    CanvasRenderer.drawImage(canvas, this.image, this.posX, this.posY);
  }
}
