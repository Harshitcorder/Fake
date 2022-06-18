
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball
var options


function preload()
{

}

function setup() {
	createCanvas(800, 700);
	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball=Bodies.circle(200,100,20,ball_options)
	World.add(world,ball)
	ellipseMode(RADIUS);
	var options={
		isStatic:true
	}
	ground= Bodies.rectangle(0,height-1,width*2,1,options)
	World.add(world,ground)
	Engine.run(engine);
	var ball_options={
		isStatic:false,
		 restitution:0.3,
		 friction:0,
		 dencity:1.2	
	   }
 
	   
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,20)
  rect(ground.position.x,ground.position.y,width*2,1)
  drawSprites();
 
}




