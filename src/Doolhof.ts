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
    this.player = new Player(325, 167);
    this.keyListener = new KeyListener();

    for (let i: number = 0; i < 12; i++) {
      this.walls.push(new Wall(500, (50 * i)));
    }
  }

  public processInput(mouseListener: MouseListener): void {
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

  public update(elapsed: number): void {
    this.player.update(1);

    // for (let i: number = 0; i < this.walls.length; i++) {
    //   if (this.player.isCollidingWithItem(this.walls[i])) {
    //     console.log('s');
    //   }
    // }
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

    // for (let i: number = 0; i < this.walls.length; i++) {
    //   this.walls[i].render(canvas);
    // }

    this.player.render(canvas);
  }
}
