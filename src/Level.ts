import CanvasRenderer from './CanvasRenderer.js';
import MouseListener, { MouseCoordinates } from './MouseListener.js';
import Scene from './Scene.js';

export default class Level extends Scene {
  private logo: HTMLImageElement;

  public constructor(maxX: number, maxY: number) {
    super(maxX, maxY);
    this.logo = CanvasRenderer.loadNewImage('/assets/Office_Design.png');
  }

  public override processInput(mouseListener: MouseListener): void {
  }

  public override update(elapsed: number): void {

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
      console.log(this.logo.width);
}
}
