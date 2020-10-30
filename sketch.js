var box1
var box2

function setup() {
  createCanvas(800, 600);
  box1 = createSprite(400, 200, 50, 50);
  box2 = createSprite(400, 380, 50, 50);
  box2.shapeColor = "blue"
  box1.velocityY=2
  box2.velocityY=-2
}

function draw() {
  background(0);
  drawSprites();
  
  if(bouncing(box1,box2)){
    box2.shapeColor = "red"
    box1.shapeColor = "red"
    box2.velocityY=box2.velocityY*(-1)
    box1.velocityY=box1.velocityY*(-1)
  }
  else{
    box2.shapeColor = "blue"
        box1.shapeColor = "gray"
  }

 
}