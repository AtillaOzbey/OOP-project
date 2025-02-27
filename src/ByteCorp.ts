import CanvasRenderer from './CanvasRenderer.js';
import { Game } from './GameLoop.js';
import MouseListener from './MouseListener.js';
import Scene from './Scene.js';
import SceneStart from './SceneStart.js';
import Player from './Players/Player.js';
import KeyListener from './KeyListener.js';

export default class ByteCorp extends Game {
  private canvas: HTMLCanvasElement;

  private mouseListener: MouseListener;

  private currentScene: Scene;

  private player: Player;

  private keyListener: KeyListener;

  public constructor(canvas: HTMLCanvasElement) {
    super();
    this.canvas = canvas;
    this.canvas.height = 700;
    this.canvas.width = 1400;
    this.mouseListener = new MouseListener(this.canvas);
    this.currentScene = new SceneStart(this.canvas.width, this.canvas.height);
    this.player = new Player(100, 100);
    this.keyListener = new KeyListener();
  }

  /**
   * Process all input. Called from the GameLoop.
   */
  public processInput(): void {
    this.currentScene.processInput(this.mouseListener);
  }

  /**
   * Update game state. Called from the GameLoop
   *
   * @param elapsed time elapsed from the GameLoop
   * @returns true if the game should continue
   */
  public update(elapsed: number): boolean {
    this.player.update(1);

    this.currentScene.update(elapsed);
    this.currentScene = this.currentScene.getNextScene();

    return true;
  }

  /**
   * Tests conditions whether game is over. If time left is less than 0
   *
   * @returns True if game is over
   */
  // eslint-disable-next-line class-methods-use-this
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
  }
}
