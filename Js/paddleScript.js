const canvas = document.getElementById("cvs");
const ctx = canvas.getContext("2d");
const paddleHeight = 10;
const paddleWidth = 100;
const paddle={
    height: paddleHeight,
    width: paddleWidth,
    x: (canvas.width - paddleWidth) / 2,
    y: canvas.height - paddleHeight - 5,
    strokeColor:"#E0015A",
    fillColor:"#77AAE4"
};
let rightPressed=false;
let leftPressed=false;
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
   console.log("test");
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