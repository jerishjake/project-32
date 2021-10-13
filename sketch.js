const Engine = Matter.Engine;
 const Render = Matter.Render; 
 const World = Matter.World;
  const Bodies = Matter.Bodies;
 const Constraint = Matter.Constraint;
 const Body = Matter.Body;
 const Composites = Matter.Composites;
  const Composite = Matter.Composite;

var button;
var ball;


function setup() {
  createCanvas(800,400);
  engine = Engine.create();
 world = engine.world

button = createButton("Click to Blow");
button.position(width/2, height - 100);
button.class("blowButton");
button.mousePressed(blow);


var ball_options ={
  restitution: 0.08,

}

ball = Matter.Bodies.circle(width/2 +80,height/2 -80,50,ball_options);
  World.add(world,ball);

  blower = new Blower(width/2 - 50,height/2 +50,150,20);
  blowerMouth = new BlowerMouth(width/2 +70,height/2 +20,100,90)

ellipseMode(RADIUS);

}

function draw() {
  background(255,255,255);  
 Engine.update(engine)
 ellipse(ball.position.x,ball.position.y,50,50);
 blower.show();
 blowerMouth.show();
}



function blow(){
    Matter.Body.applyForce(ball,{x : 0, y : 0},{x : 0, y : 0.09});
}