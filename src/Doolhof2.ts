import CanvasRenderer from './CanvasRenderer.js';
import MouseListener, { MouseCoordinates } from './MouseListener.js';
import Scene from './Scene.js';
import Player from './Player.js';
import ByteCorp from './ByteCorp.js';
import KeyListener from './KeyListener.js';
import WallVert2 from './WallVert2.js';
import WallHori2 from './WallHori2.js';

export default class Doolhof2 extends Scene {
  private walls: WallVert2[];

  private background: HTMLImageElement;

  private player: Player;

  private keyListener: KeyListener;

  public constructor(maxX: number, maxY: number) {
    super(maxX, maxY);
    this.background = CanvasRenderer.loadNewImage('/assets/doolhof2.png');
    this.walls = [];
    this.player = new Player(340, 167);
    this.keyListener = new KeyListener();

    for (let i: number = 0; i < 26; i++) {
      this.walls.push(new WallVert2(268, 106 + (22 * i)));
    }

    for (let i: number = 0; i < 26; i++) {
      this.walls.push(new WallVert2(1130, 106 + (22 * i)));
    }

    for (let i: number = 0; i < 38; i++) {
      this.walls.push(new WallHori2(268 + (22 * i), 103));
    }

    for (let i: number = 0; i < 38; i++) {
      this.walls.push(new WallHori2(268 + (22 * i), 673));
    }

    for (let i: number = 0; i < 1; i++) {
      this.walls.push(new WallVert2(289, 125 + (22 * i)));
    }

    for (let i: number = 0; i < 3; i++) {
      this.walls.push(new WallVert2(289, 209 + (22 * i)));
    }

    this.walls.push(new WallVert2(289, 314));
    this.walls.push(new WallVert2(289, 377));

    for (let i: number = 0; i < 3; i++) {
      this.walls.push(new WallVert2(289, 440 + (22 * i)));
    }

    this.walls.push(new WallVert2(289, 524));

    for (let i: number = 0; i < 3; i++) {
      this.walls.push(new WallVert2(289, 566 + (22 * i)));
    }

    for (let i: number = 0; i < 2; i++) {
      this.walls.push(new WallVert2(310, 188 + (22 * i)));
    }

    this.walls.push(new WallVert2(310, 293));
    this.walls.push(new WallVert2(310, 377));

    for (let i: number = 0; i < 5; i++) {
      this.walls.push(new WallVert2(310, 440 + (21 * i)));
    }

    for (let i: number = 0; i < 2; i++) {
      this.walls.push(new WallVert2(310, 566 + (21 * i)));
    }

    this.walls.push(new WallVert2(310, 629));

    for (let i: number = 0; i < 4; i++) {
      this.walls.push(new WallVert2(331, 167 + (21 * i)));
    }

    for (let i: number = 0; i < 3; i++) {
      this.walls.push(new WallVert2(331, 440 + (21 * i)));
    }

    for (let i: number = 0; i < 2; i++) {
      this.walls.push(new WallVert2(352, 188 + (21 * i)));
    }

    for (let i: number = 0; i < 4; i++) {
      this.walls.push(new WallVert2(352, 272 + (21 * i)));
    }

    for (let i: number = 0; i < 2; i++) {
      this.walls.push(new WallVert2(352, 482 + (21 * i)));
    }

    this.walls.push(new WallVert2(352, 629));

    this.walls.push(new WallVert2(373, 209));
    this.walls.push(new WallVert2(373, 377));
    this.walls.push(new WallVert2(373, 482));
    this.walls.push(new WallVert2(373, 566));

    for (let i: number = 0; i < 2; i++) {
      this.walls.push(new WallVert2(373, 629 + (21 * i)));
    }

    for (let i: number = 0; i < 4; i++) {
      this.walls.push(new WallVert2(373, 251 + (21 * i)));
    }

    for (let i: number = 0; i < 5; i++) {
      this.walls.push(new WallVert2(394, 209 + (21 * i)));
    }

    this.walls.push(new WallVert2(394, 335));

    for (let i: number = 0; i < 6; i++) {
      this.walls.push(new WallVert2(394, 440 + (21 * i)));
    }

    this.walls.push(new WallVert2(394, 587));

    for (let i: number = 0; i < 3; i++) {
      this.walls.push(new WallVert2(415, 103 + (21 * i)));
    }

    for (let i: number = 0; i < 2; i++) {
      this.walls.push(new WallVert2(415, 251 + (21 * i)));
    }

    this.walls.push(new WallVert2(415, 335));

    for (let i: number = 0; i < 5; i++) {
      this.walls.push(new WallVert2(415, 419 + (21 * i)));
    }

    for (let i: number = 0; i < 3; i++) {
      this.walls.push(new WallVert2(436, 124 + (21 * i)));
    }

    this.walls.push(new WallVert2(436, 209));

    for (let i: number = 0; i < 2; i++) {
      this.walls.push(new WallVert2(436, 272 + (21 * i)));
    }

    for (let i: number = 0; i < 2; i++) {
      this.walls.push(new WallVert2(436, 482 + (21 * i)));
    }

    this.walls.push(new WallVert2(436, 419));
    this.walls.push(new WallVert2(436, 629));

    for (let i: number = 0; i < 5; i++) {
      this.walls.push(new WallVert2(457, 146 + (21 * i)));
    }

    for (let i: number = 0; i < 2; i++) {
      this.walls.push(new WallVert2(457, 314 + (21 * i)));
    }

    for (let i: number = 0; i < 2; i++) {
      this.walls.push(new WallVert2(457, 545 + (21 * i)));
    }

    for (let i: number = 0; i < 2; i++) {
      this.walls.push(new WallVert2(457, 608 + (21 * i)));
    }

    this.walls.push(new WallVert2(457, 419));
    this.walls.push(new WallVert2(457, 503));
    this.walls.push(new WallVert2(478, 125));

    for (let i: number = 0; i < 4; i++) {
      this.walls.push(new WallVert2(478, 167 + (21 * i)));
    }

    for (let i: number = 0; i < 4; i++) {
      this.walls.push(new WallVert2(478, 377 + (21 * i)));
    }

    this.walls.push(new WallVert2(478, 566));





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
