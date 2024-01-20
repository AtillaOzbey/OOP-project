import CanvasRenderer from '../CanvasRenderer.js';
import KeyListener from '../KeyListener.js';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import MouseListener, { MouseCoordinates } from '../MouseListener.js';
import Baas from '../Players/Baas.js';
import Joch1 from '../Players/Joch1.js';
import Joch2 from '../Players/Joch2.js';
import Lucy from '../Players/Lucy.js';
import Player from '../Players/Player.js';
import Sanne from '../Players/Sanne.js';
import Scene from '../Scene.js';
import Levels from './Levels.js';

export default class Level2 extends Levels {
  private sanne: Sanne;

  private lucy: Lucy;

  private joch1: Joch1;

  private joch2: Joch2;

  public constructor(maxX: number, maxY: number) {
    super(maxX, maxY);
    this.player = new Player(448, 400);
    this.sanne = new Sanne(116, 148);
    this.lucy = new Lucy(573, 140);
    this.joch1 = new Joch1(573, 405);
    this.joch2 = new Joch2(116, 405);
    this.baas = new Baas(1169, 580);
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
    if (this.keyListener.isKeyDown(KeyListener.KEY_UP) && this.moveUp === true) {
      this.player.moveUp();
      this.lastDirection = 1;
      this.moveDown = true;
      this.moveLeft = true;
      this.moveRight = true;
    } else if (this.keyListener.isKeyDown(KeyListener.KEY_DOWN) && this.moveDown === true) {
      this.player.moveDown();
      this.lastDirection = 2;
      this.moveLeft = true;
      this.moveRight = true;
      this.moveUp = true;
    } else if (this.keyListener.isKeyDown(KeyListener.KEY_LEFT) && this.moveLeft === true) {
      this.player.moveLeft();
      this.lastDirection = 3;
      this.moveUp = true;
      this.moveDown = true;
      this.moveRight = true;
    } else if (this.keyListener.isKeyDown(KeyListener.KEY_RIGHT) && this.moveRight === true) {
      this.player.moveRight();
      this.lastDirection = 4;
      this.moveUp = true;
      this.moveDown = true;
      this.moveLeft = true;
    }
  }

  /**
   *
   * @param elapsed elapsed ms since last update
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, class-methods-use-this
  public override update(elapsed: number): void {
    this.walls.forEach((wall) => {
      if (this.player.isCollidingWall(wall)) {
        if (this.lastDirection === 1) {
          this.moveUp = false;
        } if (this.lastDirection === 2) {
          this.moveDown = false;
        } if (this.lastDirection === 3) {
          this.moveLeft = false;
        } if (this.lastDirection === 4) {
          this.moveRight = false;
        }
      }
    });
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
    this.sanne.render(canvas);
    this.lucy.render(canvas);
    this.joch1.render(canvas);
    this.joch2.render(canvas);
    this.baas.render(canvas);
  }
}
