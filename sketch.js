var paper, box1, box2, box3
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, ground
var box1, box2, box3

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var options = {
		isStatic: false,
		restitution: 0.3,
		friction: 0.5,
		density:1.2
	}

	

	paper = Matter.Bodies.circle(300, 100, 15)
	paper.shapeColor = "white"
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

	paper.display()
}


