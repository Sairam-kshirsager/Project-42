const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;

var umbrella;
var drops = [];

var thunder, thunder1,thunder2,thunder3,thunder4;
var thunderCreatedFrame=0;

function preload(){
 thunder1 = loadImage("thunderbolt/1.png");
 thunder2 = loadImage("thunderbolt/2.png");
 thunder3 = loadImage("thunderbolt/3.png");
 thunder4 = loadImage("thunderbolt/4.png");   
}

function setup(){
createCanvas(500,650); 
engine = Engine.create();
world = engine.world;   
 
umbrella = new Umbrella(100,450);

if(frameCount % 150 === 0){
  for(var i=0;i<100;i++){
     drops.push(new Drops(random(0,500),random(0,500)))
  }  
 }
}

function draw(){
 Engine.update(engine);
 background("black");   

 //creating thunder
 rand = Math.round(random(1,4));
 if(frameCount%80===0){
     thunderCreatedFrame=frameCount;
     thunder = createSprite(random(10,370), random(10,30), 10, 10);
     switch(rand){
         case 1: thunder.addImage(thunder1);
         break;
         case 2: thunder.addImage(thunder2);
         break; 
         case 3: thunder.addImage(thunder3);
         break;
         case 4: thunder.addImage(thunder4);
         break;
         default: break;
     }
     thunder.scale = random(0.3,0.6)
 }

 if(thunderCreatedFrame + 10 ===frameCount && thunder){
     thunder.destroy();
 }
 
 for(var i = 0; i<100; i++){
    drops[i].showDrop();
    drops[i].updateY()
    
}
  umbrella.display();
  drawSprites();
}   

