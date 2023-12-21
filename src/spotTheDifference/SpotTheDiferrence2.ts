import CanvasRenderer from '../CanvasRenderer.js';
import MouseListener, { MouseCoordinates } from '../MouseListener.js';
import Scene from '../Scene.js';
import SpotTheDifference2 from './Gameover.js';

export default class SpotTheDiferrence2 extends Scene {
  private logo: HTMLImageElement;

  private circles: { x: number, y: number }[] = [];

  private lives: number;

  private spotted: string[];

  public constructor(maxX: number, maxY: number) {
    super(maxX, maxY);
    this.lives = 3;
    this.spotted = [];
    this.logo = CanvasRenderer.loadNewImage('/assets/Zoekverschillen2.png');
  }

  public override processInput(mouseListener: MouseListener): void {
    if (mouseListener.buttonPressed(MouseListener.BUTTON_LEFT)) {
      this.lives -= 1;
      const mouseCoordinates: MouseCoordinates = mouseListener.getMousePosition();
      console.log(mouseListener.getMousePosition());
      if (mouseCoordinates.x > 513 && mouseCoordinates.x < 530 && mouseCoordinates.y > 295 && mouseCoordinates.y < 310) {
        this.addCircle(mouseCoordinates.x, mouseCoordinates.y);
        this.lives += 1;
        if (!this.spotted.includes('spotted')) {
          this.spotted.splice(0, 0, 'spotted');
        }
      }
      if (mouseCoordinates.x > 535 && mouseCoordinates.x < 560 && mouseCoordinates.y > 410 && mouseCoordinates.y < 430) {
        this.addCircle(mouseCoordinates.x, mouseCoordinates.y);
        this.lives += 1;
        if (!this.spotted.includes('spotted1')) {
          this.spotted.splice(0, 0, 'spotted1');
        }
      }
      if (mouseCoordinates.x > 427 && mouseCoordinates.x < 445 && mouseCoordinates.y > 425 && mouseCoordinates.y < 440) {
        this.addCircle(mouseCoordinates.x, mouseCoordinates.y);
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

  public override update(elapsed: number): void {
    // Voeg hier update-logica toe indien nodig
  }

  public override getNextScene(): Scene | null {
    if (this.lives <= 0) {
      return new SpotTheDifference2(this.maxX, this.maxY);
    } else if (this.spotted.length === 3) {
      return this;

    }
    return this;

  }


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
