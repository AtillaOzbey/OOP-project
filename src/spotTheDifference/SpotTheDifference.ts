import CanvasRenderer from '../CanvasRenderer.js';
import MouseListener, { MouseCoordinates } from '../MouseListener.js';
import Scene from '../Scene.js';
import Gameover from './Gameover.js';
import SpotTheDiferrence2 from './SpotTheDiferrence2.js';

export default class SpotTheDifference extends Scene {
  private logo: HTMLImageElement;

  private circles: { x: number, y: number }[] = [];

  private lives: number;

  private spotted: string[];

  public constructor(maxX: number, maxY: number) {
    super(maxX, maxY);
    this.lives = 3;
    this.spotted = [];
    this.logo = CanvasRenderer.loadNewImage('/assets/zoekdeverschillenv3.png');
  }

  public override processInput(mouseListener: MouseListener): void {
    if (mouseListener.buttonPressed(MouseListener.BUTTON_LEFT)) {
      this.lives -= 1;
      const mouseCoordinates: MouseCoordinates = mouseListener.getMousePosition();
      console.log(mouseListener.getMousePosition());
      if (mouseCoordinates.x > 513 && mouseCoordinates.x < 530 && mouseCoordinates.y > 295 && mouseCoordinates.y < 310) {
        this.addCircle(522, 305);
        this.lives += 1;
        if (!this.spotted.includes('spotted')) {
          this.spotted.splice(0, 0, 'spotted');
        }
      }
      if (mouseCoordinates.x > 541 && mouseCoordinates.x < 556 && mouseCoordinates.y > 420 && mouseCoordinates.y < 433) {
        this.addCircle(550, 426);
        this.lives += 1;
        if (!this.spotted.includes('spotted1')) {
          this.spotted.splice(0, 0, 'spotted1');
        }
      }
      if (mouseCoordinates.x > 427 && mouseCoordinates.x < 445 && mouseCoordinates.y > 425 && mouseCoordinates.y < 440) {
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

  public override update(elapsed: number): void {
    // Voeg hier update-logica toe indien nodig
  }

  public override getNextScene(): Scene | null {
    if (this.lives <= 0) {
      return new Gameover(this.maxX, this.maxY);
    } else if (this.spotted.length === 3) {
      return new SpotTheDiferrence2(this.maxX, this.maxY);

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
