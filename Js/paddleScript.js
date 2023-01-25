const canvas = document.getElementById("cvs");
const ctx = canvas.getContext("2d");
const paddleHeight = 4;
const paddleWidth = 30;
let rightPressed=false;
let leftPressed=false;
let paddleX = (canvas.width - paddleWidth) / 2;
function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height - paddleHeight - 5, paddleWidth, paddleHeight);
    ctx.fillStyle = "#77AAE4";
    ctx.strokeStyle="#E0015A";
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
}
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = true;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = false;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = false;
    }
}
function draw() {
    ctx.clearRect(paddleX, canvas.height - paddleHeight - 5, canvas.width, canvas.height);
    drawPaddle();
    if(rightPressed) {
        paddleX += 10;
        if (paddleX + paddleWidth > canvas.width){
            paddleX = canvas.width - paddleWidth;
        }
    }
    else if(leftPressed) {
        paddleX -= 10;
        if (paddleX < 0){
            paddleX = 0;
        }
    }
}

export{paddleWidth, paddleX, paddleHeight ,drawPaddle} ;
