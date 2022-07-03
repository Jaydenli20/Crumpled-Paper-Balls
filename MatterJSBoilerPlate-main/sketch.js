
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, leftwall, rightwall
var ball

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	var ball_options = {
		restiution:0.3, 
		density:1.2,
		friction:0,
		isStatic: false
	}

	//Create the Bodies Here.
ground = new Ground(800, 690, 1600, 20)
leftwall = new Ground(1100, 620, 20, 120)
rightwall = new Ground(1400, 620, 20, 120)
ball = Bodies.circle(100, 200, 20, ball_options)
World.add(world, ball)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.show()
  leftwall.show()
  rightwall.show()
  
  ellipseMode(RADIUS)
fill("White")
  ellipse(ball.position.x, ball.position.y, 20, 20)
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
Matter.Body.applyForce(ball, ball.position,{x:95, y:-95})
	}
}

