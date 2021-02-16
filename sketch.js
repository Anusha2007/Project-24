const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}
var hammer;
function setup() {
	createCanvas(1000, 600);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	hammer = new Hammer(200,300,70,20);
	ground = new Ground(500,580,1000,20);
	stone = new Stone(400,560,50,50);
	rubber = new Rubber(100,100,50);
	iron = new Iron(200,560,60,40);
	sand1 = new Sand(100,560,7);
	sand2 = new Sand(200,560,7);
	sand3 = new Sand(300,560,7);
	sand4 = new Sand(400,560,7);
	sand5 = new Sand(500,560,7);
	sand6 = new Sand(550,560,7);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background("lightblue");
  
  hammer.display();
  ground.display();
  stone.display();
  rubber.display();
  iron.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
}



