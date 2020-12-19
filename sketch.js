var car,wall;
var speed, weight;
var wall,thickness;
var bullet,speed,weight;
function setup() {
  createCanvas(1600,400);
  
  speed=random(55,90);
  weight=random(400,1500);
  thickness=random(22,83);

  bulletspeed=random(223,321);
  bulletweight=random(30,52);
  
  car = createSprite(50,200,50,50);
  car.velocityX = speed;
  car.shapeColor = color(225);

  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);
}

function draw() {
  background(0); 
   if(wall.x - car.x < (car.widht + wall.widht)/2){
    car.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed/22509;

    if(deformation > 180){
      car.shapeColor = color(255,0,0);
    }

    if(deformation < 180 && deformation > 100){
      car.shapeColor = color(230,230,0);
    }

    if(deformation < 100){
      car.shapeColor = color(0,255,0);
    }

  }

  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage=0.5 * speed * speed/(thickness *thickness *thickness);

    if(damage>10){
      wall.shapeColor=color(255,0,0);
    }

    if(damage<10){
      wall.shapeColor=color(0,255,0);
    }
  }
  drawSprites();
}

function hasCollided(bullet,wall){
	bulletRightEdge=bullet.x +  bullet.widht;
	wallLeftEdge=wall.x;
	if(bulletRightEdge>=wallLeftEdge){
		return true;
	}
	return false;
}