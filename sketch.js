var Ball, database;
var position;

function setup() {
    database = firebise.database().
    createCanvas(500, 500);
    Ball = createSprite (250,250,10,10);
    Ball.shapeColor = "red"; 
    var BallPosition = database.ref("bola/posicao"); // ref = referencia. Lê o no que sera ligado a posicao da bola
    BallPosition.on("valeu", readPosition, showError); //value = valor. Recebe o valor ligado a posicao 
}

function draw() {
    background("white");
    if (keyDown(LEFT_ARROW)) {
        writePosition(-1, 0);
    } else if (keyDown(RIGHT_ARROW)) {
        writePosition(1, 0);
    } else if (keyDown(UP_ARROW)) {
        writePosition(0, -1);
    } else if (keyDown(DOWN_ARROW)) {
        writePosition(0, +1);
    }
    drawSprites();
}

function writePosition(x, y) {
    database.ref("bola/posicao").set({ //set = troca, mudanca. Vai mudar o valor da posicao X e Y conforme se move
         x: position.x + x, //atualiza a posicao de X
         y:position.y + y, //atualiza a posicao de Y
      });
}

function readPosition(data) {
    position = data.val(); //valor relacionado a posicao no banco de dados
    Ball.x = position.x;
    Ball.y = position.y;
}

function showError() {
   
   
}
