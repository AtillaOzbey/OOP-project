import CanvasRenderer from '../CanvasRenderer.js';
import Players from './Players.js';
import WallVert from '../WallVert.js';

export default class PlayerPijl extends Players {
  private speed: number;

  private movingLeft: boolean;

  private movingRight: boolean;

  private movingUp: boolean;

  private movingDown: boolean;

  public constructor(posX: number, posY: number, speed: number) {
    super();
    this.posX = posX;
    this.posY = posY;
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

  /**
   * Updates the character
   *@param elapsed time which has elapsed
   */
  // eslint-disable-next-line class-methods-use-this, @typescript-eslint/no-unused-vars
  public override update(elapsed: number): void {

  }

  /**
   * Renders items on the canvas
   *@param canvas which canvas to render to
   */
  public override render(canvas: HTMLCanvasElement): void {
    CanvasRenderer.drawImage(canvas, this.image, this.posX, this.posY);
  }
}
