const canvas = document.getElementById("cvs");
const ctx = canvas.getContext("2d");
const paddleHeight = 15;
const paddleWidth = 150;
const paddle={
    height: paddleHeight,
    width: paddleWidth,
    x: (canvas.width - paddleWidth) / 2,
    y: canvas.height - paddleHeight - 10,
    fillColor:"#512007",
    strokeColor: "#000000"
};
let rightPressed=false;
let leftPressed=false;
let mouseStatus = false;
function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddle.x, paddle.y, paddle.width, paddle.height);
    ctx.fillStyle = paddle.fillColor;
    ctx.strokeStyle= paddle.strokeColor;
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
    if(e.keyCode == 37){
        leftPressed = true;
    }else if(e.keyCode == 39){
        rightPressed = true;
    }
    else
    {
        e.preventDefault(); 
    }
}

function keyUpHandler(e) {
    if(e.keyCode == 37){
        leftPressed = false;
    }else if(e.keyCode == 39){
        rightPressed = false;
    }
}

function leftMouseDown(e){ 
    setPaddle_pos(e.clientX - 75);
}

function Movepaddle() {
    //ctx.clearRect(paddle.x, paddle.y, canvas.width, canvas.height);
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