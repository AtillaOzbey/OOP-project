import CanvasRenderer from './CanvasRenderer.js';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import MouseListener, { MouseCoordinates } from './MouseListener.js';
import Scene from './Scene.js';
import SpotTheDifference from './spotTheDifference/SpotTheDifference.js';

export default class Level extends Scene {
  private logo: HTMLImageElement;

  public constructor(maxX: number, maxY: number) {
    super(maxX, maxY);
    this.logo = CanvasRenderer.loadNewImage('./assets/Kantoor3_700x1400.png');
  }

  /**
   * Processes the input
   *@param mouseListener listens to the mouse
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, class-methods-use-this
  public override processInput(mouseListener: MouseListener): void {
  }

  /**
   * Updates the level
   *@param elapsed the elapsed time
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, class-methods-use-this
  public override update(elapsed: number): void {

  }

  public override getNextScene(): Scene | null {
    return new SpotTheDifference(this.maxX, this.maxY);
  }

  /**
   * Renders to the canvas
   *@param canvas the canvas to render to
   */
  public override render(canvas: HTMLCanvasElement): void {
    CanvasRenderer.drawImage(
      canvas,
      this.logo,
      (canvas.width / 2) - (this.logo.width / 2),
      (canvas.height / 2) - (this.logo.height / 2),
    );
  }
}
