var tower,tImage
var door,dImage,dgroup
var climber,cImage,cgroup
var Ghost,GImage
var INBlock,INgroup
var GameState="PLAY"
var Spooky

function preload(){
tImage=loadImage("tower.png")
dImage=loadImage("door.png")
cImage=loadImage("climber.png")
GImage=loadImage("ghost-standing.png")
Spooky=loadSound("spooky.wav")
}

function setup(){
createCanvas(600,600)
Spooky.loop();
  
tower=createSprite(300,300)
tower.addImage(tImage)
tower.velocityY=1
  
Ghost=createSprite(200,200,50,50)  
Ghost.addImage(GImage)
Ghost.scale=0.3
  
dgroup= new Group()  
cgroup= new Group()
INgroup=new Group()

}

function draw(){
background(0)

if(GameState==="PLAY"){
if(tower.y>600){tower.y=300}

if(keyDown("RIGHT_ARROW")){
  Ghost.x=Ghost.x+3
}
if(keyDown("LEFT_ARROW")){
  Ghost.x=Ghost.x-3
}
if(keyDown("SPACE")){
  Ghost.velocityY=-5
}
Ghost.velocityY=Ghost.velocityY+0.8

if(cgroup.isTouching(Ghost)){
Ghost.velocityY=0
  
}

if(INgroup.isTouching(Ghost)|| Ghost.y>600){
Ghost.destroy()
GameState="END"
}
SD();
drawSprites();
}
if(GameState==="END"){
stroke("yellow")
fill("yellow")
textSize(30)
text("Game Over",230,250)
}
}
function SD(){
if(frameCount%240===0){
door=createSprite(200,-50)
door.addImage(dImage)
climber=createSprite(200,10)
climber.addImage(cImage)
INBlock=createSprite(200,15)
INBlock.width=climber.width
INBlock.height=2
door.velocityY=1
door.x=Math.round(random(120,400))
climber.x=door.x
INBlock.x=door.x
INBlock.velocityY=1
climber.velocityY=1
door.lifetime=800
INBlock.debug=true  
climber.lifetime=800
dgroup.add(door)
cgroup.add(climber)
INgroup.add(INBlock)
}
}
