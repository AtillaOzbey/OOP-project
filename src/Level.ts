import CanvasRenderer from './CanvasRenderer.js';
import MouseListener, { MouseCoordinates } from './MouseListener.js';
import Scene from './Scene.js';
import SpotTheDiferrence2 from './spotTheDifference/SpotTheDiferrence2.js';
import SpotTheDiferrence3 from './spotTheDifference/SpotTheDiferrence3.js';
import SpotTheDifference from './spotTheDifference/SpotTheDifference.js';

export default class Level extends Scene {
  private logo: HTMLImageElement;

  public constructor(maxX: number, maxY: number) {
    super(maxX, maxY);
    this.logo = CanvasRenderer.loadNewImage('/assets/Kantoor3_700x1400.png');
  }

  public override processInput(mouseListener: MouseListener): void {
  }

  public override update(elapsed: number): void {

  }

  public override getNextScene(): Scene | null {
    return new SpotTheDifference(this.maxX, this.maxY);
  }

  public override render(canvas: HTMLCanvasElement): void {
    CanvasRenderer.drawImage(
      canvas,
      this.logo,
      (canvas.width / 2) - (this.logo.width / 2),
      (canvas.height / 2) - (this.logo.height / 2),
    );
  }
}
