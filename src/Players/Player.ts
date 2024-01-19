import CanvasRenderer from '../CanvasRenderer.js';
import WallVert from '../Walls/WallVert.js';
import Players from './Players.js';

export default class Player extends Players {
  public speed: number;

  private movingLeft: boolean;

  private movingRight: boolean;

  private movingUp: boolean;

  private movingDown: boolean;

  public constructor(maxX: number, maxY: number) {
    super();
    this.posX = maxX;
    this.posY = maxY;
    this.speed = 5;
    this.image = CanvasRenderer.loadNewImage('./assets/Alex_Front.png');
  }

  /**
   *Makes the player move left
   */
  public moveLeft(): void {
    this.posX -= 5;
    this.image = CanvasRenderer.loadNewImage('./assets/Alex_Left.png');
  }

  /**
   *Makes the player move right
   */
  public moveRight(): void {
    this.posX += this.speed;
    this.movingRight = true;
    this.image = CanvasRenderer.loadNewImage('./assets/Alex_Right.png');
  }

  /**
   *Makes the player move up
   */
  public moveUp(): void {
    this.posY -= this.speed;
    this.movingUp = true;
    this.image = CanvasRenderer.loadNewImage('./assets/Alex_Back.png');
  }

  /**
   *Makes the player move down
   */
  public moveDown(): void {
    this.posY += this.speed;
    this.movingDown = true;
    this.image = CanvasRenderer.loadNewImage('./assets/Alex_Front.png');
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
   *Updates the level
   *@param elapsed time which has elapsed
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, class-methods-use-this
  public override update(elapsed: number): void {

  }

  /**
   * Render all the elements in the screen. Called from GameLoop
   * @param canvas the canvas to render to
   */
  public override render(canvas: HTMLCanvasElement): void {
    CanvasRenderer.drawImage(canvas, this.image, this.posX, this.posY);
  }
}
