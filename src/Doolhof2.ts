import CanvasRenderer from './CanvasRenderer.js';
import MouseListener, { MouseCoordinates } from './MouseListener.js';
import Scene from './Scene.js';
import KeyListener from './KeyListener.js';
import WallVert2 from './WallVert2.js';
import WallHori2 from './WallHori2.js';
import PlayerGrootPijl from './Players/PlayerGrootPijl.js';
import Doolhof from './Doolhof.js';

export default class Doolhof2 extends Scene {
  private walls: WallVert2[];

  private background: HTMLImageElement;

  private player: PlayerGrootPijl;

  private keyListener: KeyListener;

  public constructor(maxX: number, maxY: number) {
    super(maxX, maxY);
    this.background = CanvasRenderer.loadNewImage('/assets/doolhof2.png');
    this.walls = [];
    this.player = new PlayerGrootPijl(275, 363, 1);
    this.keyListener = new KeyListener();

    for (let i: number = 0; i < 26; i++) {
      this.walls.push(new WallVert2(268, 106 + (22 * i)));
    }

    for (let i: number = 0; i < 26; i++) {
      this.walls.push(new WallVert2(1130, 106 + (22 * i)));
    }

    for (let i: number = 0; i < 39; i++) {
      this.walls.push(new WallHori2(268 + (22 * i), 103));
    }

    for (let i: number = 0; i < 39; i++) {
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

    for (let i: number = 0; i < 6; i++) {
      this.walls.push(new WallHori2(289 + (i * 21), 125));
    }

    for (let i: number = 0; i < 2; i++) {
      this.walls.push(new WallHori2(436 + (i * 21), 125));
    }

    this.walls.push(new WallHori2(541, 125));

    for (let i: number = 0; i < 3; i++) {
      this.walls.push(new WallHori2(583 + (i * 21), 125));
    }

    for (let i: number = 0; i < 6; i++) {
      this.walls.push(new WallHori2(709 + (i * 21), 125));
    }

    for (let i: number = 0; i < 2; i++) {
      this.walls.push(new WallHori2(940 + (i * 21), 125));
    }

    for (let i: number = 0; i < 2; i++) {
      this.walls.push(new WallHori2(1024 + (i * 21), 125));
    }

    this.walls.push(new WallHori2(667, 125));
    this.walls.push(new WallHori2(877, 125));
    this.walls.push(new WallHori2(1087, 125));

    for (let i: number = 0; i < 5; i++) {
      this.walls.push(new WallHori2(289 + (i * 21), 146));
    }

    this.walls.push(new WallHori2(457, 146));

    for (let i: number = 0; i < 2; i++) {
      this.walls.push(new WallHori2(520 + (i * 21), 146));
    }

    for (let i: number = 0; i < 2; i++) {
      this.walls.push(new WallHori2(604 + (i * 21), 146));
    }

    for (let i: number = 0; i < 2; i++) {
      this.walls.push(new WallHori2(772 + (i * 21), 146));
    }

    for (let i: number = 0; i < 2; i++) {
      this.walls.push(new WallHori2(1003 + (i * 21), 146));
    }

    for (let i: number = 0; i < 3; i++) {
      this.walls.push(new WallHori2(268 + (i * 21), 167));
    }

    for (let i: number = 0; i < 3; i++) {
      this.walls.push(new WallHori2(352 + (i * 21), 167));
    }

    for (let i: number = 0; i < 2; i++) {
      this.walls.push(new WallHori2(520 + (i * 21), 167));
    }

    for (let i: number = 0; i < 2; i++) {
      this.walls.push(new WallHori2(751 + (i * 21), 167));
    }

    for (let i: number = 0; i < 2; i++) {
      this.walls.push(new WallHori2(877 + (i * 21), 167));
    }

    for (let i: number = 0; i < 2; i++) {
      this.walls.push(new WallHori2(1066 + (i * 21), 167));
    }

    for (let i: number = 0; i < 2; i++) {
      this.walls.push(new WallHori2(268 + (i * 21), 188));
    }

    for (let i: number = 0; i < 4; i++) {
      this.walls.push(new WallHori2(352 + (i * 21), 188));
    }

    for (let i: number = 0; i < 2; i++) {
      this.walls.push(new WallHori2(877 + (i * 21), 188));
    }

    this.walls.push(new WallHori2(541, 188));
    this.walls.push(new WallHori2(667, 188));
    this.walls.push(new WallHori2(751, 188));
    this.walls.push(new WallHori2(814, 188));
    this.walls.push(new WallHori2(940, 188));

    for (let i: number = 0; i < 2; i++) {
      this.walls.push(new WallHori2(394 + (i * 21), 209));
    }

    for (let i: number = 0; i < 3; i++) {
      this.walls.push(new WallHori2(520 + (i * 21), 209));
    }

    for (let i: number = 0; i < 3; i++) {
      this.walls.push(new WallHori2(919 + (i * 21), 209));
    }

    this.walls.push(new WallHori2(625, 209));
    this.walls.push(new WallHori2(709, 209));
    this.walls.push(new WallHori2(1024, 209));
    this.walls.push(new WallHori2(352, 230));
    this.walls.push(new WallHori2(415, 230));
    this.walls.push(new WallHori2(1108, 230));

    for (let i: number = 0; i < 3; i++) {
      this.walls.push(new WallHori2(478 + (i * 21), 230));
    }

    for (let i: number = 0; i < 4; i++) {
      this.walls.push(new WallHori2(562 + (i * 21), 230));
    }

    for (let i: number = 0; i < 4; i++) {
      this.walls.push(new WallHori2(688 + (i * 21), 230));
    }

    for (let i: number = 0; i < 7; i++) {
      this.walls.push(new WallHori2(919 + (i * 21), 230));
    }

    this.walls.push(new WallHori2(268, 251));
    this.walls.push(new WallHori2(667, 251));

    for (let i: number = 0; i < 3; i++) {
      this.walls.push(new WallHori2(309 + (i * 21), 251));
    }

    for (let i: number = 0; i < 7; i++) {
      this.walls.push(new WallHori2(415 + (i * 21), 251));
    }

    for (let i: number = 0; i < 2; i++) {
      this.walls.push(new WallHori2(604 + (i * 21), 251));
    }

    for (let i: number = 0; i < 5; i++) {
      this.walls.push(new WallHori2(709 + (i * 21), 251));
    }

    for (let i: number = 0; i < 4; i++) {
      this.walls.push(new WallHori2(898 + (i * 21), 251));
    }

    for (let i: number = 0; i < 3; i++) {
      this.walls.push(new WallHori2(1024 + (i * 21), 251));
    }

    for (let i: number = 0; i < 3; i++) {
      this.walls.push(new WallHori2(289 + (i * 21), 272));
    }

    for (let i: number = 0; i < 7; i++) {
      this.walls.push(new WallHori2(436 + (i * 21), 272));
    }

    for (let i: number = 0; i < 2; i++) {
      this.walls.push(new WallHori2(604 + (i * 21), 272));
    }

    for (let i: number = 0; i < 2; i++) {
      this.walls.push(new WallHori2(856 + (i * 21), 272));
    }

    for (let i: number = 0; i < 2; i++) {
      this.walls.push(new WallHori2(940 + (i * 21), 272));
    }

    this.walls.push(new WallHori2(730, 272));
    this.walls.push(new WallHori2(793, 272));
    this.walls.push(new WallHori2(1045, 272));

    for (let i: number = 0; i < 2; i++) {
      this.walls.push(new WallHori2(268 + (i * 21), 293));
    }

    for (let i: number = 0; i < 5; i++) {
      this.walls.push(new WallHori2(457 + (i * 21), 293));
    }

    for (let i: number = 0; i < 2; i++) {
      this.walls.push(new WallHori2(751 + (i * 21), 293));
    }

    for (let i: number = 0; i < 3; i++) {
      this.walls.push(new WallHori2(919 + (i * 21), 293));
    }

    for (let i: number = 0; i < 2; i++) {
      this.walls.push(new WallHori2(1066 + (i * 21), 293));
    }

    this.walls.push(new WallHori2(331, 293));
    this.walls.push(new WallHori2(625, 293));
    this.walls.push(new WallHori2(814, 293));
    this.walls.push(new WallHori2(856, 293));

    this.walls.push(new WallHori2(310, 314));

    for (let i: number = 0; i < 2; i++) {
      this.walls.push(new WallHori2(394 + (i * 21), 314));
    }

    for (let i: number = 0; i < 5; i++) {
      this.walls.push(new WallHori2(457 + (i * 21), 314));
    }

    for (let i: number = 0; i < 3; i++) {
      this.walls.push(new WallHori2(604 + (i * 21), 314));
    }

    for (let i: number = 0; i < 6; i++) {
      this.walls.push(new WallHori2(709 + (i * 21), 314));
    }

    for (let i: number = 0; i < 2; i++) {
      this.walls.push(new WallHori2(961 + (i * 21), 314));
    }

    for (let i: number = 0; i < 3; i++) {
      this.walls.push(new WallHori2(1066 + (i * 21), 314));
    }

    for (let i: number = 0; i < 3; i++) {
      this.walls.push(new WallHori2(289 + (i * 21), 335));
    }

    for (let i: number = 0; i < 2; i++) {
      this.walls.push(new WallHori2(394 + (i * 21), 335));
    }

    for (let i: number = 0; i < 3; i++) {
      this.walls.push(new WallHori2(625 + (i * 21), 335));
    }

    for (let i: number = 0; i < 8; i++) {
      this.walls.push(new WallHori2(730 + (i * 21), 335));
    }

    this.walls.push(new WallHori2(856, 335));
    this.walls.push(new WallHori2(478, 335));
    this.walls.push(new WallHori2(520, 335));
    this.walls.push(new WallHori2(961, 335));

    for (let i: number = 0; i < 3; i++) {
      this.walls.push(new WallHori2(268 + (i * 21), 356));
    }

    for (let i: number = 0; i < 2; i++) {
      this.walls.push(new WallHori2(352 + (i * 21), 356));
    }

    for (let i: number = 0; i < 4; i++) {
      this.walls.push(new WallHori2(415 + (i * 21), 356));
    }

    for (let i: number = 0; i < 6; i++) {
      this.walls.push(new WallHori2(583 + (i * 21), 356));
    }

    for (let i: number = 0; i < 5; i++) {
      this.walls.push(new WallHori2(772 + (i * 21), 356));
    }

    this.walls.push(new WallHori2(520, 356));
    this.walls.push(new WallHori2(1024, 356));
    this.walls.push(new WallHori2(1066, 356));

    this.walls.push(new WallHori2(268, 377));
    this.walls.push(new WallHori2(499, 377));
    this.walls.push(new WallHori2(688, 377));
    this.walls.push(new WallHori2(730, 377));
    this.walls.push(new WallHori2(793, 377));
    this.walls.push(new WallHori2(856, 377));
    this.walls.push(new WallHori2(919, 377));
    this.walls.push(new WallHori2(982, 377));

    for (let i: number = 0; i < 4; i++) {
      this.walls.push(new WallHori2(310 + (i * 21), 377));
    }

    for (let i: number = 0; i < 3; i++) {
      this.walls.push(new WallHori2(415 + (i * 21), 377));
    }

    for (let i: number = 0; i < 2; i++) {
      this.walls.push(new WallHori2(583 + (i * 21), 377));
    }

    for (let i: number = 0; i < 3; i++) {
      this.walls.push(new WallHori2(1045 + (i * 21), 377));
    }

    for (let i: number = 0; i < 2; i++) {
      this.walls.push(new WallHori2(310 + (i * 21), 398));
    }

    for (let i: number = 0; i < 5; i++) {
      this.walls.push(new WallHori2(373 + (i * 21), 398));
    }

    for (let i: number = 0; i < 2; i++) {
      this.walls.push(new WallHori2(583 + (i * 21), 398));
    }

    for (let i: number = 0; i < 4; i++) {
      this.walls.push(new WallHori2(940 + (i * 21), 398));
    }

    this.walls.push(new WallHori2(1066, 398));

    for (let i: number = 0; i < 4; i++) {
      this.walls.push(new WallHori2(268 + (i * 21), 419));
    }

    for (let i: number = 0; i < 3; i++) {
      this.walls.push(new WallHori2(373 + (i * 21), 419));
    }

    this.walls.push(new WallHori2(457, 419));
    this.walls.push(new WallHori2(541, 419));
    this.walls.push(new WallHori2(604, 419));
    this.walls.push(new WallHori2(961, 419));

    for (let i: number = 0; i < 2; i++) {
      this.walls.push(new WallHori2(1024 + (i * 21), 419));
    }

    for (let i: number = 0; i < 4; i++) {
      this.walls.push(new WallHori2(310 + (i * 21), 440));
    }

    for (let i: number = 0; i < 2; i++) {
      this.walls.push(new WallHori2(583 + (i * 21), 440));
    }

    for (let i: number = 0; i < 3; i++) {
      this.walls.push(new WallHori2(646 + (i * 21), 440));
    }

    for (let i: number = 0; i < 2; i++) {
      this.walls.push(new WallHori2(835 + (i * 21), 440));
    }

    for (let i: number = 0; i < 4; i++) {
      this.walls.push(new WallHori2(1024 + (i * 21), 440));
    }

    this.walls.push(new WallHori2(919, 440));

    for (let i: number = 0; i < 2; i++) {
      this.walls.push(new WallHori2(352 + (i * 21), 461));
    }

    for (let i: number = 0; i < 3; i++) {
      this.walls.push(new WallHori2(415 + (i * 21), 461));
    }

    for (let i: number = 0; i < 3; i++) {
      this.walls.push(new WallHori2(562 + (i * 21), 461));
    }

    for (let i: number = 0; i < 4; i++) {
      this.walls.push(new WallHori2(667 + (i * 21), 461));
    }

    for (let i: number = 0; i < 3; i++) {
      this.walls.push(new WallHori2(814 + (i * 21), 461));
    }

    for (let i: number = 0; i < 6; i++) {
      this.walls.push(new WallHori2(1003 + (i * 21), 461));
    }

    this.walls.push(new WallHori2(919, 461));

    this.walls.push(new WallHori2(352, 482));
    this.walls.push(new WallHori2(1087, 482));

    for (let i: number = 0; i < 4; i++) {
      this.walls.push(new WallHori2(436 + (i * 21), 482));
    }

    for (let i: number = 0; i < 3; i++) {
      this.walls.push(new WallHori2(583 + (i * 21), 482));
    }

    for (let i: number = 0; i < 2; i++) {
      this.walls.push(new WallHori2(709 + (i * 21), 482));
    }

    for (let i: number = 0; i < 13; i++) {
      this.walls.push(new WallHori2(793 + (i * 21), 482));
    }

    this.walls.push(new WallHori2(268, 503));
    this.walls.push(new WallHori2(604, 503));
    this.walls.push(new WallHori2(667, 503));
    this.walls.push(new WallHori2(730, 503));

    for (let i: number = 0; i < 3; i++) {
      this.walls.push(new WallHori2(457 + (i * 21), 503));
    }

    for (let i: number = 0; i < 7; i++) {
      this.walls.push(new WallHori2(772 + (i * 21), 503));
    }

    for (let i: number = 0; i < 2; i++) {
      this.walls.push(new WallHori2(1003 + (i * 21), 503));
    }

    for (let i: number = 0; i < 2; i++) {
      this.walls.push(new WallHori2(1066 + (i * 21), 503));
    }

    this.walls.push(new WallHori2(310, 524));
    this.walls.push(new WallHori2(415, 524));
    this.walls.push(new WallHori2(541, 524));

    for (let i: number = 0; i < 2; i++) {
      this.walls.push(new WallHori2(352 + (i * 21), 524));
    }

    for (let i: number = 0; i < 3; i++) {
      this.walls.push(new WallHori2(457 + (i * 21), 524));
    }

    for (let i: number = 0; i < 6; i++) {
      this.walls.push(new WallHori2(625 + (i * 21), 524));
    }

    for (let i: number = 0; i < 3; i++) {
      this.walls.push(new WallHori2(793 + (i * 21), 524));
    }

    for (let i: number = 0; i < 2; i++) {
      this.walls.push(new WallHori2(877 + (i * 21), 524));
    }

    for (let i: number = 0; i < 2; i++) {
      this.walls.push(new WallHori2(1087 + (i * 21), 524));
    }

    this.walls.push(new WallHori2(268, 545));
    this.walls.push(new WallHori2(583, 545));
    this.walls.push(new WallHori2(625, 545));

    for (let i: number = 0; i < 4; i++) {
      this.walls.push(new WallHori2(310 + (i * 21), 545));
    }

    for (let i: number = 0; i < 7; i++) {
      this.walls.push(new WallHori2(415 + (i * 21), 545));
    }

    for (let i: number = 0; i < 8; i++) {
      this.walls.push(new WallHori2(667 + (i * 21), 545));
    }

    for (let i: number = 0; i < 4; i++) {
      this.walls.push(new WallHori2(856 + (i * 21), 545));
    }

    this.walls.push(new WallHori2(268, 566));
    this.walls.push(new WallHori2(1024, 566));
    this.walls.push(new WallHori2(751, 587));

    for (let i: number = 0; i < 3; i++) {
      this.walls.push(new WallHori2(309 + (i * 21), 566));
    }

    for (let i: number = 0; i < 3; i++) {
      this.walls.push(new WallHori2(394 + (i * 21), 566));
    }

    for (let i: number = 0; i < 5; i++) {
      this.walls.push(new WallHori2(499 + (i * 21), 566));
    }

    for (let i: number = 0; i < 3; i++) {
      this.walls.push(new WallHori2(730 + (i * 21), 566));
    }

    for (let i: number = 0; i < 3; i++) {
      this.walls.push(new WallHori2(877 + (i * 21), 566));
    }

    for (let i: number = 0; i < 2; i++) {
      this.walls.push(new WallHori2(331 + (i * 21), 587));
    }

    for (let i: number = 0; i < 3; i++) {
      this.walls.push(new WallHori2(394 + (i * 21), 587));
    }

    for (let i: number = 0; i < 5; i++) {
      this.walls.push(new WallHori2(478 + (i * 21), 587));
    }

    for (let i: number = 0; i < 2; i++) {
      this.walls.push(new WallHori2(814 + (i * 21), 587));
    }

    for (let i: number = 0; i < 5; i++) {
      this.walls.push(new WallHori2(877 + (i * 21), 587));
    }

    this.walls.push(new WallHori2(667, 608));

    for (let i: number = 0; i < 11; i++) {
      this.walls.push(new WallHori2(310 + (i * 21), 608));
    }

    for (let i: number = 0; i < 2; i++) {
      this.walls.push(new WallHori2(730 + (i * 21), 608));
    }
    for (let i: number = 0; i < 4; i++) {
      this.walls.push(new WallHori2(793 + (i * 21), 608));
    }
    for (let i: number = 0; i < 4; i++) {
      this.walls.push(new WallHori2(919 + (i * 21), 608));
    }

    this.walls.push(new WallHori2(1003, 587));
    this.walls.push(new WallHori2(1066, 587));
    this.walls.push(new WallHori2(1108, 608));

    this.walls.push(new WallHori2(331, 629));
    this.walls.push(new WallHori2(625, 629));
    this.walls.push(new WallHori2(919, 629));
    this.walls.push(new WallHori2(1108, 629));

    for (let i: number = 0; i < 3; i++) {
      this.walls.push(new WallHori2(478 + (i * 21), 629));
    }

    for (let i: number = 0; i < 3; i++) {
      this.walls.push(new WallHori2(373 + (i * 21), 629));
    }

    for (let i: number = 0; i < 8; i++) {
      this.walls.push(new WallHori2(709 + (i * 21), 629));
    }

    for (let i: number = 0; i < 2; i++) {
      this.walls.push(new WallHori2(961 + (i * 21), 629));
    }

    for (let i: number = 0; i < 3; i++) {
      this.walls.push(new WallHori2(1024 + (i * 21), 629));
    }

    for (let i: number = 0; i < 4; i++) {
      this.walls.push(new WallHori2(268 + (i * 21), 650));
    }

    for (let i: number = 0; i < 2; i++) {
      this.walls.push(new WallHori2(394 + (i * 21), 650));
    }

    for (let i: number = 0; i < 5; i++) {
      this.walls.push(new WallHori2(457 + (i * 21), 650));
    }

    for (let i: number = 0; i < 4; i++) {
      this.walls.push(new WallHori2(583 + (i * 21), 650));
    }

    for (let i: number = 0; i < 2; i++) {
      this.walls.push(new WallHori2(688 + (i * 21), 650));
    }

    for (let i: number = 0; i < 4; i++) {
      this.walls.push(new WallHori2(751 + (i * 21), 650));
    }

    for (let i: number = 0; i < 6; i++) {
      this.walls.push(new WallHori2(961 + (i * 21), 650));
    }

    this.walls.push(new WallHori2(877, 650));
    this.walls.push(new WallHori2(919, 650));
    this.walls.push(new WallVert2(1024, 587));
  }

  private lastDirection: number = 0;

  private moveUp: boolean = true;

  private moveDown: boolean = true;

  private moveLeft: boolean = true;

  private moveRight: boolean = true;

  /**
   * Processes the input
   *@param mouseListener Listens to the mouse
   */
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
   * Updates the game
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
    if (this.player.getPosX() > 1110 && this.player.getPosX() < 1140
      && this.player.getPosY() > 355 && this.player.getPosY() < 380) {
      return new Doolhof(this.maxX, this.maxY);
    }
    return this;
  }

  /**
   * renders the game
   *@param canvas the canvas
   */
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
