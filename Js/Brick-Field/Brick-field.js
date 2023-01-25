import {second_level} from '../Brick-blocks.js';
import {paddleWidth, paddleX, drawPaddle, draw} from '../paddleScript.js';

const canvas = document.getElementById("cvs");
const ctx = canvas.getContext("2d");

const start = document.getElementById("start-play");
const stop = document.getElementById("stop-play");
let intervalID;

const selected_level = document.getElementById("Levels");
let bouncing_time = 40;

const score = document.getElementById("score-value");
const lives_remaining = document.getElementById("lives-remaining");

let score_value = 0;
let lives =3;


class Ball {

    static dx = 2;
    static dy = -2;

    constructor(xCenter, yCenter, r, alpha, theta) {
        this.x = xCenter;
        this.y = yCenter;
        this.radius = r;
        this.startAngel = alpha;
        this.endAngel = theta;
    }

    darw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, this.startAngel, this.endAngel);
        ctx.fillStyle = "#77AAE4";
        ctx.strokeStyle = "#77AAE4";
        ctx.fill();
        ctx.stroke();
        this.x += Ball.dx;
        this.y += Ball.dy;

        // Bouncing off the walls 
        // Bouncing off Left & Right
        if (this.x + Ball.dx > canvas.width - this.radius || this.x + Ball.dx < this.radius) {
            Ball.dx = -Ball.dx;
        }

        // Bouncing off UP & Down
        if (this.y + Ball.dy < this.radius) 
        {
            Ball.dy = -Ball.dy;

        } 

        else if (this.y + Ball.dy > canvas.height-this.radius)
        {
            if(this.x > paddleX && this.x < paddleX + paddleWidth )
            {
                Ball.dy = -Ball.dy;
            }
            else{
                lives--;
                lives_remaining.innerText = lives;
                console.log(lives);
                if(!lives)
                {
                    game_over();
                }
            }
        }
    }

    remove() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

};


function game_over() {
    alert("GAME OVER");
    document.location.reload();
    clearInterval(intervalID);
}

selected_level.addEventListener('change', (event) => {
    let level = event.target.value;
    switch (level) {
        case "intermediate":
            bouncing_time = 300;
            break;

        case "hard":
            bouncing_time = 50;
            break;

        default:
            bouncing_time = 500;
            break;
    }
})


let ball_XCenter = canvas.width / 2;
let ball_YCenter = canvas.height - 12;
const breaking_ball = new Ball(ball_XCenter, ball_YCenter, 2, 0, (2 * Math.PI));
breaking_ball.darw();
second_level();
draw();



function drawShape(shape) {
    shape.remove();
    shape.darw();
    second_level();
    draw();
}


start.addEventListener("click", () => {
    intervalID = setInterval(() => {
        drawShape(breaking_ball);
    }, bouncing_time);

})

stop.addEventListener("click", () => {
    clearInterval(intervalID);
    breaking_ball.remove();
    breaking_ball.x = ball_XCenter;
    breaking_ball.y = ball_YCenter;
    breaking_ball.darw();
    draw();
    second_level();
})

