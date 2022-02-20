var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg,coinImg,bombImg,energyDrinkImg,powerImg;
var coin,bomb,energyDrink,power;
var i;
var puntu=0;

function preload(){
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  coinImg = loadImage("coin.png");
  bombImg = loadImage("bomb.png");
  energyDrinkImg = loadImage("energyDrink.png");
  powerImg = loadImage("power.png");

}

function setup(){
  
  createCanvas(400,400);
  


// Mover el fondo
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;
path.scale=1.3;


//crear sprite de niño corriendo
boy = createSprite(180,340,30,30);
boy.scale=0.08;
boy.addAnimation("JakeRunning",boyImg);



leftBoundary=createSprite(0,0,100,800);

leftBoundary.visible = false;



rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible = false;
}

function draw() {
  background(0);

  puntu=World.seconds;

  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);
  

  if(path.y > 400 ){
    path.y = height/50;
  }

  
  drawSprites();

  textSize(20);

fill("red");

text("Puntuacion: "+puntu, 40, 25);
}
