class Drop{
    constructor(x,y){
        var options = {
            friction: 1,
            restitution:1           
        }
        this.radius = 5;
        this.rain = Bodies.circle(x,y,5,options)
       
        World.add(world, this.rain);
    }
  
    DropDisplay(){
       
        ellipseMode(CENTER);
        fill("white")
       
        ellipse(this.rain.position.x,this.rain.position.y,this.radius,this.radius);
    }
        
    updateY(){     
        if(this.rain.position.y > height){

            Matter.Body.setPosition(this.rain, {x:random(0,400), y:random(0,400)})
        }
    }

}