import PlayerGrootPijl from '../Players/PlayerPijl.js';
import WallVert from '../Walls/WallVert.js';
import WallHori from '../Walls/WallHori.js';

export default class CollisionManager {
  private player: PlayerGrootPijl;

  private walls: (WallVert | WallHori)[];

  public constructor(player: PlayerGrootPijl, walls: (WallVert | WallHori)[]) {
    this.player = player;
    this.walls = walls;
  }

  /**
   * 
   * @param lastDirection  a
   * @returns void
   */
  public checkCollisions(lastDirection: number):
  { moveUp: boolean; moveDown: boolean; moveLeft: boolean; moveRight: boolean } {
    let moveUp:boolean = true;
    let moveDown:boolean = true;
    let moveLeft:boolean = true;
    let moveRight:boolean = true;

    this.walls.forEach((wall) => {
      if (this.player.isCollidingWall(wall)) {
        switch (lastDirection) {
          case 1:
            moveUp = false;
            break;
          case 2:
            moveDown = false;
            break;
          case 3:
            moveLeft = false;
            break;
          case 4:
            moveRight = false;
            break;
          default:
            break;
        }
      }
    });

    return {
      moveUp, moveDown, moveLeft, moveRight,
    };
  }
}
