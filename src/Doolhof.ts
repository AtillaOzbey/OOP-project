import CanvasRenderer from './CanvasRenderer.js';
import MouseListener, { MouseCoordinates } from './MouseListener.js';
import Scene from './Scene.js';
import Player from './Player.js';
import ByteCorp from './ByteCorp.js';
import KeyListener from './KeyListener.js';
import WallVert from './WallVert.js';
import WallHori from './WallHori.js';

export default class Doolhof extends Scene {
  private walls: WallVert[];

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
      this.walls.push(new WallVert(329, 123 + (41 * i)));
    }

    for (let i: number = 0; i < 13; i++) {
      this.walls.push(new WallVert(1034, 123 + (41 * i)));
    }

    for (let i: number = 0; i < 17; i++) {
      this.walls.push(new WallHori(329 + (41 * i), 122));
    }

    for (let i: number = 0; i < 15; i++) {
      this.walls.push(new WallHori(335 + (41 * i), 650));
    }

    this.walls.push(new WallHori(999, 650));

    for (let i: number = 0; i < 3; i++) {
      this.walls.push(new WallHori(364 + (35 * i), 157));
    }

    for (let i: number = 0; i < 4; i++) {
      this.walls.push(new WallHori(540 + (35 * i), 157));
    }

    for (let i: number = 0; i < 2; i++) {
      this.walls.push(new WallHori(335 + (28 * i), 192));
    }

    for (let i: number = 0; i < 7; i++) {
      this.walls.push(new WallHori(512 + (40 * i), 192));
    }

    this.walls.push(new WallHori(928, 192));
    this.walls.push(new WallHori(999, 192));
    this.walls.push(new WallHori(329, 227));

    for (let i: number = 0; i < 2; i++) {
      this.walls.push(new WallHori(434 + (35 * i), 227));
    }

    for (let i: number = 0; i < 5; i++) {
      this.walls.push(new WallHori(540 + (35 * i), 227));
    }

    this.walls.push(new WallHori(505, 263));

    for (let i: number = 0; i < 5; i++) {
      this.walls.push(new WallHori(576 + (35 * i), 263));
    }

    this.walls.push(new WallHori(823, 263));

    for (let i: number = 0; i < 8; i++) {
      this.walls.push(new WallHori(470 + (35 * i), 298));
    }

    this.walls.push(new WallHori(858, 298));

    this.walls.push(new WallHori(470, 333));

    for (let i: number = 0; i < 6; i++) {
      this.walls.push(new WallHori(575 + (35 * i), 333));
    }

    this.walls.push(new WallHori(964, 333));
    this.walls.push(new WallHori(470, 368));
    this.walls.push(new WallHori(500, 368));
    this.walls.push(new WallHori(575, 368));
    this.walls.push(new WallHori(716, 368));
    this.walls.push(new WallHori(787, 368));
    this.walls.push(new WallHori(858, 368));
    this.walls.push(new WallHori(890, 368));

    for (let i: number = 0; i < 3; i++) {
      this.walls.push(new WallHori(611 + (35 * i), 403));
    }

    this.walls.push(new WallHori(823, 403));
    this.walls.push(new WallHori(928, 403));
    this.walls.push(new WallHori(960, 403));

    for (let i: number = 0; i < 3; i++) {
      this.walls.push(new WallHori(329 + (35 * i), 439));
    }

    for (let i: number = 0; i < 4; i++) {
      this.walls.push(new WallHori(575 + (35 * i), 439));
    }

    this.walls.push(new WallHori(860, 439));

    for (let i: number = 0; i < 3; i++) {
      this.walls.push(new WallHori(928 + (35 * i), 439));
    }

    this.walls.push(new WallHori(329, 474));
    this.walls.push(new WallHori(360, 474));
    this.walls.push(new WallHori(540, 474));
    this.walls.push(new WallHori(611, 474));
    this.walls.push(new WallHori(640, 474));
    this.walls.push(new WallHori(752, 474));
    this.walls.push(new WallHori(823, 474));
    this.walls.push(new WallHori(893, 474));
    this.walls.push(new WallHori(999, 474));
    this.walls.push(new WallHori(364, 509));
    this.walls.push(new WallHori(434, 509));

    for (let i: number = 0; i < 5; i++) {
      this.walls.push(new WallHori(681 + (35 * i), 509));
    }

    this.walls.push(new WallHori(470, 544));
    this.walls.push(new WallHori(575, 544));
    this.walls.push(new WallHori(605, 544));

    for (let i: number = 0; i < 5; i++) {
      this.walls.push(new WallHori(716 + (35 * i), 544));
    }

    for (let i: number = 0; i < 3; i++) {
      this.walls.push(new WallHori(434 + (35 * i), 580));
    }

    this.walls.push(new WallHori(610, 580));

    for (let i: number = 0; i < 3; i++) {
      this.walls.push(new WallHori(681 + (35 * i), 580));
    }

    this.walls.push(new WallHori(610, 580));
    this.walls.push(new WallHori(823, 580));
    this.walls.push(new WallHori(850, 580));
    this.walls.push(new WallHori(928, 580));

    for (let i: number = 0; i < 3; i++) {
      this.walls.push(new WallHori(470 + (35 * i), 615));
    }

    for (let i: number = 0; i < 4; i++) {
      this.walls.push(new WallHori(611 + (35 * i), 615));
    }

    for (let i: number = 0; i < 2; i++) {
      this.walls.push(new WallHori(787 + (35 * i), 615));
    }

    this.walls.push(new WallHori(893, 615));

    for (let i: number = 0; i < 4; i++) {
      this.walls.push(new WallVert(364, 264 + (41 * i)));
    }

    for (let i: number = 0; i < 3; i++) {
      this.walls.push(new WallVert(364, 544 + (36 * i)));
    }

    for (let i: number = 0; i < 5; i++) {
      this.walls.push(new WallVert(399, 192 + (41 * i)));
    }

    for (let i: number = 0; i < 2; i++) {
      this.walls.push(new WallVert(399, 509 + (55 * i)));
    }

    for (let i: number = 0; i < 2; i++) {
      this.walls.push(new WallVert(434, 157 + (35 * i)));
    }

    for (let i: number = 0; i < 6; i++) {
      this.walls.push(new WallVert(434, 263 + (41 * i)));
    }

    for (let i: number = 0; i < 2; i++) {
      this.walls.push(new WallVert(434, 544 + (51 * i)));
    }

    for (let i: number = 0; i < 2; i++) {
      this.walls.push(new WallVert(470, 192 + (35 * i)));
    }

    for (let i: number = 0; i < 2; i++) {
      this.walls.push(new WallVert(470, 403 + (35 * i)));
    }

    for (let i: number = 0; i < 2; i++) {
      this.walls.push(new WallVert(505, 157 + (35 * i)));
    }

    this.walls.push(new WallVert(505, 262));

    for (let i: number = 0; i < 4; i++) {
      this.walls.push(new WallVert(505, 403 + (35 * i)));
    }

    this.walls.push(new WallVert(540, 227));

    for (let i: number = 0; i < 5; i++) {
      this.walls.push(new WallVert(540, 368 + (41 * i)));
    }

    this.walls.push(new WallVert(540, 615));
    this.walls.push(new WallVert(575, 298));
    this.walls.push(new WallVert(575, 404));
    this.walls.push(new WallVert(575, 509));
    this.walls.push(new WallVert(575, 540));
    this.walls.push(new WallVert(611, 122));
    this.walls.push(new WallVert(611, 368));
    this.walls.push(new WallVert(611, 400));
    this.walls.push(new WallVert(646, 333));
    this.walls.push(new WallVert(646, 474));
    this.walls.push(new WallVert(646, 544));
    this.walls.push(new WallVert(646, 580));
    this.walls.push(new WallVert(681, 368));

    for (let i: number = 0; i < 4; i++) {
      this.walls.push(new WallVert(681, 474 + (41 * i)));
    }

    this.walls.push(new WallVert(716, 157));
    this.walls.push(new WallVert(716, 368));
    this.walls.push(new WallVert(752, 122));
    this.walls.push(new WallVert(752, 192));
    this.walls.push(new WallVert(752, 227));

    for (let i: number = 0; i < 3; i++) {
      this.walls.push(new WallVert(752, 333 + (32 * i)));
    }

    for (let i: number = 0; i < 6; i++) {
      this.walls.push(new WallVert(787, 122 + (41 * i)));
    }

    for (let i: number = 0; i < 2; i++) {
      this.walls.push(new WallVert(787, 403 + (35 * i)));
    }

    this.walls.push(new WallVert(787, 580));

    for (let i: number = 0; i < 3; i++) {
      this.walls.push(new WallVert(823, 122 + (33 * i)));
    }

    for (let i: number = 0; i < 2; i++) {
      this.walls.push(new WallVert(823, 262 + (33 * i)));
    }

    for (let i: number = 0; i < 3; i++) {
      this.walls.push(new WallVert(823, 403 + (33 * i)));
    }

    for (let i: number = 0; i < 3; i++) {
      this.walls.push(new WallVert(858, 157 + (33 * i)));
    }

    this.walls.push(new WallVert(858, 298));
    this.walls.push(new WallVert(858, 330));

    for (let i: number = 0; i < 3; i++) {
      this.walls.push(new WallVert(893, 122 + (48 * i)));
    }

    this.walls.push(new WallVert(893, 333));

    for (let i: number = 0; i < 5; i++) {
      this.walls.push(new WallVert(893, 439 + (41 * i)));
    }

    for (let i: number = 0; i < 3; i++) {
      this.walls.push(new WallVert(928, 122 + (35 * i)));
    }

    for (let i: number = 0; i < 3; i++) {
      this.walls.push(new WallVert(928, 263 + (44 * i)));
    }

    this.walls.push(new WallVert(928, 474));
    this.walls.push(new WallVert(928, 545));
    this.walls.push(new WallVert(928, 580));

    for (let i: number = 0; i < 4; i++) {
      this.walls.push(new WallVert(964, 157 + (33 * i)));
    }

    this.walls.push(new WallVert(964, 368));

    for (let i: number = 0; i < 3; i++) {
      this.walls.push(new WallVert(964, 439 + (33 * i)));
    }

    this.walls.push(new WallVert(964, 615));

    for (let i: number = 0; i < 2; i++) {
      this.walls.push(new WallVert(999, 157 + (36 * i)));
    }

    for (let i: number = 0; i < 4; i++) {
      this.walls.push(new WallVert(999, 263 + (35 * i)));
    }

    for (let i: number = 0; i < 4; i++) {
      this.walls.push(new WallVert(999, 510 + (35 * i)));
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
