var fundo;
var pinguim;
var telainicial;
var pinguimImg;
var chao, chao2;
var animTiro;
var bala;

function preload(){
   pinguimImg = loadImage("Imgs/a.png")
   fundo = loadImage("Imgs/fundo.jpg")
   
   animTiro = loadAnimation("Imgs/a.png","Imgs/b.png","Imgs/c.png")
   animTiro.looping = false
}

function setup(){
    createCanvas(2088, 1078)
    pinguim = createSprite(200,200,30,30)
    pinguim.addImage(pinguimImg)
    pinguim.addAnimation("tiro",animTiro)

    chao = createSprite(500, 900, 70000, 10)
    chao2 = createSprite(700, 640, 70000, 500)
    chao.visible = false
    chao2.visible = false

    pinguim.scale = 0.5
}

function draw(){
    background(fundo)

    drawSprites()

    if(keyDown("a")){
    pinguim.x = pinguim.x -5
    }

    if(keyDown("d")){
    pinguim.x = pinguim.x +5
    }

   if(keyDown("w")){
   pinguim.y = pinguim.y -5
   }

   if(keyDown("s")){
    pinguim.y = pinguim.y +5
   }

   pinguim.depth = chao2.depth -1
   chao2.depth = pinguim.depth 

   pinguim.depth = chao.depth 
   chao.depth = pinguim.depth +1

   console.log("pinguim", pinguim.depth)
   console.log("chão", chao.depth)

   if(keyCode === 66){
    pinguim.changeAnimation("tiro",animTiro)
    var bala = createSprite(200, pinguim.y, 10, 10);
    bala.velocityX = 7.5
   }
   
}

function keyReleased(){
   
}