
var cat1
var cat2
var mouseOne
var mouseTwo
var BackIm
var tom 
var jerry
var backgroundIm

function preload() {
    BackIm = loadImage("garden.png");
    cat1 = loadAnimation("cat1.png");
    cat2 = loadAnimation("cat2.png", "cat3.png");
    cat3 = loadAnimation("cat4.png");

    mouseOne = loadAnimation("mouse1.png");
    mouseTwo = loadAnimation("mouse2.png", "mouse3.png");
    mouseThree = loadAnimation("mouse4.png");
}

function setup(){
    createCanvas(1000,800);

    backgroundIm = createSprite(200, 200, 20, 20);
    backgroundIm.addImage("back", BackIm)

    tom = createSprite(550, 450, 20, 20);
    jerry = createSprite(50, 450, 20, 20);

    tom.addAnimation("standing", cat1);
    tom.addAnimation("walking", cat2);
    tom.addAnimation("collide", cat3)
    tom.scale = 0.15;
    tom.setCollider("rectangle", 0, 0, 1000, 500)
    tom.debug = true

    jerry.addAnimation("standing", mouseOne);
    jerry.addAnimation("walking", mouseTwo);
    jerry.addAnimation("collide", mouseThree);
    jerry.scale=0.15;
    jerry.setCollider("rectangle", 0, 0, 300, 300)
    jerry.debug = true;

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    if(!jerry.isTouching(tom)){
    keyPressed();
    }else{
        tom.velocityX = 0;
        tom.changeAnimation("collide");
        jerry.changeAnimation("collide");
    }

    drawSprites();
}


function keyPressed(){
    if(keyWentDown("left")){
        jerry.changeAnimation("walking")
        jerry.frameDelay = 20;

        tom.changeAnimation("walking")
        tom.velocityX = -2;
    }


}
