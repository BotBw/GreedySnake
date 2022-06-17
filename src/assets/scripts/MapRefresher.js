import { GameObject } from "./GameObject";

export class MapRefresher extends GameObject {
  constructor(ctx, parent) {
    super();
    this.ctx = ctx;
    this.parent = parent;
    this.pixel = 0;
  }

  start() {

  }

  update_size() {
    this.pixel = Math.min(this.parent.clientWidth/17, this.parent.clientHeight/15);
    this.clientHeight = this.pixel*17;
    this.clientWidth = this.pixel*15;
  }

  update() {
    // console.log(this.constructor.name + " update");
    this.update_size();
  }
}