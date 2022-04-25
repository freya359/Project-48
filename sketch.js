
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine;
var world;

var girl,girlImg, butterflies, butterfliesImg, butterflyImg;

function preload(){
	girlImg = loadImage("girlg.png")
	butterfliesImg = loadImage("3Butterflies1.png")
	butterflyImg = loadAnimation("oneButterfly.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	girl=createSprite(500,600,50,70);
	girl.addImage("girl",girlImg);
	
	girl.scale=0.2

	butterflies=createSprite(500,250,50,70)
    butterflies.addImage("3Butterflies", butterfliesImg)
	
	butterflies.scale=0.2
	butterflies.velocityX=-5
	butterflies.addAnimation("1Butterfly", butterflyImg)

	Engine.run(engine);
	
 butterflies.depth=girl.depth
 girl.depth=girl.depth+1
}


function draw() {
background(78,153,0)
  rectMode(CENTER);
  
  if(keyDown("UP_ARROW")){
	girl.y = girl.y-30
  }
  if(keyDown("DOWN_ARROW")){
   girl.y = girl.y+30
  }
  if(keyDown("RIGHT_ARROW")){
	girl.x = girl.x+30
  }
  if(keyDown("LEFT_ARROW")){
	girl.x = girl.x-30
  }

if (girl.isTouching(butterflies)){
butterflies.changeAnimation("1Butterfly", butterflyImg)
butterflies.velocityX=0
textSize(150)
fill("red")
text("Well done!", 25, 200)
}

if (butterflies.x < 0){
butterflies.x=700
}

  drawSprites();
}







