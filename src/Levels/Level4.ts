import CanvasRenderer from '../CanvasRenderer.js';
import KeyListener from '../KeyListener.js';
import MessageBorder from '../MessageBorder.js';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import MouseListener, { MouseCoordinates } from '../MouseListener.js';
import Baas from '../Players/Baas.js';
import Player from '../Players/Player.js';
import Scene from '../Scene.js';

export default class Level4 extends Scene {
  private logo: HTMLImageElement;

  private player: Player;

  private baas: Baas;

  private messageBorder: MessageBorder;

  private messageBorderEnd: MessageBorder;

  private keyListener: KeyListener;

  private timeToNextItem: number;

  public constructor(maxX: number, maxY: number) {
    super(maxX, maxY);
    this.timeToNextItem = 5000;
    this.baas = new Baas(1169, 580);
    this.player = new Player(448, 590);
    this.logo = CanvasRenderer.loadNewImage('/assets/Kantoor3_700x1400.png');
    this.messageBorder = new MessageBorder(CanvasRenderer.loadNewImage('/assets/Firewall_hersteld.png'));
    this.messageBorderEnd = new MessageBorder(CanvasRenderer.loadNewImage('/assets/ByteCorpEnd.png'));
    this.keyListener = new KeyListener();
  }

  /**
   * Processes the input
   *@param mouseListener listens to the mouse
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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

  /**
   *
   * @param elapsed elapsed ms since last update
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, class-methods-use-this
  public override update(elapsed: number): void {
    this.timeToNextItem -= elapsed;
  }

  public override getNextScene(): Scene | null {
    return this;
  }

  /**
   * Renders everything to the canvas
   *@param canvas the canvas to render to
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

      if (this.player.getPosX() > 1130 && this.player.getPosX() < 1266
        && this.player.getPosY() > 570 && this.player.getPosY() < 680) {
        this.logo = CanvasRenderer.loadNewImage('/assets/ByteCorpEnd.png');
      } else {
        this.player.render(canvas);
        this.baas.render(canvas);
      }
    }
  }
}
