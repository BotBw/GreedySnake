
export class Cell {
  constructor(i, j) {
    this.i = i;
    this.j = j;
    this.color = "blue";
  }

  draw(ctx, map) {
    ctx.fillStyle = this.color;
    let x = (this.i + 0.5) * map.pixel, y = (this.j + 0.5) * map.pixel;
    let r = map.pixel/2;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  }
}