import CanvasRenderer from '../CanvasRenderer.js';
import MouseListener, { MouseCoordinates } from '../MouseListener.js';
import Scene from '../Scene.js';

export default class SpotTheDifference extends Scene {
  private logo: HTMLImageElement;
  private circles: { x: number, y: number }[] = []; // array om de coördinaten van de cirkels bij te houden

  public constructor(maxX: number, maxY: number) {
    super(maxX, maxY);
    this.logo = CanvasRenderer.loadNewImage('/assets/zoekdeverschillenv3.png');
  }

  public override processInput(mouseListener: MouseListener): void {
    if (mouseListener.buttonPressed(MouseListener.BUTTON_LEFT)) {
      const mouseCoordinates: MouseCoordinates = mouseListener.getMousePosition();
      this.addCircle(mouseCoordinates.x, mouseCoordinates.y);
    }
  }

  private addCircle(x: number, y: number): void {
    this.circles.push({ x, y });
  }

  public override update(elapsed: number): void {
    // Voeg hier update-logica toe indien nodig
  }

  public override getNextScene(): Scene | null {
    return this;
  }

  public override render(canvas: HTMLCanvasElement): void {
    CanvasRenderer.drawImage(
      canvas,
      this.logo,
      (canvas.width / 2) - (this.logo.width / 2),
      (canvas.height / 2) - (this.logo.height / 2),
    );

    // Teken de cirkels op de afbeelding
    this.circles.forEach((circle) => {
      CanvasRenderer.drawCircle(canvas, circle.x, circle.y, 10, 'red'); // aanpassen aan je wensen
    });
  }
}
