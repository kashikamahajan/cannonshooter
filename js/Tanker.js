class Tanker {
  constructor(x, y, width, height,) {
      var options = {
      isStatic: true
     }
     this.body=Bodies.rectangle(x,y,width,height);
     this.width=width;
     this.height=height;
     
     this.gSlider;
     this.gSlider = createSlider(0, 250, 0);
this.gSlider.position(40, 395);
this.gSlider.input = map(engine.world.gravity, this.gSlider.min, this.gSlider.max, 0, 1);


     

     this.image = loadImage("tanker.png");
     //World.add(world, this.body);
    };

    display(){
      // Draw the tanker the way you like.
      // You could also use an image if you want a specific look
      
      //var angle = PI*4;
      var angle= this.gSlider.value();
      angle =(this.gSlider.value()/ float(width) - 0.2)  -TWO_PI;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();

    };
}
