class Iron {
    constructor(x,y,width,height) {
      var options = {
          restitution:0.12,
          density:1.5,
          friction:0.5,
          isStatic: false
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;

      World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        push();
        translate(pos.x, pos.y);
        rectMode(CENTER);
        fill("red");
        rect(0, 0, this.width, this.height);
        pop();
    }
  };