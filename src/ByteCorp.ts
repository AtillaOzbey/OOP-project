

import CanvasRenderer from './CanvasRenderer.js';
import { Game } from './GameLoop.js';
import MouseListener from './MouseListener.js';
import Scene from './Scene.js';
import SceneStart from './SceneStart.js';
import Player from './Player.js';
import KeyListener from './KeyListener.js';
import Wall from './Wall.js';
import Npcs from './Npcs.js';
import CanvasItem from './CanvasItem.js';

export default class ByteCorp extends Game {
  private canvas: HTMLCanvasElement;

  private mouseListener: MouseListener;

  private currentScene: Scene;

  private player: Player;

  private keyListener: KeyListener;

  private walls: Wall[];

  private npcs: Npcs;

  public constructor(canvas: HTMLCanvasElement) {
    super();
    this.canvas = canvas;
    this.canvas.height = 700;
    this.canvas.width = 1400;
    this.mouseListener = new MouseListener(this.canvas);
    this.currentScene = new SceneStart(this.canvas.width, this.canvas.height);
    this.player = new Player(this.canvas.width, this.canvas.height);
    this.keyListener = new KeyListener();
    this.walls = [];
    this.npcs = new Npcs();
  }

  /**
   * Create a new item to fly through space.
   *
   * It can either be a new power up or a new meteor, depending on random chance.
   */
  private makeItem(): void {

  }

  /**
   * Process all input. Called from the GameLoop.
   */
  public processInput(): void {
    this.currentScene.processInput(this.mouseListener);

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

  /**
   * Update game state. Called from the GameLoop
   *
   * @param elapsed time elapsed from the GameLoop
   * @returns true if the game should continue
   */
  public update(elapsed: number): boolean {
    this.player.update(1);

    this.walls.push(new Wall(10, 200));
    this.currentScene.update(elapsed);
    this.currentScene = this.currentScene.getNextScene();

    return true;
  }

  /**
   * Tests conditions whether game is over. If time left is less than 0
   *
   * @returns True if game is over
   */
  private isGameOver(): boolean {
    return false;
  }

  /**
   * Render all the elements in the screen. Called from GameLoop
   */
  public render(): void {
    CanvasRenderer.clearCanvas(this.canvas);
    if (this.currentScene != null) {
      this.currentScene.render(this.canvas);
    }

    this.player.render(this.canvas);

    for (let i: number = 0; i < this.walls.length; i++) {
      this.walls[i].render(this.canvas);
    }

    this.npcs.render(this.canvas);
  }
}
