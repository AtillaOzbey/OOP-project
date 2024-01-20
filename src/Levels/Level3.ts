import CanvasRenderer from '../CanvasRenderer.js';
import Doolhof from '../Doolhofs/Doolhof.js';
import KeyListener from '../KeyListener.js';
import MessageBorder from '../MessageBorder.js';
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

  private messageBorderComputer: MessageBorder;

  private keyListener: KeyListener;

  private timeToNext: number;

  public constructor(maxX: number, maxY: number) {
    super(maxX, maxY);
    this.timeToNext = 9000000;
    this.player = new Player(448, 590);
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
    this.timeToNext -= elapsed;
  }

  public override getNextScene(): Scene | null {
    if (this.player.getPosX() > 520 && this.player.getPosX() < 629 && this.player.getPosY() > 100 && this.player.getPosY() < 140 && this.keyListener.keyPressed(KeyListener.KEY_E)) {
      return new Doolhof(this.maxX, this.maxY);
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
    if (this.player.getPosX() > 520 && this.player.getPosX() < 629 && this.player.getPosY() > 100 && this.player.getPosY() < 140) {
      this.messageBorderComputer.render(canvas);
    }
  }
}
