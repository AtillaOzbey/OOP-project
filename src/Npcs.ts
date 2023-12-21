import CanvasItem from './CanvasItem.js';
import CanvasRenderer from './CanvasRenderer.js';

export default class Npcs extends CanvasItem {
  public constructor() {
    super();
    this.image = CanvasRenderer.loadNewImage('./assets/SpoedermoenNPC.png');
    this.posX = 50;
    this.posY = 50;
  }
}
