import CanvasItem from './CanvasItem.js';
import CanvasRenderer from './CanvasRenderer.js';

export default class Wall extends CanvasItem {
  public constructor(maxX: number, maxY: number) {
    super();
    this.image = CanvasRenderer.loadNewImage('./assets/hackerblok.png');
    this.posX = maxX;
    this.posY = maxY;
  }

  public override getPosX(): number {
    return this.posX;
  }

  public override getPosY(): number {
    return this.posY;
  }
}
