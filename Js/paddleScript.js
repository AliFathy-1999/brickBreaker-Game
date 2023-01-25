const canvas = document.getElementById("cvs");
const ctx = canvas.getContext("2d");

const paddleHeight = 10;
const paddleWidth = 80;
let paddleX = (canvas.width - paddleWidth) / 2;

function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}


// drawPaddle();

export{paddleWidth, paddleX, paddleHeight ,drawPaddle} ;