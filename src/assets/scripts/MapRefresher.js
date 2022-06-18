import { GameObject } from "./GameObject";
import { Snake } from "./Snake";

export class MapRefresher extends GameObject {
  constructor(ctx, parent) {
    super();
    this.ctx = ctx;
    this.parent = parent;
    this.pixel = 0;
    this.snake = new Snake(this.ctx, this);
    this.color_a = "#AAD751";
    this.color_b = "#A2D149"
  }

  start() {
   
  }

  update_size() {
    this.pixel = Math.min(this.parent.clientWidth/17, this.parent.clientHeight/15);
    this.ctx.canvas.width = this.pixel*16;
    this.ctx.canvas.height = this.pixel*16;
  }

  update_grid() {
    for(let i = 0; i < 16; i++) {
      for(let j = 0; j < 16; j++) {
        if((i + j) % 2 == 0) {
          this.ctx.fillStyle = this.color_a;
        } else {
          this.ctx.fillStyle = this.color_b;
        }
        this.ctx.fillRect(this.pixel * i, this.pixel*j, this.pixel, this.pixel);
      }
    }
  }

  update() {
    // console.log(this.constructor.name + " update");
    this.update_size();
    this.update_grid();
    this.snake.update();
  }
}