var car, wall;
var weight, speed;


function setup() {
  createCanvas(800,400);
  speed = Math.random(20, 40)
  weight = Math.random(80, 90)

  car = createSprite(0, 200, 50, 50);
  car.velocityX = speed ** -1;
  car.debug = true;

  wall = createSprite(800, 200, 20, 100);
  wall.debug = true;
}

function draw() {
  background(255,255,255);
  if(car.x - wall.x < car.width/2 + wall.width/2){
    car.velocityX = 0;
    var deformation = (0.5* weight * speed * speed)/22500

    if(deformation > 180 ){
      car.shapeColor = "red";
    }
    if(deformation === 180){
      car.shapeColor = "amber";
    }
    if (deformation < 180){
      car.shapeColor = "green";
    }
  }
  
  drawSprites();
}



