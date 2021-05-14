

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var engine, world;

var paper1;
var ground;
var dustbin1, dustbin2, dustbin3;

function preload(){

}

	


function setup() {
	createCanvas(1200, 400);
	engine = Engine.create();
	world = engine.world;

	paper1 = new Paper(100, 390, 40);
	ground = new Ground(600, height, 1200, 20);
	dustbin1 = new Dustbin(1025, 390, 150,5);
	dustbin2 = new Dustbin(1100,380, 5, 200);
	dustbin3 = new Dustbin(950, 380, 5, 200);


	
  
}


function draw() {
  background("grey");
  rectMode(CENTER);
  Engine.update(engine);

  paper1.display();
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper1.body, paper1.body.position,{x:85,y:-85});
	}
}

