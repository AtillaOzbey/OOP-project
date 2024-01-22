import CanvasRenderer from '../CanvasRenderer.js';
import KeyListener from '../KeyListener.js';
import MessageBorder from '../MessageBorder.js';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import MouseListener, { MouseCoordinates } from '../MouseListener.js';
import Baas from '../Players/Baas.js';
import Player from '../Players/Player.js';
import Scene from '../Scene.js';
import Levels from './Levels.js';

export default class Level4 extends Levels {
  private timeToNextItem: number;

  public constructor(maxX: number, maxY: number) {
    super(maxX, maxY);
    this.timeToNextItem = 5000;
    this.baas = new Baas(1169, 580);
    this.player = new Player(448, 590);
    this.logo = CanvasRenderer.loadNewImage('/assets/Kantoor3_700x1400.png');
    this.messageBorder = new MessageBorder(CanvasRenderer.loadNewImage('/assets/Firewall_hersteld.png'));
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
    this.timeToNextItem -= elapsed;
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
