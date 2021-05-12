var boy1, boy2;
var skyImg, sky;
var plane1Img, plane2Img;
var box = Math.random(1,8)
var box2 = Math.random(1,6)
var a =0

function preload(){
  skyImg = loadImage("sky_2.jpg")
  plane1Img = loadImage("plane_1.png")
  plane2Img = loadImage("plane_2.png")
  boy1Img = loadImage("boy_1.png")
  boy2Img = loadImage("boy_2.png")
  crashImg = loadImage("crash.png")


}


function setup(){
  canvas = createCanvas(1500,800)
  boy1 = createSprite(1400,700,50,100)
  boy2 = createSprite(100,700,50,100)
  boy1.addImage(boy1Img)
  boy1.scale = 0.3
  boy2.addImage(boy2Img)
  boy2.scale = 0.5
  plane1 = createSprite(1200,Math.round(random(400,550)),80,30)
  plane1.addImage(plane1Img)
  plane1.scale = 0.2
  plane2 = createSprite(300,Math.round(random(200,450)),80,30)
  plane2.addImage(plane2Img)
  plane2.scale = 0.5
  leftWall = createSprite(0,400,10,800)
  leftWall.shapeColor="black"
  rightWall = createSprite(1500,400,10,800)
  rightWall.shapeColor="red"

  
}

function draw(){
  background(skyImg)
  if(keyIsDown(LEFT_ARROW)){
  plane1.velocityX = -(Math.round(random(8,10)))
  
 }
 if(keyIsDown(RIGHT_ARROW)){
  plane2.velocityX = Math.round(random(7,10))

 }
if(plane2.isTouching(rightWall)){
  plane2.velocityX = 0
plane1.velocityX = 0
a = 1
}
if(plane1.isTouching(leftWall)){
  plane2.velocityX = 0
plane1.velocityX = 0
a = 2
}

  


  drawSprites()
  if(a===1){
    textSize(30)
    fill("black")
    text("I won", 100, 500)
  }
  if(a===2){
    textSize(30)
    fill("black")
    text("I won",1400 ,500)
  }
  if(plane1.isTouching(plane2)){
    plane1.velocityX = 0 
    plane2.velocityX = 0 
    image(crashImg,plane2.x+20,plane1.y-100,200,200)
    textSize(30)
    fill("black")
    text("Crashed",plane2.x+20,plane1.y-100)
    
  }
}

