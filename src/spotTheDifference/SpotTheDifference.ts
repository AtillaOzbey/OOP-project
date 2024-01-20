import CanvasRenderer from '../CanvasRenderer.js';
import MessageBorder from '../MessageBorder.js';
import MouseListener, { MouseCoordinates } from '../MouseListener.js';
import Scene from '../Scene.js';
import Gameover from './Gameover.js';
import SpotTheDiferrence2 from './SpotTheDiferrence2.js';

export default class SpotTheDifference extends Scene {
  private logo: HTMLImageElement;

  private circles: { x: number, y: number }[] = [];

  private lives: number;

  private spotted: string[];

  private messageBorder: MessageBorder;

  private timeToNextItem: number;

  public constructor(maxX: number, maxY: number) {
    super(maxX, maxY);
    this.lives = 3;
    this.timeToNextItem = 5000;
    this.spotted = [];
    this.messageBorder = new MessageBorder(CanvasRenderer.loadNewImage('/assets/Verschillen_border.png'));
    this.logo = CanvasRenderer.loadNewImage('/assets/zoekdeverschillenv3.png');
  }

  /**
   * Processes the input
   *@param mouseListener listens to the mouse
   */
  public override processInput(mouseListener: MouseListener): void {
    if (mouseListener.buttonPressed(MouseListener.BUTTON_LEFT)) {
      this.lives -= 1;
      const mouseCoordinates: MouseCoordinates = mouseListener.getMousePosition();
      if (mouseCoordinates.x > 513 && mouseCoordinates.x < 530
        && mouseCoordinates.y > 295 && mouseCoordinates.y < 310) {
        this.addCircle(522, 305);
        this.lives += 1;
        if (!this.spotted.includes('spotted')) {
          this.spotted.splice(0, 0, 'spotted');
        }
      }
      if (mouseCoordinates.x > 541 && mouseCoordinates.x < 556
        && mouseCoordinates.y > 420 && mouseCoordinates.y < 433) {
        this.addCircle(550, 426);
        this.lives += 1;
        if (!this.spotted.includes('spotted1')) {
          this.spotted.splice(0, 0, 'spotted1');
        }
      }
      if (mouseCoordinates.x > 427 && mouseCoordinates.x < 445
        && mouseCoordinates.y > 425 && mouseCoordinates.y < 440) {
        this.addCircle(436, 437);
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
    this.timeToNextItem -= elapsed;
  }

  public override getNextScene(): Scene | null {
    if (this.lives <= 0) {
      return new Gameover(this.maxX, this.maxY);
    } else if (this.spotted.length === 3) {
      return new SpotTheDiferrence2(this.maxX, this.maxY);
    }
    return this;
  }

  /**
   * Renders the canvas
   *@param canvas what canvas to render to
   */
  public override render(canvas: HTMLCanvasElement): void {

    this.messageBorder.render(canvas);



    if (this.timeToNextItem <= 0) {

      CanvasRenderer.drawImage(
        canvas,
        this.logo,
        (canvas.width / 2) - (this.logo.width / 2),
        (canvas.height / 2) - (this.logo.height / 2),
      );
      this.circles.forEach((circle) => {
        CanvasRenderer.drawCircle(canvas, circle.x, circle.y, 20, 'red', 3);
      });
      CanvasRenderer.writeText(canvas, `Levens: ${this.lives} `, 45, 112);
    }
  }
}
