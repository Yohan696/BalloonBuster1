var bow , arrow,  bckgrnd, score, scene1;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, bckgrndImage;
var redbl, bluebl, greenbl, pinkbl;

function preload(){
  
  bckgrndImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
}

function setup() {
  createCanvas(400, 400);
  
  //creating background
  scene1 = createSprite(0,0,400,400);
  scene1.addImage(bckgrndImage);
  scene1.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
}

function draw() {
 background(0);
 
  // moving ground
    scene1.velocityX = -3 

    if (scene1.x < 0){
      scene1.x = scene1.width/2;
    }
  
  //moving bow
  bow.y = World.mouseY
  var score = 0;
   // release arrow when space key is pressed
  if (keyDown("space")) {
    createArrow();
    
  }
  
  //creating continous balloons
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 60 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    } 
    else if (select_balloon == 2) {
      greenballoon();
    }
    else if (select_balloon == 3) {
      blueBalloon();
    }
    else {
       pinkBalloon();
    }
  }
  drawSprites();
 
  textSize(20);
  text ("Score :  "+ score, 270, 30); 
}


// Creating  arrows for bow
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
}


function redBalloon() {
  var redbl = createSprite(0,Math.round(random(20, 370)), 10, 10);
  redbl.addImage(red_balloonImage);
  redbl.velocityX = 3;
  redbl.lifetime = 150;
  redbl.scale = 0.1;

}

function blueBalloon() {
  //write code for spwaning blue balloons
  var bluebl = createSprite(0,Math.round(random(20, 370)), 10, 10);
  bluebl.addImage(blue_balloonImage);
  bluebl.velocityX = 3;
  bluebl.lifetime = 150;
  bluebl.scale = 0.1;
}

function greenBalloon() {
  //write code for spwaning green balloons
  var greenbl = createSprite(0,Math.round(random(20, 370)), 10, 10);
  greenbl.addImage(green_balloonImage);
  greenbl.velocityX = 3;
  greenbl.lifetime = 150;
  greenbl.scale = 0.1;
}

function pinkBalloon() {
  //write code for spwaning pink balloons
  var pinkbl = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pinkbl.addImage(pink_balloonImage);
  pinkbl.velocityX = 3;
  pinkbl.lifetime = 150;
 // pinkbl.scale = 1;
}
