// You could have multiple flags like: start, launch to indicate the state of the game.

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.

/*

const {Engine} = Matter 
is the same as c
onst Engine = Matter.Engine

*/
var ground;
var tanker;
var bi;
var shoot_balls


function preload()
{
bg=loadImage("bg.jpg");
}


function setup() {
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
    createCanvas(800,400);
    engine=Engine.create();
    world=engine.world;
    Engine.run(engine);



    
  ground=new Ground(400,390,600,50);
  tanker=new Tanker(100,300,100,100);
  shoot_balls=new ShootBall();
  

}

function draw() {
// Remember to update the Matter Engine and set the background.
background(bg);
Engine.update(engine);


push();
    //stroke("dark blue");
    fill("#00063B");
    
    rectMode(CENTER);
    rect(100,390,100,80);
    pop();
ground.display();
tanker.display();
shoot_balls.display();

}


function keyReleased() {
    // Call the shoot method for the cannon.
    
}