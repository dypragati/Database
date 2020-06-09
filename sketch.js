var ball;
var dataBase;
var position;


function setup(){
    createCanvas(500,500);
    dataBase=firebase.database();
    //read database--on()
    var location = dataBase.ref('ball/position');
    location.on("value", readData)


    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function writePosition(x,y){
    var location2=dataBase.ref('ball/position')
     location2.set({
    x : position.x+x,
    y : position.y+y
     })     
}

function readData(data){
    position=data.val();
    ball.x=position.x;
    ball.y=position.y;
}

