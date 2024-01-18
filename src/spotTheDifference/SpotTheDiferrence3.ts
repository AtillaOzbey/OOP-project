import CanvasRenderer from '../CanvasRenderer.js';
import Level from '../Level.js';
import MouseListener, { MouseCoordinates } from '../MouseListener.js';
import Scene from '../Scene.js';
import Gameover from './Gameover.js';

export default class SpotTheDiferrence3 extends Scene {
  private logo: HTMLImageElement;

  private circles: { x: number, y: number }[] = [];

  private lives: number;

  private spotted: string[];

  public constructor(maxX: number, maxY: number) {
    super(maxX, maxY);
    this.lives = 3;
    this.spotted = [];
    this.logo = CanvasRenderer.loadNewImage('/assets/doolhoffie3.png');
  }

  /**
   * Processes the input
   *@param mouseListener listens to the mouse
   */
  public override processInput(mouseListener: MouseListener): void {
    if (mouseListener.buttonPressed(MouseListener.BUTTON_LEFT)) {
      this.lives -= 1;
      const mouseCoordinates: MouseCoordinates = mouseListener.getMousePosition();
      if (mouseCoordinates.x > 574 && mouseCoordinates.x < 584
        && mouseCoordinates.y > 505 && mouseCoordinates.y < 516) {
        this.addCircle(580, 513);
        this.lives += 1;
        if (!this.spotted.includes('spotted')) {
          this.spotted.splice(0, 0, 'spotted');
        }
      }
      if (mouseCoordinates.x > 659 && mouseCoordinates.x < 670
        && mouseCoordinates.y > 547 && mouseCoordinates.y < 557) {
        this.addCircle(665, 552);
        this.lives += 1;
        if (!this.spotted.includes('spotted1')) {
          this.spotted.splice(0, 0, 'spotted1');
        }
      }
      if (mouseCoordinates.x > 687 && mouseCoordinates.x < 697
        && mouseCoordinates.y > 340 && mouseCoordinates.y < 352) {
        this.addCircle(692, 348);
        this.lives += 1;
        if (!this.spotted.includes('spotted2')) {
          this.spotted.splice(0, 0, 'spotted2');
        }
      }
    }
  }

  private addCircle(x: number, y: number): void {
    this.circles.push({ x, y });
  }

  /**
   * Updates the level
   *@param elapsed time which has elapsed
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, class-methods-use-this
  public override update(elapsed: number): void {
    // Voeg hier update-logica toe indien nodig
  }

  public override getNextScene(): Scene | null {
    if (this.lives <= 0) {
      return new Gameover(this.maxX, this.maxY);
    } else if (this.spotted.length === 3) {
      return new Level(this.maxX, this.maxY);
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

    CanvasRenderer.writeText(canvas, `Levens: ${this.lives} `, 45, 112);

    // Teken de cirkels op de afbeelding
    this.circles.forEach((circle) => {
      CanvasRenderer.drawCircle(canvas, circle.x, circle.y, 20, 'red', 3); // aanpassen aan je wensen
    });
  }
}
