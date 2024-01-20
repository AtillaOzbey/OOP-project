import CanvasRenderer from '../CanvasRenderer.js';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import MouseListener, { MouseCoordinates } from '../MouseListener.js';
import Scene from '../Scene.js';
import SceneStart from '../SceneStart.js';
import SpotTheDifference from './SpotTheDifference.js';

export default class Gameover extends Scene {
  private logo: HTMLImageElement;

  private starting: boolean;

  public constructor(maxX: number, maxY: number) {
    super(maxX, maxY);
    this.starting = false;
    this.logo = CanvasRenderer.loadNewImage('/assets/gameover_700x1400.png');
  }

  /**
   * Processes the input
   *@param mouseListener listens to the mouse
   */
  public processInput(mouseListener: MouseListener): void {
    if (mouseListener.buttonPressed(MouseListener.BUTTON_LEFT)) {
      this.starting = true;
    }
  }

  /**
   *
   * @param elapsed elapsed ms since last update
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, class-methods-use-this
  public override update(elapsed: number): void {
    // Voeg hier update-logica toe indien nodig
  }

  public override getNextScene(): Scene | null {
    if (this.starting) {
      return new SpotTheDifference(this.maxX, this.maxY);
    }
    return this;
  }

  /**
   * Renders the canvas
   *@param canvas what canvas to render to
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
