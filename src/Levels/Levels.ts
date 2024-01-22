import CanvasRenderer from '../CanvasRenderer.js';
import KeyListener from '../KeyListener.js';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import MouseListener, { MouseCoordinates } from '../MouseListener.js';
import Baas from '../Players/Baas.js';
import Player from '../Players/Player.js';
import Scene from '../Scene.js';
import WallVert from '../Walls/WallVert.js';
import WallHori from '../Walls/WallHori.js';
import MessageBorder from '../MessageBorder.js';

export default abstract class Levels extends Scene {
  protected logo: HTMLImageElement;

  protected player: Player;

  protected baas: Baas;

  protected keyListener: KeyListener;

  protected walls: WallVert[];

  protected lastDirection: number = 0;

  protected moveUp: boolean = true;

  protected moveDown: boolean = true;

  protected moveLeft: boolean = true;

  protected moveRight: boolean = true;

  protected messageBorder: MessageBorder;

  protected timeToNext: number;

  protected count: number;

  public constructor(maxX: number, maxY: number) {
    super(maxX, maxY);
    this.walls = [];
    this.logo = CanvasRenderer.loadNewImage('/assets/Kantoor3_700x1400.png');
  }

  /**
   * Processes the input
   *@param mouseListener listens to the mouse
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, class-methods-use-this
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
   *Places the walls in the office
   */
  public placeWalls(): void {
    for (let i: number = 0; i < 17; i++) {
      this.walls.push(new WallHori(20 + (41 * i), 25));
    }

    for (let i: number = 0; i < 3; i++) {
      this.walls.push(new WallHori(715 + (41 * i), 70));
    }

    this.walls.push(new WallHori(835, 35));

    for (let i: number = 0; i < 4; i++) {
      this.walls.push(new WallHori(896 + (41 * i), 60));
    }

    for (let i: number = 0; i < 8; i++) {
      this.walls.push(new WallHori(1060 + (41 * i), 25));
    }

    for (let i: number = 0; i < 17; i++) {
      this.walls.push(new WallVert(1385, 23 + (41 * i)));
    }

    for (let i: number = 0; i < 17; i++) {
      this.walls.push(new WallVert(8, 23 + (41 * i)));
    }

    for (let i: number = 0; i < 35; i++) {
      this.walls.push(new WallHori(20 + (41 * i), 690));
    }

    for (let i: number = 0; i < 5; i++) {
      this.walls.push(new WallHori(110 + (41 * i), 212));
    }

    for (let i: number = 0; i < 5; i++) {
      this.walls.push(new WallHori(110 + (41 * i), 260));
    }

    for (let i: number = 0; i < 5; i++) {
      this.walls.push(new WallHori(433 + (41 * i), 212));
    }

    for (let i: number = 0; i < 5; i++) {
      this.walls.push(new WallHori(433 + (41 * i), 260));
    }

    for (let i: number = 0; i < 5; i++) {
      this.walls.push(new WallHori(433 + (41 * i), 470));
    }

    for (let i: number = 0; i < 5; i++) {
      this.walls.push(new WallHori(433 + (41 * i), 520));
    }

    for (let i: number = 0; i < 5; i++) {
      this.walls.push(new WallHori(110 + (41 * i), 470));
    }

    for (let i: number = 0; i < 5; i++) {
      this.walls.push(new WallHori(110 + (41 * i), 520));
    }

    for (let i: number = 0; i < 2; i++) {
      this.walls.push(new WallHori(785 + (41 * i), 280));
    }

    for (let i: number = 0; i < 2; i++) {
      this.walls.push(new WallHori(785 + (41 * i), 300));
    }

    for (let i: number = 0; i < 2; i++) {
      this.walls.push(new WallHori(785 + (41 * i), 395));
    }

    for (let i: number = 0; i < 2; i++) {
      this.walls.push(new WallHori(785 + (41 * i), 415));
    }

    for (let i: number = 0; i < 7; i++) {
      this.walls.push(new WallHori(880 + (37 * i), 410));
    }

    for (let i: number = 0; i < 3; i++) {
      this.walls.push(new WallHori(1250 + (37 * i), 410));
    }

    for (let i: number = 0; i < 7; i++) {
      this.walls.push(new WallHori(880 + (37 * i), 367));
    }

    for (let i: number = 0; i < 3; i++) {
      this.walls.push(new WallHori(1250 + (37 * i), 367));
    }

    for (let i: number = 0; i < 5; i++) {
      this.walls.push(new WallVert(960, 460 + (41 * i)));
    }

    for (let i: number = 0; i < 5; i++) {
      this.walls.push(new WallVert(1040, 460 + (41 * i)));
    }

    for (let i: number = 0; i < 2; i++) {
      this.walls.push(new WallVert(885, 60 + (41 * i)));
    }

    for (let i: number = 0; i < 2; i++) {
      this.walls.push(new WallVert(885, 270 + (41 * i)));
    }

    for (let i: number = 0; i < 3; i++) {
      this.walls.push(new WallVert(985, 240 + (41 * i)));
    }

    for (let i: number = 0; i < 3; i++) {
      this.walls.push(new WallVert(1030, 240 + (41 * i)));
    }

    for (let i: number = 0; i < 2; i++) {
      this.walls.push(new WallHori(1160 + (37 * i), 560));
    }
    this.walls.push(new WallVert(1350, 520));
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
  // eslint-disable-next-line class-methods-use-this, @typescript-eslint/no-unused-vars
  public override render(canvas: HTMLCanvasElement): void {
  }
}
