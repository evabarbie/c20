var moving,fixed
function setup() {
  createCanvas(800,400);
 moving = createSprite(400, 200, 50, 50);
moving.shapeColor = "red"
fixed = createSprite(100,300,50,50)
fixed.shapeColor = "red"
}

function draw() {
  background(255,255,255);
  moving.x = mouseX
  moving.y =mouseY
  if(fixed.x-moving.x<=moving.width &&
    moving.x-fixed.x<=fixed.width &&
    fixed.y-moving.y<=moving.height &&
    moving.y-fixed.y<=fixed.height){
    moving.shapeColor = "yellow"
    fixed.shapeColor = "yellow"
  }  else{
    moving.shapeColor ="red"
    fixed.shapeColor = "red"
  }
  drawSprites();
}