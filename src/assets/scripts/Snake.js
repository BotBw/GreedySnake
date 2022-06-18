import { Cell } from "./Cell";
import { GameObject } from "./GameObject";


export class Snake extends GameObject {
  constructor(ctx, map) {
    super();
    this.ctx = ctx;
    this.map = map;
    this.cells = [];
    this.init_len = 4;
    this.movement = [
      {di: -1, dj: 0}, // left
      {di: 0, dj: 1}, // down
      {di: 1, dj: 0}, // right
      {di: 0, dj: -1}, // up
    ];
    this.key_map = {
      'w': 3,
      'a': 0,
      's': 1,
      'd': 2
    };
    this.direction = 2;
    this.eps = 1e-1;
    this.speed = 2;
    this.move_cache = [];
  }

  start() {
    let center = 16/2;
    this.cells.push(new Cell(center, center));
    for(let i = center; i >= center - this.init_len + 1; i--) {
      this.cells.push(new Cell(i, center));
    }

    this.ctx.canvas.focus();
    this.ctx.canvas.addEventListener('keydown', evt => {
      evt.preventDefault();
      const key = evt.key;
      let dir = 0;
      dir = this.key_map[key.toLowerCase()];
      console.log(key);
      this.move_cache.push(dir);
      let n = this.move_cache.length - 1;
      if(n >= 1 && this.move_cache[n] == this.move_cache[n-1]) {
        this.move_cache.pop();
      }
      while(this.move_cache.length > 3) {
        this.move_cache.splice(0, 1);
      }
    });

  }

  get_tail_dir() {
    const n = this.cells.length;
    const a = this.cells[n - 1], b = this.cells[n-2];
    const abs_x = Math.abs(a.i - b.i), abs_y = Math.abs(a.j - b.j);
    if(abs_x < this.eps && abs_y < this.eps) {
      return -1;
    } else if (abs_x < this.eps) {
      return a.j < b.j ? 1 : 3;
    } else {
      return a.i < b.i ? 2 : 0;
    }
  }

  get_head_dir() {
    if(this.move_cache.length == 0) return this.direction;
    let ret = this.move_cache[this.move_cache.length - 1];
    this.move_cache = [];
    return ret;
  }

  move() {
    const n = this.cells.length - 1;
    const dir = this.get_tail_dir(this.cells[n], this.cells[n-1]);
    if(dir >= 0) {
      const distance = this.timedelta / 1000 * this.speed;
      this.cells[n].i += distance * this.movement[dir].di;
      this.cells[n].j += distance * this.movement[dir].dj;
      this.cells[0].i += distance * this.movement[this.direction].di;
      this.cells[0].j += distance * this.movement[this.direction].dj;
    } else {
      let new_cells = [];
      const head_i = this.cells[1].i + this.movement[this.direction].di;
      const head_j = this.cells[1].j + this.movement[this.direction].dj;
      new_cells.push(new Cell(head_i, head_j));
      new_cells.push(new Cell(head_i, head_j));
      for(let i = 1; i < n; i++) {
        new_cells.push(this.cells[i]);
      }
      this.cells = new_cells;

      this.direction = this.get_head_dir();
    }
  }

  update() {
    this.move();
    this.draw();
  }

  draw() {
    for(let cell of this.cells) {
      cell.draw(this.ctx, this.map);
    }
  }
}