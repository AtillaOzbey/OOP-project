import CanvasRenderer from '../CanvasRenderer.js';
import Players from './Players.js';
import WallVert from '../Walls/WallVert.js';

export default class PlayerPijl extends Players {
  private speed: number;

  private direction: string = 'right';

  public constructor(posX: number, posY: number, speed: number) {
    super();
    this.posX = posX;
    this.posY = posY;
    this.speed = speed;
    this.updateImage();
  }

  /**
   * Updates the player image based on the current direction
   */
  private updateImage(): void {
    const basePath: string = './assets/';
    switch (this.direction) {
      case 'left':
        this.image = CanvasRenderer.loadNewImage(`${basePath}arrow_left${this.speed === 1 ? '2' : ''}.png`);
        break;
      case 'right':
        this.image = CanvasRenderer.loadNewImage(`${basePath}arrow_right${this.speed === 1 ? '2' : ''}.png`);
        break;
      case 'up':
        this.image = CanvasRenderer.loadNewImage(`${basePath}arrow_up${this.speed === 1 ? '2' : ''}.png`);
        break;
      case 'down':
        this.image = CanvasRenderer.loadNewImage(`${basePath}arrow_down${this.speed === 1 ? '2' : ''}.png`);
        break;
      default:
        this.image = CanvasRenderer.loadNewImage(`${basePath}arrow_right${this.speed === 1 ? '2' : ''}.png`);
    }
  }

  /**
   * Makes the player move left
   */
  public moveLeft(): void {
    this.posX -= this.speed;
    this.direction = 'left';
    this.updateImage();
  }

  /**
   * Makes the player move right
   */
  public moveRight(): void {
    this.posX += this.speed;
    this.direction = 'right';
    this.updateImage();
  }

  /**
   * Makes the player move up
   */
  public moveUp(): void {
    this.posY -= this.speed;
    this.direction = 'up';
    this.updateImage();
  }

  /**
   * Makes the player move down
   */
  public moveDown(): void {
    this.posY += this.speed;
    this.direction = 'down';
    this.updateImage();
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
  public override update(elapsed: number): void {
    // Any additional updates can go here if needed
  }

  /**
   * Renders items on the canvas
   *@param canvas which canvas to render to
   */
  public override render(canvas: HTMLCanvasElement): void {
    CanvasRenderer.drawImage(canvas, this.image, this.posX, this.posY);
  }
}
