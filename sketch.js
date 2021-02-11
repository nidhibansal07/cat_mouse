var bg;
var cat,catImg2, catImg2, catImg3;
var mouse, mouseImg1, mouseImg2, mouseImg3;
function preload() {
    //load the images here
    bg = loadImage("garden.png");
    catImg1 = loadImage("cat1.png");
     catImg2 = loadAnimation("cat2.png", "cat3.png");
     catImg3 = loadImage ("cat4.png");
     mouseImg1 = loadImage("mouse1.png")
     mouseImg2 = loadAnimation ("mouse2.png", "mouse3.png")
     mouseImg3 = loadImage("mouse4.png");

}

function setup(){
    createCanvas(950,750);
    //create tom and jerry sprites here
    cat = createSprite(825,650);
    cat.addImage("catI", catImg1);
    cat.scale = 0.15;

    mouse = createSprite (175,650);
    mouse.addImage("mouseI", mouseImg1);
    mouse.scale = 0.15;

    
}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width-mouse.width)/2){
        cat.velocityX = 0;
        cat.addImage("catLastImg",catImg3);
        cat.changeImage("catLastImg");
        cat.x = 275;

        mouse.addImage("mouseLastImg",mouseImg3);
        mouse.changeImage("mouseLastImg");
    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode === LEFT_ARROW){
    cat.velocityX = -5;
    cat.addAnimation ("catRunning",catImg2);
    cat.changeAnimation("catRunning");
    mouse.addAnimation("mouseTeasing", mouseImg2);
    mouse.changeAnimation("mouseTeasing");
}

}
