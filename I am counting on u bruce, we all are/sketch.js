const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var drops = [];
var rand;
var thunderCreatedFrame=0;
var maxDrops=100;
var thunder, thunder1,thunder2,thunder3,thunder4;



function preload(){
    thunder1 = loadImage("thunderbolt/1.png");
    thunder2 = loadImage("thunderbolt/2.png");
    thunder3 = loadImage("thunderbolt/3.png");
    thunder4 = loadImage("thunderbolt/4.png");
}

function setup(){
    engine = Engine.create();
    world = engine.world;


    createCanvas(400,800);
    umbrella = new Umbrella(200,500);




    if(frameCount %100===0) { for(var i=0; i<maxDrops; i++) { drops.push(new Drop(random(0,400), random(0,50))); } }
    
}





function draw(){
    Engine.update(engine);
    background("black"); 

    
    rand = Math.round(random(1,4));
    if(frameCount%80===0){
        thunderCreatedFrame=frameCount;
        thunder = createSprite(random(10,400), random(10,50), 5, 5);
        switch(rand){
            case 1: thunder.addImage(thunder1);
            break;
            case 2: thunder.addImage(thunder2);
            break; 
            case 3: thunder.addImage(thunder3);
            break;
            case 4: thunder.addImage(thunder4);
            break;
            
        }
       
    }

    if(thunderCreatedFrame + 10 ===frameCount && thunder){
        thunder.destroy();
    }

    umbrella.display();


    for(var i = 0; i<maxDrops; i++){
        drops[i].updateY()
        drops[i].DropDisplay();
       
        
    }

    drawSprites();
}   

