import { Cell } from "./Cell";
import { GameObject } from "./GameObject";


export class Snake extends GameObject {
  constructor(ctx, map) {
    super();
    this.ctx = ctx;
    this.map = map;
    this.cells = [];
    this.init_len = 4;
  }

  start() {
    let center = 16/2;
    for(let i = center; i >= center - this.init_len + 1; i--) {
      this.cells.push(new Cell(i, center))
    }
  }

  update() {
    this.draw();
  }

  draw() {
    for(let cell of this.cells) {
      cell.draw(this.ctx, this.map);
    }
  }
}