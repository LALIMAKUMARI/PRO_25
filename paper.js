class Paper {
    constructor(x, y, radius) {
      var options = {
        'restitution':0.1,
        'friction':0.1,
        'density':1.5
      }
      this.body = Bodies.circle(x, y, radius/3, options);
      this.radius = radius;

      this.image = loadImage("paper.png");
      
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      
      ellipseMode(RADIUS);
      fill(255,0,255);
      imageMode(CENTER);
      image(this.image,0,0,this.radius,this.radius);
     //ellipse(0,0,this.radius,this.r)
      pop();
    }
  };