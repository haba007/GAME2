var back;
var backimg;

var santa;
var santaimg;

var house;
var houseimg;

var chimney;
var chimneyimg;

var gift,giftimg,cookies,cookiesimg,gameover,gameoverimg,reset,resetimg,snow,snowimg,start,startimg

 var gift,giftimg2
 var gift,giftimg3
 var gift,giftimg4
 var gift,giftimg5
var houseGroup,giftGroup

var invisibleGround;

var cookies1=0
var count=3

var gameState="start"
var fBack1,fbackImg;
var fSanta,fSantaImg;

var hed, hedImg

var instruct, instructImg

var life, lifeImage

var chimneyGroup

function setup() {
  createCanvas(displayWidth,displayHeight);
 back=createSprite(displayWidth/2,displayHeight/2,displayWidth+300,displayHeight)
 back.addImage(backimg)
back.scale=5.5; 
back.velocityX=-5
back.visible=false;

santa=createSprite(displayWidth/2-100,displayHeight/2-250)
santa.addAnimation("santa",santaimg)
santa.scale=2;

//invisibleGround=createSprite(displayWidth/2,displayHeight/2+420,displayWidth,20)
//invisibleGround.visible=true

cookies=createSprite(displayWidth/2+450,displayHeight/2-300)
cookies.addImage(cookiesimg)
cookies.scale=0.5
houseGroup=new Group();
giftGroup=new Group();

fBack1=createSprite(displayWidth/2,displayHeight/2)
fBack1.scale=2.19
cookies.visible=false
santa.visible=false
back.visible=false

fSanta=createSprite(displayWidth/2+430,displayHeight/2+100)

start=createSprite(displayWidth/2-80,displayHeight/2+150)
start.addImage(startimg)

fBack1.addImage(fbackImg)
fSanta.addImage(fSantaImg)

hed=createSprite(displayWidth/2+10, displayHeight/2-200);
hed.addImage(hedImg)

instruct=createSprite(displayWidth/2-80, displayHeight/2-50)
instruct.addImage(instructImg);
instruct.scale=0.7


life=createSprite(displayWidth/2-700, displayHeight/2-300)
life.addImage(lifeImage)
life.scale=2
life.visible=false

reset=createSprite(displayWidth/200, displayHeight/2)
reset.addImage(resetimg)
reset.visible=false

chimneyGroup =  new Group()
}


function preload (){
backimg=loadImage("background.jpg")
santaimg=loadAnimation("1.png","2.png","3.png","4.png")
house1=loadImage("house1.png")
house2=loadImage("house2.png")
house3=loadImage("house3.png")
house4=loadImage("house4.png")

giftimg=loadImage("gift1.png")
giftimg2=loadImage("gift2.png")
giftimg3=loadImage("gift3.png")
giftimg4=loadImage("gift4.png")
giftimg5=loadImage("gift5.png")

cookiesimg=loadImage("cookies.png")

gameoverimg=loadImage("Game over.png")

resetimg=loadImage("reset.png")

snowimg=loadImage("snow.jpeg")

startimg=loadImage("Start.png")

fbackImg=loadImage("FrontImage.jpeg")
fSantaImg=loadImage("santa-2014-removebg-preview (2).png")

hedImg=loadImage("output-onlinetexttools__3_-removebg-preview.png")

instructImg=loadImage("output-onlinetexttools__4_-removebg-preview (1).png")

lifeImage=loadImage("final.png")

chimneyimg=loadImage("Chimney2.png")
}

 
function draw() {

drawSprites();

spawnHouse()
gifts();

 if (gameState==="start"){
  
  giftGroup.setVisibleEach(false)
houseGroup.setVisibleEach(false)

if (mousePressedOver(start)){
gameState="play"

}

 }

if (gameState==="play"){

  textSize(80)
  fill("black");
  text("X", displayWidth/2+520,displayHeight/2-280)
  text("X", displayWidth/2-650,displayHeight/2-270)
  textSize(50)
  text(" "+cookies1,displayWidth/2+580,displayHeight/2-300)
  text(" "+ count,displayWidth/2-580,displayHeight/2-280)


cookies.visible=true
santa.visible=true
back.visible=true
life.visible=true
houseGroup.setVisibleEach(true)
fSanta.visible=false
fBack1.visible=false
hed.visible=false
start.visible=false;
instruct.visible=false


  if (back.x<0){
back.x=back.width/2
  }
if (keyDown(DOWN_ARROW) || keyDown("SPACE")){
giftGroup.setVisibleEach(true)
giftGroup.setVelocityYEach(5)
}
if (giftGroup.isTouching(chimneyGroup)){
giftGroup.destroyEach()
cookies1 += 1

}
if(giftGroup.isTouching(houseGroup)){
 //cookies1=cookies-1;
  count =count-1
}
if(count===0){
  gameState="end"
}
}

if(gameState==="end"){

houseGroup.setVelocityYEach(0)
giftGroup.setVelocityYEach(0)
houseGroup.setLifetimeEach(-1)
chimneyGroup.setLifetimeEach(-1)
reset.visible=true;
reset1();

}
}

function reset1(){

  gameState="start"
  reset.visible=false
 // houseGroup.destroyEach()
//chimneyGroup.destroyEach()
cookies1=0
}

function spawnHouse(){
if (frameCount%250===0) {
house=createSprite(displayWidth,displayHeight/2+200,10,10)
house.scale=1
var ran=Math.round(random(2,3))
switch(ran){

case  2 :house.addImage(house2)
break

case 3 :house.addImage(house4)
break
default:break
}
house.velocityX=-6
house.lifetime=300

chimney=createSprite(displayWidth,displayHeight/2-23,10,10)
chimney.addImage(chimneyimg)
chimney.x=house.x
chimney.velocityX=-6
chimney.scale=0.5
houseGroup.add(house)



chimneyGroup.add(chimney)



}


}

function gifts(){
  gift=createSprite(displayWidth/2-100,displayHeight/2-150)
  var ran=Math.round(random(1,5))
gift.visible=false
  switch(ran){
    case 1 :gift.addImage(giftimg) 
    break
    
    case  2 :gift.addImage(giftimg2)
    break
    
    case 3 :gift.addImage(giftimg3)
    break
    
    case 4 :gift.addImage(giftimg4)
    break

    case 5 :gift.addImage(giftimg5)
    break
    default:break
    }
 
 gift.x=santa.x
 gift.scale=0.5;
giftGroup.add(gift)
  }

 
