var jerry,jerri,jerri2,jerri3;
var tom,tomi,tomi2,tomi3;
var gardeni;
function preload() {
    //load the images here
    
    jerri =loadAnimation("mouse4.png");
    jerri2=  loadAnimation("mouse3.png","mouse2.png");
    jerri3 =loadImage("mouse1.png");
    tomi=loadAnimation("cat1.png");
    tomi2=loadAnimation("cat4.png");
    tomi3=loadAnimation("cat3.png","cat2.png");
    gardeni= loadImage("garden.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
   
jerry=createSprite(100,700,350,80);
jerry.addImage(jerri3);
tom=createSprite(700,700,80,50);
tom.addAnimation("sit",tomi);
jerry.scale=0.2;
tom.scale=0.23;

}

function draw() {

    background(gardeni);
   
    keyPressed();
  
    if(tom.x-jerry.x < (tom.width - jerry.width+165)/2){   
        jerry.addAnimation("present",jerri);
        jerry.changeAnimation("present");
        tom.addAnimation("stop",tomi2);
        tom.changeAnimation("stop");
        tom.velocityX=0;
           
    }
    
    drawSprites();
}
function keyPressed(){

    //For moving and changing animation write code here
    if( keyCode === LEFT_ARROW)
    {
        jerry.addAnimation("mousetease",jerri2);
        jerry.changeAnimation("mousetease");
        jerry.frameDelay=25;
        tom.addAnimation("walk",tomi3);
        tom.changeAnimation("walk");
        tom.velocityX=-2;
    }
  
  
   
  }
  

