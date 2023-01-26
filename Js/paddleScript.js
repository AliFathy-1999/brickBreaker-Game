const canvas = document.getElementById("cvs");
const ctx = canvas.getContext("2d");
const paddleHeight = 10;
const paddleWidth = 100;
const paddle={
    height:paddleHeight,
    width:paddleWidth,
    x:(canvas.width - paddleWidth) / 2,
    y:canvas.height - paddleHeight - 5,
    strokeColor:"#E0015A",
    fillColor:"#77AAE4"
};
let rightPressed=false;
let leftPressed=false;
function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddle.x, paddle.y, paddle.width, paddle.height);
    ctx.fillStyle = paddle.fillColor;
    ctx.strokeStyle=paddle.strokeColor;
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
}


function setPaddle_pos(x)
{
    paddle.x=x;
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
    if (relativeX > 0 && relativeX < canvas.width) {
        paddle.x = relativeX - paddle.width;
    }
}
function Movepaddle() {
    ctx.clearRect(paddle.x, paddle.y, canvas.width, canvas.height);
    drawPaddle();
    if(rightPressed) {
        paddle.x += 10;
        if (paddle.x + paddle.width > canvas.width){
            paddle.x = canvas.width - paddle.width;
        }
    }
    else if(leftPressed) {
        paddle.x -= 10;
        if (paddle.x < 0){
            paddle.x = 0;
        }
    }
}

export{paddle, drawPaddle,Movepaddle, setPaddle_pos} ;