var Ron,bulldozer1,enmy1,bullet,bulletGroup;

function setup() {
  createCanvas(displayWidth,600);
  // The playing character(PC)
  Ron = createSprite(25, 200, 20, 30);
  

  // First set of bulldozer and enemies
  bulldozer1 =createSprite(300, 70, 100, 50);
  bulldozer2 =createSprite(300, 190, 100, 50);
  bulldozer3 =createSprite(300, 310, 100, 50);
  bulldozer4 =createSprite(300, 430, 100, 50);
  enmy1 = createSprite(300,120,20,30);
  enmy2 = createSprite(300,240,20,30);
  enmy3 = createSprite(300,360,20,30);
  enmy4 = createSprite(300,480,20,30);

  bulletGroup=new Group();
}

function draw() {
  background(0);  
  if(keyDown(UP_ARROW) || keyDown("w")){
    Ron.y -= 3;
  };
  if(keyDown(DOWN_ARROW) || keyDown("s")){
    Ron.y += 3;
  };
  if(keyDown(RIGHT_ARROW) || keyDown("d")){
    Ron.x += 3;
  };
  if(keyDown(LEFT_ARROW) || keyDown("a")){
    Ron.x -= 3;
  };
  
  //creating bullets
  
if(bulletGroup.isTouching(bulldozer1)){
  bulldozer1.destroy();
  bulletGroup.destroyEach();
}
if(bulletGroup.isTouching(bulldozer2)){
  bulldozer2.destroy();
  bulletGroup.destroyEach();
}
if(bulletGroup.isTouching(bulldozer3)){
  bulldozer3.destroy();
  bulletGroup.destroyEach();
}
if(bulletGroup.isTouching(bulldozer4)){
  bulldozer4.destroy();
  bulletGroup.destroyEach();
}
if(bulletGroup.isTouching(enmy1)){
  enmy1.destroy();
  bulletGroup.destroyEach();
}
if(bulletGroup.isTouching(enmy2)){
  enmy2.destroy();
  bulletGroup.destroyEach();
}
if(bulletGroup.isTouching(enmy3)){
  enmy3.destroy();
  bulletGroup.destroyEach();
}
if(bulletGroup.isTouching(enmy4)){
  enmy4.destroy();
  bulletGroup.destroyEach();
}

  shootBullets(); 
  drawSprites();
}

function shootBullets(){
   if(keyDown("space")){
    bullet=createSprite(10,10,20,10);
    bullet.x=Ron.x;
    bullet.y=Ron.y;
    bullet.velocityX=5;

    bulletGroup.add(bullet);
   }
}