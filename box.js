class Box {
  constructor(x, y, width, height) {
    var options = {
      'restitution':0.8,
      'isStatic': true
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.image = loadImage("dustbingreen.png")
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    //rectMode(CENTER);
    fill(0,255,0)
    //imageMode(CENTER);
    image(this.image,0, 0, 130, 90);
    pop();
  }
};
