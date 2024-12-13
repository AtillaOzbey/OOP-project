import WallVert from '../Walls/WallVert.js';
import WallHori from '../Walls/WallHori.js';

export default class WallBuilder {
  private walls: (WallVert | WallHori)[] = [];

  /**
   *
   * @param x
   * @param startY
   * @param count
   * @param gap
   * @returns
   */
  public addVerticalWalls(x: number, startY: number, count: number, gap: number = 41): WallBuilder {
    for (let i:number = 0; i < count; i++) {
      this.walls.push(new WallVert(x, startY + i * gap));
    }
    return this;
  }

  /**
   * 
   * @param startX 
   * @param y 
   * @param count 
   * @param gap
   * @returns 
   */
  public addHorizontalWalls(
    startX: number,
    y: number,
    count: number,
    gap: number = 41,
  ): WallBuilder {
    for (let i:number = 0; i < count; i++) {
      this.walls.push(new WallHori(startX + i * gap, y));
    }
    return this;
  }

  /**
   * 
   * @param x 
   * @param y 
   * @param type 
   * @returns 
   */
  public addCustomWall(x: number, y: number, type: 'horizontal' | 'vertical'): WallBuilder {
    if (type === 'horizontal') {
      this.walls.push(new WallHori(x, y));
    } else if (type === 'vertical') {
      this.walls.push(new WallVert(x, y));
    }
    return this;
  }

  /**
   * 
   * @returns walls
   */
  public build(): (WallVert | WallHori)[] {
    return this.walls;
  }
}
