
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const constraint = Matter.constraint;

var stone1,catapult1

function preload()
{

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
stone1=new Stone(200,300,50,50)
catapult1 = new Catapult(stone.body,{x:200,y:300})
boy=new Boy (100,200,50,50)


	Engine.run(engine);
  
}


function draw() {
  
  background(0);
  
  drawSprites();
 stone1.display();
}



