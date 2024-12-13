import CanvasRenderer from '../CanvasRenderer.js';
import MouseListener, { MouseCoordinates } from '../MouseListener.js';
import Scene from '../Scene.js';
import KeyListener from '../KeyListener.js';
import WallVert from '../Walls/WallVert.js';
import WallHori from '../Walls/WallHori.js';
import PlayerGrootPijl from '../Players/PlayerPijl.js';
import SpotTheDifference from '../spotTheDifference/SpotTheDifference.js';
import CollisionManager from './CollisionManager.js';
import WallBuilder from '../Walls/WallBuilder.js';

export default class Doolhof extends Scene {
  private walls: (WallVert | WallHori)[];

  private background: HTMLImageElement;

  private player: PlayerGrootPijl;

  private keyListener: KeyListener;

  private collisionManager: CollisionManager;

  private lastDirection: number = 0;

  private moveUp: boolean = true;

  private moveDown: boolean = true;

  private moveLeft: boolean = true;

  private moveRight: boolean = true;

  public constructor(maxX: number, maxY: number) {
    super(maxX, maxY);

    this.background = CanvasRenderer.loadNewImage('./assets/doolhof1.png');
    this.walls = [];
    this.player = new PlayerGrootPijl(340, 167, 2);
    this.keyListener = new KeyListener();

    // Maak nu gebruik van de builder
    const builder:WallBuilder = new WallBuilder();

    // Voeg alle muren toe
    this.walls = builder
      .addVerticalWalls(329, 123, 13)
      .addVerticalWalls(1034, 123, 13)
      .addHorizontalWalls(329, 122, 17)
      .addHorizontalWalls(335, 650, 15)
      .addCustomWall(999, 650, 'horizontal')
      .addHorizontalWalls(364, 157, 3, 35)
      .addHorizontalWalls(540, 157, 4, 35)
      .addHorizontalWalls(335, 192, 2, 28)
      .addHorizontalWalls(512, 192, 7, 40)
      .addCustomWall(928, 192, 'horizontal')
      .addCustomWall(999, 192, 'horizontal')
      .addHorizontalWalls(329, 227, 1)
      .addHorizontalWalls(434, 227, 2, 35)
      .addHorizontalWalls(540, 227, 5, 35)
      .addHorizontalWalls(505, 263, 1)
      .addHorizontalWalls(576, 263, 5, 35)
      .addHorizontalWalls(823, 263, 1)
      .addHorizontalWalls(470, 298, 8, 35)
      .addCustomWall(858, 298, 'horizontal')
      .addHorizontalWalls(470, 333, 1)
      .addHorizontalWalls(575, 333, 6, 35)
      .addCustomWall(964, 333, 'horizontal')
      .addVerticalWalls(364, 264, 4)
      .addVerticalWalls(364, 544, 3, 36)
      .addVerticalWalls(399, 192, 5, 41)
      .addVerticalWalls(399, 509, 2, 55)
      .addVerticalWalls(434, 157, 2, 35)
      .addVerticalWalls(434, 263, 6, 41)
      .addVerticalWalls(434, 544, 2, 51)
      .build();

    // Initialiseer de CollisionManager
    this.collisionManager = new CollisionManager(this.player, this.walls);
  }

  /**
   *
   * @param mouseListener
   */
  public processInput(mouseListener: MouseListener): void {
    if (this.keyListener.isKeyDown(KeyListener.KEY_UP) && this.moveUp) {
      this.player.moveUp();
      this.lastDirection = 1;
    } else if (this.keyListener.isKeyDown(KeyListener.KEY_DOWN) && this.moveDown) {
      this.player.moveDown();
      this.lastDirection = 2;
    } else if (this.keyListener.isKeyDown(KeyListener.KEY_LEFT) && this.moveLeft) {
      this.player.moveLeft();
      this.lastDirection = 3;
    } else if (this.keyListener.isKeyDown(KeyListener.KEY_RIGHT) && this.moveRight) {
      this.player.moveRight();
      this.lastDirection = 4;
    }
  }

  /**
   *
   * @param elapsed
   */
  public update(elapsed: number): void {
    this.player.update(1);

    const {
      moveUp, moveDown, moveLeft, moveRight,
    } = this.collisionManager.checkCollisions(this.lastDirection);
    this.moveUp = moveUp;
    this.moveDown = moveDown;
    this.moveLeft = moveLeft;
    this.moveRight = moveRight;
  }

  public getNextScene(): Scene | null {
    if (
      this.player.getPosX() > 967 && this.player.getPosX() < 1000
      && this.player.getPosY() > 625 && this.player.getPosY() < 660
    ) {
      return new SpotTheDifference(this.maxX, this.maxY);
    }
    return this;
  }

  /**
   * 
   * @param canvas a
   */
  public render(canvas: HTMLCanvasElement): void {
    CanvasRenderer.drawImage(
      canvas,
      this.background,
      (canvas.width / 2) - (this.background.width / 2),
      (canvas.height / 2) - (this.background.height / 2),
    );

    this.walls.forEach((wall) => {
      wall.render(canvas);
    });
    this.player.render(canvas);
  }
}
