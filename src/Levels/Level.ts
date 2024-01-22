import CanvasRenderer from '../CanvasRenderer.js';
import KeyListener from '../KeyListener.js';
import MessageBorder from '../MessageBorder.js';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import MouseListener, { MouseCoordinates } from '../MouseListener.js';
import Baas from '../Players/Baas.js';
import Player from '../Players/Player.js';
import Scene from '../Scene.js';
import Levels from './Levels.js';
import Level2 from './Level2.js';

export default class Level extends Levels {
  public constructor(maxX: number, maxY: number) {
    super(maxX, maxY);
    this.player = new Player(448, 400);
    this.baas = new Baas(1169, 580);
    this.keyListener = new KeyListener();
    this.walls = [];
    this.placeWalls();
    this.messageBorder = new MessageBorder(CanvasRenderer.loadNewImage('/assets/Dialoog_1.png'));
    this.logo = CanvasRenderer.loadNewImage('/assets/Kantoor3_700x1400.png');
    this.keyListener = new KeyListener();
    this.count = 0;
    this.timeToNext = 1000;
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
    if (this.player.getPosX() > 1130 && this.player.getPosX() < 1266 && this.player.getPosY() > 570
      && this.player.getPosY() < 680 && this.keyListener.isKeyDown(KeyListener.KEY_E)
      && this.count === 0) {
      this.messageBorder.changeImage(CanvasRenderer.loadNewImage('/assets/Dialoog_2.png'));
      this.timeToNext = 8000;
      this.count += 1;
    } if (this.player.getPosX() > 1130 && this.player.getPosX() < 1266
      && this.player.getPosY() > 570 && this.player.getPosY() < 680 && this.timeToNext <= 0
      && this.count === 1) {
      this.messageBorder.changeImage(CanvasRenderer.loadNewImage('/assets/Dialoog_3.png'));
      this.count += 1;
      this.timeToNext = 8000;
    } if (this.player.getPosX() > 1130 && this.player.getPosX() < 1266
      && this.player.getPosY() > 570 && this.player.getPosY() < 680 && this.timeToNext <= 0
      && this.count === 2) {
      this.messageBorder.changeImage(CanvasRenderer.loadNewImage('/assets/Dialoog_4.png'));
      this.count += 1;
      this.timeToNext = 8000;
    }
  }

  public override getNextScene(): Scene | null {
    if (this.count === 3 && this.timeToNext <= 0) {
      return new Level2(this.maxX, this.maxY);
    }
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

    for (let i: number = 0; i < this.walls.length; i++) {
      this.walls[i].render(canvas);
      if (this.player.getPosX() > 1130 && this.player.getPosX() < 1266
        && this.player.getPosY() > 570 && this.player.getPosY() < 680) {
        this.messageBorder.render(canvas);
      }
    }
  }
}
