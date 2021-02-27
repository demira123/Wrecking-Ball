const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball1,box1, box2, box3, box4, box5, box6, box7, box8



function setup(){
    var canvas = createCanvas(800,600);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(400,580,800,20);
   box1=new BoxClass(390,550,80,80)
   box2=new BoxClass(390,520,80,80)
   box3=new BoxClass(390,490,80,80)
   box4=new BoxClass(390,460,80,80)
   box5=new BoxClass(490,550,80,80)
   box6=new BoxClass(490,520,80,80)
   box7=new BoxClass(490,490,80,80)
   box8=new BoxClass(490,460,80,80)


ball1= new Ball(200,400)
    
    slingshot = new SlingShot(ball1.body,{x:200, y:50});
}

function draw(){
    background("black");
    Engine.update(engine);
    //strokeWeight(4);
    ball1.display()
    ground.display()

        box1.display()
        
        
        box2.display()
        
        box3.display()
        box4.display()
        box5.display()
        box6.display()
        box7.display()
        box8.display()
    
    slingshot.display();    
}
function mouseDragged(){
    Matter.Body.setPosition(ball1.body,{x:mouseX,y:mouseY})
}
