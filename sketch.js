var fixed, moving;

function setup() {
  createCanvas(1200,800);
  fixed = createSprite(400, 100, 50, 80);
  fixed.shapeColor = "green";
  fixed.debug = true;
  moving = createSprite(400, 800,80,30);
  moving.shapeColor = "green";
  moving.debug = true;

  moving.velocityY = -5;
  fixed.velocityY = +5;
}

function draw() {
  background(0,0,0);  

  bounceOff(fixed,moving);
  drawSprites();
}

