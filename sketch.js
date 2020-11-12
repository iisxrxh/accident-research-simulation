var car, wall;
var speed, weight;


function setup() {

  speed = random(55, 90);
  weight = random(400, 1500);

  createCanvas(800,400);
  car = createSprite(15, 175, 20, 20);
  car.velocityX = speed;
  car.shapeColor = "black";
  wall = createSprite(780, 200, 25, 250);
  wall.shapeColor = "white";

}

function draw() {
  background("grey"); 

  if(wall.x-car.x<wall.width/2+car.width/2){

    car.velocityX = 0;
    

    var deformation = 0.5*weight*speed*speed/25500
    if (deformation>180){
      car.shapeColor = "red";
    }
    if(deformation<180 && deformation>100){
      car.shapeColor = "yellow";
    }  
    if(deformation<100){
      car.shapeColor = "green";
    }
  }
 

  car.depth = wall.depth;
  car.depth = car.depth+1;
  
  drawSprites();
}