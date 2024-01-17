import CanvasRenderer from '../CanvasRenderer.js';
import KeyListener from '../KeyListener.js';
import MouseListener, { MouseCoordinates } from '../MouseListener.js';
import Baas from '../Players/Baas.js';
import Player from '../Players/Player.js';
import Sanne from '../Players/Sanne.js';
import Scene from '../Scene.js';

export default class Level3 extends Scene {
  private logo: HTMLImageElement;

  private player: Player;

  private baas: Baas;

  private sanne: Sanne;

  private keyListener: KeyListener;

  public constructor(maxX: number, maxY: number) {
    super(maxX, maxY);
    this.baas = new Baas(1169, 580);
    this.sanne = new Sanne(1169, 400);
    this.player = new Player(2440, 590);
    this.logo = CanvasRenderer.loadNewImage('/assets/Kantoor3_700x1400.png');
    this.keyListener = new KeyListener();
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
    this.player.render(canvas);
    this.baas.render(canvas);
    this.sanne.render(canvas);
  }
}
