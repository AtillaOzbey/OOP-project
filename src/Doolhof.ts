import CanvasRenderer from './CanvasRenderer.js';
import MouseListener, { MouseCoordinates } from './MouseListener.js';
import Scene from './Scene.js';
import Wall from './Wall.js';
import Player from './Player.js';
import ByteCorp from './ByteCorp.js';
import KeyListener from './KeyListener.js';

export default class Doolhof extends Scene {
  private walls: Wall[];

  private background: HTMLImageElement;

  private player: Player;

  private keyListener: KeyListener;

  public constructor(maxX: number, maxY: number) {
    super(maxX, maxY);
    this.background = CanvasRenderer.loadNewImage('/assets/doolhof1.png');
    this.walls = [];
    this.player = new Player(340, 167);
    this.keyListener = new KeyListener();

    for (let i: number = 0; i < 13; i++) {
      this.walls.push(new Wall(329, 123 + (41 * i)));
    }
  }

  private lastDirection: number = 0;

  private moveUp: boolean = true;

  private moveDown: boolean = true;

  private moveLeft: boolean = true;

  private moveRight: boolean = true;

  public processInput(mouseListener: MouseListener): void {
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
   *@param elapsed elapsed time
   */
  public update(elapsed: number): void {
    this.player.update(1);

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

  public getNextScene(): Scene | null {
    return this;
  }

  public render(canvas: HTMLCanvasElement): void {
    CanvasRenderer.drawImage(
      canvas,
      this.background,
      (canvas.width / 2) - (this.background.width / 2),
      (canvas.height / 2) - (this.background.height / 2),
    );

    for (let i: number = 0; i < this.walls.length; i++) {
      this.walls[i].render(canvas);
    }

    this.player.render(canvas);
  }
}
