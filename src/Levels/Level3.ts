import CanvasRenderer from '../CanvasRenderer.js';
import KeyListener from '../KeyListener.js';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
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
    this.player = new Player(448, 400);
    this.logo = CanvasRenderer.loadNewImage('/assets/Kantoor3_700x1400.png');
    this.keyListener = new KeyListener();
  }

  /**
   * Processes the input
   *@param mouseListener listens to the mouse
   */
  // eslint-disable-next-line class-methods-use-this, @typescript-eslint/no-unused-vars
  public override processInput(mouseListener: MouseListener): void {

  }

  /**
   *
   * @param elapsed elapsed ms since last update
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, class-methods-use-this
  public override update(elapsed: number): void {

  }

  public override getNextScene(): Scene | null {
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
    this.player.render(canvas);
    this.baas.render(canvas);
    this.sanne.render(canvas);
  }
}
import CanvasRenderer from '../CanvasRenderer.js';
import KeyListener from '../KeyListener.js';
import MessageBorder from '../MessageBorder.js';
import MouseListener, { MouseCoordinates } from '../MouseListener.js';
import Baas from '../Players/Baas.js';
import Player from '../Players/Player.js';
import Sanne from '../Players/Sanne.js';
import Scene from '../Scene.js';
import SpotTheDifference from '../spotTheDifference/SpotTheDifference.js';

export default class Level3 extends Scene {
  private logo: HTMLImageElement;

  private player: Player;

  private baas: Baas;

  private messageBorderComputer: MessageBorder;

  private keyListener: KeyListener;

  private timeToNext: number;

  public constructor(maxX: number, maxY: number) {
    super(maxX, maxY);
    this.baas = new Baas(1169, 580);
    this.timeToNext = 9000000
    this.player = new Player(2440, 590);
    this.logo = CanvasRenderer.loadNewImage('/assets/Kantoor3_700x1400.png');
    this.messageBorderComputer = new MessageBorder(CanvasRenderer.loadNewImage('/assets/DoolhofHacken.png'));
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
    if (this.timeToNext <= 0) {
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
    this.player.render(canvas);
    this.baas.render(canvas);
    console.log(this.player.getPosX())
    console.log(this.player.getPosY())
    if (this.player.getPosX() > 520 && this.player.getPosX() < 629 && this.player.getPosY() > 100 && this.player.getPosY() < 140) {
      this.messageBorderComputer.render(canvas);
    }
  }
}
