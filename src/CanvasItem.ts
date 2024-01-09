import CanvasRenderer from './CanvasRenderer.js';
import Wall from './Wall.js';

export default abstract class CanvasItem {
  protected image: HTMLImageElement;

  protected posX: number;

  protected posY: number;

  public getPosX(): number {
    return this.posX;
  }

  public getPosY(): number {
    return this.posY;
  }

  public getWidth(): number {
    return this.image.width;
  }

  public getHeight(): number {
    return this.image.height;
  }

<<<<<<< Updated upstream
  public isCollidingWithItem(item: Wall): boolean {
    return (this.getPosX() < item.getPosX() + item.getWidth()
      && this.getPosX() + this.getWidth() > item.getPosX()
      && this.getPosY() + this.getHeight() > item.getPosY()
      && this.getPosY() < item.getPosY() + item.getHeight());
  }

=======
>>>>>>> Stashed changes
  /**
   * Render the item to the canvas
   * @param canvas canvas to render to
   */
  public render(canvas: HTMLCanvasElement): void {
    CanvasRenderer.drawImage(canvas, this.image, this.posX, this.posY);
  }
}
