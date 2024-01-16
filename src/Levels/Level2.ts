import CanvasRenderer from '../CanvasRenderer.js';
import KeyListener from '../KeyListener.js';
import MouseListener, { MouseCoordinates } from '../MouseListener.js';
import Baas from '../Players/Baas.js';
import Joch1 from '../Players/Joch1.js';
import Joch2 from '../Players/Joch2.js';
import Lucy from '../Players/Lucy.js';
import Player from '../Players/Player.js';
import Sanne from '../Players/Sanne.js';
import Scene from '../Scene.js';

export default class Level2 extends Scene {
  private logo: HTMLImageElement;

  private player: Player;

  private sanne: Sanne;

  private lucy: Lucy;

  private joch1: Joch1;

  private joch2: Joch2;

  private baas: Baas;

  private keyListener: KeyListener;

  public constructor(maxX: number, maxY: number) {
    super(maxX, maxY);
    this.player = new Player(maxX, maxY);
    this.sanne = new Sanne(116, 148);
    this.lucy = new Lucy();
    this.joch1 = new Joch1();
    this.joch2 = new Joch2();
    this.baas = new Baas();
    this.logo = CanvasRenderer.loadNewImage('/assets/Kantoor3_700x1400.png');
    this.keyListener = new KeyListener();
  }

  public override processInput(mouseListener: MouseListener): void {
    if (this.keyListener.isKeyDown(KeyListener.KEY_UP)) {
      this.player.moveUp();
    }
    if (this.keyListener.isKeyDown(KeyListener.KEY_DOWN)) {
      this.player.moveDown();
    }
    if (this.keyListener.isKeyDown(KeyListener.KEY_LEFT)) {
      this.player.moveLeft();
    }
    if (this.keyListener.isKeyDown(KeyListener.KEY_RIGHT)) {
      this.player.moveRight();
    }
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
    this.sanne.render(canvas);
    this.lucy.render(canvas);
    this.joch1.render(canvas);
    this.joch2.render(canvas);
    this.baas.render(canvas);
  }
}
