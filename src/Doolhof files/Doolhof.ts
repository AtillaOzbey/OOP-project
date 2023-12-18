import ByteCorp from '../ByteCorp.js';

export default class Doolhof {
  private pacman: HTMLImageElement;

  private wall: HTMLImageElement;

  private tileSize: number;

  private dot: HTMLImageElement;

  public constructor(tileSize) {
    this.tileSize = tileSize;
    this.wall = this.#image("wall.png");
    this.pacman = this.#image("pacman.png");
    this.dot = this.#image("yellowDot.png");
  }

  image = new Image;

  #image(fileName) {
    const img = new Image();
    img.src = `images/${fileName}`;
    return img;
  }
}
