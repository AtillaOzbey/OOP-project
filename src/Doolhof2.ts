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

    for (let i: number = 0; i < 5; i++) {
      this.walls.push(new WallVert2(499, 103 + (21 * i)));
    }

    this.walls.push(new WallVert2(499, 335));
    this.walls.push(new WallVert2(499, 566));

    for (let i: number = 0; i < 5; i++) {
      this.walls.push(new WallVert2(499, 377 + (21 * i)));
    }

    for (let i: number = 0; i < 2; i++) {
      this.walls.push(new WallVert2(520, 103 + (21 * i)));
    }

    for (let i: number = 0; i < 2; i++) {
      this.walls.push(new WallVert2(520, 167 + (21 * i)));
    }

    for (let i: number = 0; i < 4; i++) {
      this.walls.push(new WallVert2(520, 377 + (21 * i)));
    }

    this.walls.push(new WallVert2(520, 314));
    this.walls.push(new WallVert2(520, 482));
    this.walls.push(new WallVert2(541, 608));

    for (let i: number = 0; i < 8; i++) {
      this.walls.push(new WallVert2(541, 356 + (21 * i)));
    }

    this.walls.push(new WallVert2(562, 125));
    this.walls.push(new WallVert2(562, 167));
    this.walls.push(new WallVert2(562, 230));
    this.walls.push(new WallVert2(562, 272));

    for (let i: number = 0; i < 5; i++) {
      this.walls.push(new WallVert2(562, 314 + (21 * i)));
    }

    for (let i: number = 0; i < 5; i++) {
      this.walls.push(new WallVert2(562, 440 + (21 * i)));
    }

    for (let i: number = 0; i < 2; i++) {
      this.walls.push(new WallVert2(562, 608 + (21 * i)));
    }

    for (let i: number = 0; i < 4; i++) {
      this.walls.push(new WallVert2(583, 125 + (21 * i)));
    }

    for (let i: number = 0; i < 7; i++) {
      this.walls.push(new WallVert2(583, 230 + (21 * i)));
    }

    for (let i: number = 0; i < 2; i++) {
      this.walls.push(new WallVert2(583, 398 + (21 * i)));
    }

    for (let i: number = 0; i < 4; i++) {
      this.walls.push(new WallVert2(583, 482 + (21 * i)));
    }

    for (let i: number = 0; i < 3; i++) {
      this.walls.push(new WallVert2(583, 587 + (21 * i)));
    }

    for (let i: number = 0; i < 4; i++) {
      this.walls.push(new WallVert2(604, 146 + (21 * i)));
    }

    for (let i: number = 0; i < 3; i++) {
      this.walls.push(new WallVert2(604, 272 + (21 * i)));
    }

    for (let i: number = 0; i < 2; i++) {
      this.walls.push(new WallVert2(604, 503 + (21 * i)));
    }

    for (let i: number = 0; i < 3; i++) {
      this.walls.push(new WallVert2(604, 566 + (21 * i)));
    }

    for (let i: number = 0; i < 2; i++) {
      this.walls.push(new WallVert2(625, 167 + (21 * i)));
    }

    this.walls.push(new WallVert2(625, 398));
    this.walls.push(new WallVert2(625, 440));
    this.walls.push(new WallVert2(625, 652));
    this.walls.push(new WallVert2(646, 103));

    for (let i: number = 0; i < 4; i++) {
      this.walls.push(new WallVert2(625, 524 + (21 * i)));
    }

    for (let i: number = 0; i < 3; i++) {
      this.walls.push(new WallVert2(646, 146 + (21 * i)));
    }

    this.walls.push(new WallVert2(646, 230));
    this.walls.push(new WallVert2(646, 272));

    for (let i: number = 0; i < 7; i++) {
      this.walls.push(new WallVert2(646, 356 + (21 * i)));
    }

    for (let i: number = 0; i < 4; i++) {
      this.walls.push(new WallVert2(646, 545 + (21 * i)));
    }

    for (let i: number = 0; i < 5; i++) {
      this.walls.push(new WallVert2(667, 146 + (21 * i)));
    }

    for (let i: number = 0; i < 3; i++) {
      this.walls.push(new WallVert2(667, 272 + (21 * i)));
    }

    for (let i: number = 0; i < 3; i++) {
      this.walls.push(new WallVert2(667, 357 + (21 * i)));
    }

    for (let i: number = 0; i < 2; i++) {
      this.walls.push(new WallVert2(667, 461 + (21 * i)));
    }

    for (let i: number = 0; i < 5; i++) {
      this.walls.push(new WallVert2(667, 545 + (21 * i)));
    }

    for (let i: number = 0; i < 4; i++) {
      this.walls.push(new WallVert2(688, 103 + (21 * i)));
    }

    for (let i: number = 0; i < 6; i++) {
      this.walls.push(new WallVert2(688, 209 + (21 * i)));
    }

    for (let i: number = 0; i < 2; i++) {
      this.walls.push(new WallVert2(688, 377 + (21 * i)));
    }

    for (let i: number = 0; i < 2; i++) {
      this.walls.push(new WallVert2(688, 545 + (21 * i)));
    }

    for (let i: number = 0; i < 2; i++) {
      this.walls.push(new WallVert2(688, 608 + (21 * i)));
    }

    this.walls.push(new WallVert2(688, 461));

    for (let i: number = 0; i < 3; i++) {
      this.walls.push(new WallVert2(709, 125 + (21 * i)));
    }

    for (let i: number = 0; i < 5; i++) {
      this.walls.push(new WallVert2(709, 251 + (21 * i)));
    }

    for (let i: number = 0; i < 3; i++) {
      this.walls.push(new WallVert2(709, 377 + (21 * i)));
    }

    for (let i: number = 0; i < 2; i++) {
      this.walls.push(new WallVert2(709, 482 + (21 * i)));
    }

    for (let i: number = 0; i < 3; i++) {
      this.walls.push(new WallVert2(709, 566 + (21 * i)));
    }

    for (let i: number = 0; i < 4; i++) {
      this.walls.push(new WallVert2(730, 125 + (21 * i)));
    }

    for (let i: number = 0; i < 4; i++) {
      this.walls.push(new WallVert2(730, 377 + (21 * i)));
    }

    this.walls.push(new WallVert2(730, 272));
    this.walls.push(new WallVert2(730, 335));

    for (let i: number = 0; i < 2; i++) {
      this.walls.push(new WallVert2(730, 566 + (21 * i)));
    }

    this.walls.push(new WallVert2(751, 125));
    this.walls.push(new WallVert2(751, 272));
    this.walls.push(new WallVert2(751, 461));
    this.walls.push(new WallVert2(751, 503));
    this.walls.push(new WallVert2(751, 650));

    for (let i: number = 0; i < 2; i++) {
      this.walls.push(new WallVert2(751, 167 + (21 * i)));
    }

    for (let i: number = 0; i < 5; i++) {
      this.walls.push(new WallVert2(751, 335 + (21 * i)));
    }

    for (let i: number = 0; i < 2; i++) {
      this.walls.push(new WallVert2(772, 188 + (21 * i)));
    }

    for (let i: number = 0; i < 9; i++) {
      this.walls.push(new WallVert2(772, 356 + (21 * i)));
    }

    this.walls.push(new WallVert2(772, 251));
    this.walls.push(new WallVert2(772, 292));
    this.walls.push(new WallVert2(772, 587));

    for (let i: number = 0; i < 3; i++) {
      this.walls.push(new WallVert2(793, 167 + (21 * i)));
    }

    for (let i: number = 0; i < 5; i++) {
      this.walls.push(new WallVert2(793, 377 + (21 * i)));
    }

    for (let i: number = 0; i < 3; i++) {
      this.walls.push(new WallVert2(793, 566 + (21 * i)));
    }

    for (let i: number = 0; i < 2; i++) {
      this.walls.push(new WallVert2(814, 146 + (21 * i)));
    }

    for (let i: number = 0; i < 2; i++) {
      this.walls.push(new WallVert2(814, 209 + (21 * i)));
    }

    for (let i: number = 0; i < 3; i++) {
      this.walls.push(new WallVert2(814, 377 + (21 * i)));
    }

    this.walls.push(new WallVert2(814, 272));
    this.walls.push(new WallVert2(814, 461));

    for (let i: number = 0; i < 2; i++) {
      this.walls.push(new WallVert2(814, 545 + (21 * i)));
    }

    for (let i: number = 0; i < 9; i++) {
      this.walls.push(new WallVert2(836, 125 + (21 * i)));
    }

    for (let i: number = 0; i < 4; i++) {
      this.walls.push(new WallVert2(836, 356 + (21 * i)));
    }

    this.walls.push(new WallVert2(836, 545));

    for (let i: number = 0; i < 8; i++) {
      this.walls.push(new WallVert2(857, 105 + (21 * i)));
    }

    for (let i: number = 0; i < 2; i++) {
      this.walls.push(new WallVert2(857, 293 + (21 * i)));
    }

    for (let i: number = 0; i < 2; i++) {
      this.walls.push(new WallVert2(857, 377 + (21 * i)));
    }

    for (let i: number = 0; i < 3; i++) {
      this.walls.push(new WallVert2(857, 524 + (21 * i)));
    }

    this.walls.push(new WallVert2(857, 629));

    for (let i: number = 0; i < 2; i++) {
      this.walls.push(new WallVert2(877, 125 + (21 * i)));
    }

    for (let i: number = 0; i < 3; i++) {
      this.walls.push(new WallVert2(877, 188 + (21 * i)));
    }

    for (let i: number = 0; i < 3; i++) {
      this.walls.push(new WallVert2(877, 377 + (21 * i)));
    }

    for (let i: number = 0; i < 2; i++) {
      this.walls.push(new WallVert2(877, 566 + (21 * i)));
    }

    this.walls.push(new WallVert2(877, 314));
    this.walls.push(new WallVert2(877, 629));
    this.walls.push(new WallVert2(898, 124));

    for (let i: number = 0; i < 3; i++) {
      this.walls.push(new WallVert2(898, 188 + (21 * i)));
    }

    for (let i: number = 0; i < 10; i++) {
      this.walls.push(new WallVert2(898, 272 + (21 * i)));
    }

    for (let i: number = 0; i < 2; i++) {
      this.walls.push(new WallVert2(898, 608 + (21 * i)));
    }

    for (let i: number = 0; i < 3; i++) {
      this.walls.push(new WallVert2(919, 103 + (21 * i)));
    }

    for (let i: number = 0; i < 10; i++) {
      this.walls.push(new WallVert2(919, 251 + (21 * i)));
    }

    this.walls.push(new WallVert2(919, 188));
    this.walls.push(new WallVert2(919, 503));
    this.walls.push(new WallVert2(919, 629));

    for (let i: number = 0; i < 3; i++) {
      this.walls.push(new WallVert2(940, 125 + (21 * i)));
    }

    for (let i: number = 0; i < 3; i++) {
      this.walls.push(new WallVert2(940, 314 + (21 * i)));
    }

    for (let i: number = 0; i < 2; i++) {
      this.walls.push(new WallVert2(940, 398 + (21 * i)));
    }

    for (let i: number = 0; i < 2; i++) {
      this.walls.push(new WallVert2(940, 503 + (21 * i)));
    }

    this.walls.push(new WallVert2(940, 608));
    this.walls.push(new WallVert2(940, 650));

    for (let i: number = 0; i < 2; i++) {
      this.walls.push(new WallVert2(961, 146 + (21 * i)));
    }

    for (let i: number = 0; i < 3; i++) {
      this.walls.push(new WallVert2(961, 314 + (21 * i)));
    }

    for (let i: number = 0; i < 3; i++) {
      this.walls.push(new WallVert2(961, 419 + (21 * i)));
    }

    for (let i: number = 0; i < 4; i++) {
      this.walls.push(new WallVert2(961, 503 + (21 * i)));
    }

    for (let i: number = 0; i < 4; i++) {
      this.walls.push(new WallVert2(982, 125 + (21 * i)));
    }

    for (let i: number = 0; i < 7; i++) {
      this.walls.push(new WallVert2(982, 440 + (21 * i)));
    }

    this.walls.push(new WallVert2(982, 275));
    this.walls.push(new WallVert2(982, 356));
    this.walls.push(new WallVert2(1004, 103));
    this.walls.push(new WallVert2(1004, 629));

    for (let i: number = 0; i < 11; i++) {
      this.walls.push(new WallVert2(1004, 146 + (21 * i)));
    }

    for (let i: number = 0; i < 3; i++) {
      this.walls.push(new WallVert2(1004, 398 + (21 * i)));
    }

    for (let i: number = 0; i < 5; i++) {
      this.walls.push(new WallVert2(1004, 503 + (21 * i)));
    }

    for (let i: number = 0; i < 2; i++) {
      this.walls.push(new WallVert2(1024, 167 + (21 * i)));
    }

    for (let i: number = 0; i < 5; i++) {
      this.walls.push(new WallVert2(1024, 249 + (21 * i)));
    }

    for (let i: number = 0; i < 2; i++) {
      this.walls.push(new WallVert2(1024, 377 + (21 * i)));
    }

    for (let i: number = 0; i < 2; i++) {
      this.walls.push(new WallVert2(1024, 524 + (21 * i)));
    }

    for (let i: number = 0; i < 3; i++) {
      this.walls.push(new WallVert2(1045, 145 + (21 * i)));
    }

    for (let i: number = 0; i < 5; i++) {
      this.walls.push(new WallVert2(1045, 272 + (21 * i)));
    }

    for (let i: number = 0; i < 5; i++) {
      this.walls.push(new WallVert2(1045, 503 + (21 * i)));
    }

    this.walls.push(new WallVert2(1045, 398));

    for (let i: number = 0; i < 5; i++) {
      this.walls.push(new WallVert2(1066, 125 + (21 * i)));
    }

    for (let i: number = 0; i < 3; i++) {
      this.walls.push(new WallVert2(1066, 293 + (21 * i)));
    }

    for (let i: number = 0; i < 7; i++) {
      this.walls.push(new WallVert2(1066, 482 + (21 * i)));
    }

    this.walls.push(new WallVert2(1066, 398));

    for (let i: number = 0; i < 2; i++) {
      this.walls.push(new WallVert2(1087, 125 + (21 * i)));
    }

    for (let i: number = 0; i < 4; i++) {
      this.walls.push(new WallVert2(1087, 187 + (21 * i)));
    }

    for (let i: number = 0; i < 2; i++) {
      this.walls.push(new WallVert2(1087, 398 + (21 * i)));
    }

    for (let i: number = 0; i < 2; i++) {
      this.walls.push(new WallVert2(1087, 524 + (21 * i)));
    }

    this.walls.push(new WallVert2(1087, 335));
    this.walls.push(new WallVert2(1087, 587));
    this.walls.push(new WallVert2(1087, 629));

    this.walls.push(new WallVert2(1109, 125));
    this.walls.push(new WallVert2(1109, 482));
    this.walls.push(new WallVert2(1109, 629));

    for (let i: number = 0; i < 3; i++) {
      this.walls.push(new WallVert2(1109, 167 + (21 * i)));
    }

    for (let i: number = 0; i < 2; i++) {
      this.walls.push(new WallVert2(1109, 251 + (21 * i)));
    }

    for (let i: number = 0; i < 5; i++) {
      this.walls.push(new WallVert2(1109, 335 + (21 * i)));
    }

    for (let i: number = 0; i < 3; i++) {
      this.walls.push(new WallVert2(1109, 545 + (21 * i)));
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
