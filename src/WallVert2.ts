import CanvasItem from './CanvasItem.js';
import CanvasRenderer from './CanvasRenderer.js';

export default class WallVert2 extends CanvasItem {
  public constructor(maxX: number, maxY: number) {
    super();
    this.image = CanvasRenderer.loadNewImage('./assets/invisible_wall_Y2.png');
    this.posX = maxX;
    this.posY = maxY;
  }
}
