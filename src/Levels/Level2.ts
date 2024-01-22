import CanvasRenderer from '../CanvasRenderer.js';
import KeyListener from '../KeyListener.js';
import MessageBorder from '../MessageBorder.js';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import MouseListener, { MouseCoordinates } from '../MouseListener.js';
import Baas from '../Players/Baas.js';
import Joch1 from '../Players/Joch1.js';
import Joch2 from '../Players/Joch2.js';
import Lucy from '../Players/Lucy.js';
import Player from '../Players/Player.js';
import Sanne from '../Players/Sanne.js';
import Scene from '../Scene.js';
import Levels from './Levels.js';
import Level3 from './Level3.js';

export default class Level2 extends Levels {
  private sanne: Sanne;

  private lucy: Lucy;

  private joch1: Joch1;

  private joch2: Joch2;

  private messageBorderSanne: MessageBorder;

  private messageBorderLucy: MessageBorder;

  private messageBorderJoch1: MessageBorder;

  private messageBorderJoch2: MessageBorder;

  private messageBorderBaas: MessageBorder;

  private spotted: string[];

  public constructor(maxX: number, maxY: number) {
    super(maxX, maxY);
    this.player = new Player(448, 400);
    this.sanne = new Sanne(116, 148);
    this.lucy = new Lucy(573, 140);
    this.joch1 = new Joch1(573, 405);
    this.joch2 = new Joch2(116, 405);
    this.baas = new Baas(1169, 580);
    this.spotted = [];
    this.count = 0;
    this.timeToNext = 90000000;
    this.logo = CanvasRenderer.loadNewImage('/assets/Kantoor3_700x1400.png');
    this.messageBorderSanne = new MessageBorder(CanvasRenderer.loadNewImage('/assets/Sanne3.png'));
    this.messageBorderJoch1 = new MessageBorder(CanvasRenderer.loadNewImage('/assets/Sander2.png'));
    this.messageBorderJoch2 = new MessageBorder(CanvasRenderer.loadNewImage('/assets/Max2.png'));
    this.messageBorderLucy = new MessageBorder(CanvasRenderer.loadNewImage('/assets/Lisa3.png'));
    this.messageBorderBaas = new MessageBorder(CanvasRenderer.loadNewImage('/assets/Dialoog_baas2.0.png'));
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
    if (mouseListener.getMousePosition().x > 114 && mouseListener.getMousePosition().x < 280
      && mouseListener.getMousePosition().y > 108 && mouseListener.getMousePosition().y < 140
      && mouseListener.buttonPressed(MouseListener.BUTTON_LEFT) && this.spotted.length === 6) {
      this.messageBorderBaas.changeImage(CanvasRenderer.loadNewImage('/assets/Dialoog_2.2.png'));
      this.timeToNext = 8000;
    } if ((mouseListener.getMousePosition().x > 114 && mouseListener.getMousePosition().x < 280
      && mouseListener.getMousePosition().y > 140
      && mouseListener.buttonPressed(MouseListener.BUTTON_LEFT)) && this.spotted.length === 6) {
      this.messageBorderBaas.changeImage(CanvasRenderer.loadNewImage('/assets/Dialoog_2.4.png'));
      this.timeToNext = 8000;
      this.count = 1;
    }
    if (this.count === 1 && this.timeToNext <= 0) {
      this.messageBorderBaas.changeImage(CanvasRenderer.loadNewImage('/assets/Dialoog_baas2.1.png'));
      this.timeToNext = 90000;
      this.count = 2;
    }
    if (this.timeToNext <= 0 && this.spotted.length === 6) {
      this.messageBorderBaas.changeImage(CanvasRenderer.loadNewImage('/assets/Dialoog_2.3.png'));
      this.count = 3;
      this.timeToNext = 5000;
    }
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

    this.timeToNext -= elapsed;
    if (this.player.getPosX() > 1130 && this.player.getPosX() < 1266
      && this.player.getPosY() > 570 && this.player.getPosY() < 680 && this.spotted.length === 5
      && this.keyListener.keyPressed(KeyListener.KEY_E)) {
      this.messageBorderBaas.changeImage(CanvasRenderer.loadNewImage('/assets/Dialoog_baas2.1.png'));
      if (!this.spotted.includes('spotted6')) {
        this.spotted.splice(0, 0, 'spotted6');
      }
    }
  }

  public override getNextScene(): Scene | null {
    if (this.timeToNext <= 0 && this.count === 3) {
      return new Level3(this.maxX, this.maxY);
    }
    return this;
  }

  /**
   * Renders the canvas
   *@param canvas what canvas to render to
   */
  public override render(canvas: HTMLCanvasElement): void {
    CanvasRenderer.drawImage(
      canvas,
      this.logo,
      (canvas.width / 2) - (this.logo.width / 2),
      (canvas.height / 2) - (this.logo.height / 2),
    );

    this.player.render(canvas);
    this.sanne.render(canvas);
    this.lucy.render(canvas);
    this.joch1.render(canvas);
    this.joch2.render(canvas);
    this.baas.render(canvas);

    if (this.player.getPosX() > 80 && this.player.getPosX() < 180
      && this.player.getPosY() > 100 && this.player.getPosY() < 140) {
      this.messageBorderLucy.render(canvas);
      if (!this.spotted.includes('spotted1')) {
        this.spotted.splice(0, 0, 'spotted1');
      }
    }
    if (this.player.getPosX() > 520 && this.player.getPosX() < 629
      && this.player.getPosY() > 100 && this.player.getPosY() < 140) {
      this.messageBorderSanne.render(canvas);
      if (!this.spotted.includes('spotted2')) {
        this.spotted.splice(0, 0, 'spotted2');
      }
    }
    if (this.player.getPosX() > 520 && this.player.getPosX() < 629
      && this.player.getPosY() > 365 && this.player.getPosY() < 415) {
      this.messageBorderJoch1.render(canvas);
      if (!this.spotted.includes('spotted3')) {
        this.spotted.splice(0, 0, 'spotted3');
      }
    }
    if (this.player.getPosX() > 80 && this.player.getPosX() < 180
      && this.player.getPosY() > 365 && this.player.getPosY() < 415) {
      this.messageBorderJoch2.render(canvas);
      if (!this.spotted.includes('spotted4')) {
        this.spotted.splice(0, 0, 'spotted4');
      }
    }
    if (this.player.getPosX() > 1130 && this.player.getPosX() < 1266
      && this.player.getPosY() > 570 && this.player.getPosY() < 680 && this.spotted.length >= 4) {
      this.messageBorderBaas.render(canvas);
      if (!this.spotted.includes('spotted5')) {
        this.spotted.splice(0, 0, 'spotted5');
      }
    }
  }
}
