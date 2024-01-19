import CanvasItem from '../CanvasItem.js';
import CanvasRenderer from '../CanvasRenderer.js';

export default class WallHori extends CanvasItem {
  public constructor(maxX: number, maxY: number) {
    super();
    this.image = CanvasRenderer.loadNewImage('./assets/invisible_wall_X.png');
    this.posX = maxX;
    this.posY = maxY;
  }
}
