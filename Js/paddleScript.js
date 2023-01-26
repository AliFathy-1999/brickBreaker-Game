const canvas = document.getElementById("cvs");
const ctx = canvas.getContext("2d");
const paddleHeight = 10;
const paddleWidth = 100;
let rightPressed=false;
let leftPressed=false;
let paddleX = (canvas.width - paddleWidth) / 2;
let paddleY = canvas.height - paddleHeight - 5;
function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, paddleY, paddleWidth, paddleHeight);
    ctx.fillStyle = "#77AAE4";
    ctx.strokeStyle="#E0015A";
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
}


function setPaddle_pos(x)
{
    paddleX=x;
}


document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
document.addEventListener("mousemove", leftMouseDown, false);
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
function leftMouseDown(e){ 
    const relativeX = e.clientX - canvas.offsetLeft;
    console.log(relativeX);
    if (relativeX > 0 && relativeX < canvas.width) {
      paddleX = relativeX - paddleWidth;
    }
}
function Movepaddle() {
    ctx.clearRect(paddleX, paddleY, canvas.width, canvas.height);
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

export{paddleHeight, paddleWidth, paddleY, paddleX, drawPaddle,Movepaddle, setPaddle_pos} ;