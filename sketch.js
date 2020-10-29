var car, wall;
var weight, speed;


function setup() {
  createCanvas(800,400);
  speed = random(20, 450);
  weight = random(80, 90);

  car = createSprite(50, 200, 50, 50);
  car.velocityX = speed;
  car.debug = true;

  wall = createSprite(750, 200, 50, 100);
  wall.debug = true;
}

function draw() {
  background(0, 0, 0);
  if(car.x - wall.x < car.width/2 + wall.width/2){
    car.velocityX = 0;
    var deformation = (0.5* weight * speed * speed)/22509;

    if(deformation > 180 ){
      car.shapeColor = color(255, 0, 0);
    }
    if(deformation >= 100 && deformation === 180){
      car.shapeColor =color(200, 7, 90);
    if (deformation < 100){
      car.shapeColor = color(0, 0, 255);
    }
  }
  
  drawSprites();
}