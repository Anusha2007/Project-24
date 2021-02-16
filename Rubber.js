class Rubber {
  constructor(x,y,radius) {
    var options = {
        restitution:0.5,
        density:0.1,
        friction:0.1,
        isStatic: false
    }
    this.body = Bodies.circle(x,y,(radius-20)/1.1,options);
    this.radius=radius;
    World.add(world, this.body);
  }
  display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      ellipseMode(RADIUS);
      fill("blue");
      ellipse(0,0,this.radius,this.radius);
      pop();
  }
};