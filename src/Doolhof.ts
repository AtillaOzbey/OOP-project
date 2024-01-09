import CanvasRenderer from './CanvasRenderer.js';
import MouseListener, { MouseCoordinates } from './MouseListener.js';
import Scene from './Scene.js';
import Wall from './Wall.js';
<<<<<<< Updated upstream

export default class Doolhof extends Scene {
  private logo: HTMLImageElement;

  private walls: Wall[];

  public constructor(maxX: number, maxY: number) {
    super(maxX, maxY);
    this.walls = [];
  }

  public override processInput(mouseListener: MouseListener): void {
  }

  public override update(elapsed: number): void {
    for (let i: number = 0; i < 19; i++) {
      this.walls.push(new Wall(35 + (70 * i), 0));
    }

    for (let i: number = 0; i < 19; i++) {
      this.walls.push(new Wall(35 + (70 * i), 630));
    }

    for (let i: number = 0; i < 7; i++) {
      this.walls.push(new Wall(35, 70 + (70 * i)));
    }

    for (let i: number = 0; i < 7; i++) {
      this.walls.push(new Wall(1295, 140 + (70 * i)));
    }

    for (let i: number = 0; i < 4; i++) {
      this.walls.push(new Wall(175, 350 + (70 * i)));
    }

    for (let i: number = 0; i < 3; i++) {
      this.walls.push(new Wall(175, 70 + (70 * i)));
    }

    for (let i: number = 0; i < 5; i++) {
      this.walls.push(new Wall(315 + (70 * i), 140));
    }

    for (let i: number = 0; i < 5; i++) {
      this.walls.push(new Wall(735, 70 + (70 * i)));
    }

    for (let i: number = 0; i < 5; i++) {
      this.walls.push(new Wall(315, 210 + (70 * i)));
    }

    for (let i: number = 0; i < 3; i++) {
      this.walls.push(new Wall(455, 280 + (70 * i)));
    }

    for (let i: number = 0; i < 3; i++) {
      this.walls.push(new Wall(315 + (70 * i), 560));
    }

    for (let i: number = 0; i < 3; i++) {
      this.walls.push(new Wall(525 + (70 * i), 280));
    }

    for (let i: number = 0; i < 7; i++) {
      this.walls.push(new Wall(595 + (70 * i), 490));
    }

    for (let i: number = 0; i < 2; i++) {
      this.walls.push(new Wall(1155 + (70 * i), 490));
    }

    for (let i: number = 0; i < 5; i++) {
      this.walls.push(new Wall(875 + (70 * i), 350));
    }

    for (let i: number = 0; i < 2; i++) {
      this.walls.push(new Wall(1155, 140 + (70 * i)));
    }

    for (let i: number = 0; i < 3; i++) {
      this.walls.push(new Wall(1015, 140 + (70 * i)));
    }

    for (let i: number = 0; i < 4; i++) {
      this.walls.push(new Wall(1015 + (70 * i), 140));
    }

    for (let i: number = 0; i < 3; i++) {
      this.walls.push(new Wall(875, 70 + (70 * i)));
    }

    this.walls.push(new Wall(595, 420));
    this.walls.push(new Wall(875, 420));





=======
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
    this.player = new Player(325, 167);
    this.keyListener = new KeyListener();

    for (let i: number = 0; i < 12; i++) {
      this.walls.push(new Wall(500, (50 * i)));
    }
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
    this.player.update(1);

    for (let i: number = 0; i < this.walls.length; i++) {
      if (this.player.isCollidingWithItem(this.walls[i])) {
        console.log('s');
      }
    }
>>>>>>> Stashed changes
  }

  public override getNextScene(): Scene | null {
    return this;
  }

  public override render(canvas: HTMLCanvasElement): void {
<<<<<<< Updated upstream
    for (let i: number = 0; i < this.walls.length; i++) {
      this.walls[i].render(canvas);
    }
=======
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
>>>>>>> Stashed changes
  }
}
