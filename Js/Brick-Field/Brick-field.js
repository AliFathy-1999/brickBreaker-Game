import {first_level,second_level, third_level, forth_level, blockDimn, rows, columns} from '../Brick-blocks.js';
import {paddle,drawPaddle, Movepaddle, setPaddle_pos} from '../paddleScript.js';

const canvas = document.getElementById("cvs");
const ctx = canvas.getContext("2d");

const start = document.getElementById("start-play");
const stop = document.getElementById("stop-play");
let intervalID;

const selected_level = document.getElementById("Levels");
let bouncing_time = 20;

const score = document.getElementById("score-value");
const lives_remaining = document.getElementById("lives-remaining");

let score_value = 0;
let lives =3;
const game_over_alert= document.getElementById("Game-over");
const play_again_btn= document.getElementById("play-again");

play_again_btn.addEventListener('click',()=>{
    document.location.reload();
})

class Ball {

    static dx = 2;
    static dy = -2;
    radius = 8
    constructor(xCenter, yCenter, alpha, theta) {
        this.x = xCenter;
        this.y = yCenter;
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
    }

    remove() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
};




function game_over() {
    game_over_alert.style.display="block";
    clearInterval(intervalID);

}


selected_level.addEventListener('change', (event) => {
    let level = event.target.value;
    switch (level) {
        case "intermediate":
            bouncing_time = 20;
            break;

        case "hard":
            bouncing_time = 10;
            break;

        default:
            bouncing_time = 30;
            break;
    }
})


let ball_XCenter = canvas.width / 2;
let ball_YCenter = canvas.height - 27;
const breaking_ball = new Ball(ball_XCenter, ball_YCenter, 0, (2 * Math.PI));
breaking_ball.darw();
first_level();
drawPaddle();



function drawShape(shape) {
    shape.remove();
    first_level();
    shape.darw();
    drawPaddle();
    Movepaddle();
    BreakBlocks();
    
        // Bouncing off the walls 
        // Bouncing off Left & Right
        if (breaking_ball.x + Ball.dx > canvas.width - breaking_ball.radius || breaking_ball.x + Ball.dx < breaking_ball.radius) {
            Ball.dx = -Ball.dx;
        }

        // Bouncing off UP & Down
        if (breaking_ball.y + Ball.dy < breaking_ball.radius) 
        {
            Ball.dy = -Ball.dy;

        } 
        else if (breaking_ball.y + Ball.dy > canvas.height - breaking_ball.radius) {  
            if (breaking_ball.x > paddle.x && breaking_ball.x < paddle.x + paddle.width) {
                if (breaking_ball.y = breaking_ball.y - paddle.height) {
                    Ball.dy = - Ball.dy;
                }
            }else
                {
                    lives--;
                    console.log(lives);
                    lives_remaining.innerText = lives;
                    if (!lives) {
                        game_over();
                    } 
                    else {
                        breaking_ball.x = ball_XCenter;
                        breaking_ball.y = ball_YCenter;
                        Ball.dx = 3;
                        Ball.dy = -3;
                        setPaddle_pos((canvas.width - paddle.width) / 2);
                    }
        }        }
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
    first_level();
    drawPaddle();
})

export{paddle,drawPaddle,Movepaddle} ;




//Breaking test

function BreakBlocks (){

  for(let i = 0; i < rows; i++){
        for(let j = 0; j < columns; j++){
                if(blockDimn[i][j].health === 1 && breaking_ball.x > blockDimn[i][j].x && breaking_ball.x < blockDimn[i][j].x + 80
                    && breaking_ball.y > blockDimn[i][j].y && breaking_ball.y < blockDimn[i][j].y + 25){
                        Ball.dy = -Ball.dy;
                        blockDimn[i][j].health = 0;
                        score_value++;
                        score.textContent =score_value;
                }
        }   
    }
}