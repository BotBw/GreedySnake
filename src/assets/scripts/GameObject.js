const GLOBAL_OBJECTS = [];

export class GameObject {
  constructor() {
    GLOBAL_OBJECTS.push(this);
    this.timedelta = 0;
    this.started = false;
  }

  start() {

  }


  update() {
  }

  __destroy() {

  }

  destroy() {
    this.__destroy();
    for (let i in GLOBAL_OBJECTS) {
      if(GLOBAL_OBJECTS[i] === this) {
        GLOBAL_OBJECTS.splice(i, 1);
        break;
      }
    }
  }
}

let last_timestamp;

const draw_frame = timestamp => {
  for (let obj of GLOBAL_OBJECTS) {
    if(!obj.started) {
      obj.start();
      obj.started = true;
    } else {
      obj.timedelta = timestamp - last_timestamp
      obj.update();
    }
  }
  last_timestamp = timestamp
  requestAnimationFrame(draw_frame);
}

requestAnimationFrame(draw_frame);