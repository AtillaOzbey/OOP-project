import CanvasRenderer from '../CanvasRenderer.js';
import Doolhof from '../Doolhofs/Doolhof.js';
import KeyListener from '../KeyListener.js';
import MessageBorder from '../MessageBorder.js';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import MouseListener, { MouseCoordinates } from '../MouseListener.js';
import Player from '../Players/Player.js';
import Scene from '../Scene.js';
import Levels from './Levels.js';

export default class Level3 extends Levels {
  private messageBorderComputer: MessageBorder;

  public constructor(maxX: number, maxY: number) {
    super(maxX, maxY);
    this.timeToNext = 9000000;
    this.player = new Player(448, 590);
    this.logo = CanvasRenderer.loadNewImage('./assets/Kantoor3_700x1400.png');
    this.messageBorderComputer = new MessageBorder(CanvasRenderer.loadNewImage('./assets/DoolhofHacken.png'));
    this.keyListener = new KeyListener();
    this.walls = [];
    this.placeWalls();
  }

  /**
   * Processes the input
   *@param mouseListener listens to the mouse
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public override processInput(mouseListener: MouseListener): void {
    super.processInput(mouseListener);
  }

  /**
   *
   * @param elapsed elapsed ms since last update
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, class-methods-use-this
  public override update(elapsed: number): void {
    super.update(1);
    this.timeToNext -= elapsed;
  }

  public override getNextScene(): Scene | null {
    if (this.player.getPosX() > 520 && this.player.getPosX() < 629
      && this.player.getPosY() > 100 && this.player.getPosY() < 140
      && this.keyListener.keyPressed(KeyListener.KEY_E)) {
      return new Doolhof(this.maxX, this.maxY);
    }
    return this;
  }

  /**
   * Renders everything to the canvas
   *@param canvas the canvas to render to
   */
  public override render(canvas: HTMLCanvasElement): void {
    CanvasRenderer.drawImage(
      canvas,
      this.logo,
      (canvas.width / 2) - (this.logo.width / 2),
      (canvas.height / 2) - (this.logo.height / 2),
    );

    this.player.render(canvas);

    if (this.player.getPosX() > 520 && this.player.getPosX() < 629
      && this.player.getPosY() > 100 && this.player.getPosY() < 140) {
      this.messageBorderComputer.render(canvas);
    }
  }
}
