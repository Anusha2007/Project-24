class Hammer{
    constructor(x,y,width,height){
      var options={
          restitution:0.5,
          friction:1,
          density:2,
      }
      this.body= Bodies.rectangle(x,y,width,height);
      this.width=width;
      this.height=height;
      World.add(world, this.body);
    }
    display(){
    this.body.position.x=mouseX;
    this.body.position.y=mouseY;
    var pos =this.body.position;
    push();
    translate(pos.x, pos.y);
    rectMode(CENTER);
    fill("yellow");
    rect(0,0, this.width, this.height);
    pop();
    }
}