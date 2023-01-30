import { first_level, second_level, third_level, forth_level, blockDimn, rows, columns, create_bricks } from '../Brick-blocks.js';
import { paddle, drawPaddle, Movepaddle, setPaddle_pos, keyDownHandler, keyUpHandler } from '../paddleScript.js';

const canvas = document.getElementById("cvs");
const ctx = canvas.getContext("2d");

const start = document.getElementById("start-play");
const pause = document.getElementById("pause-play");
const stop = document.getElementById("stop-play");

const selected_level = document.getElementById("Levels");

const score = document.getElementById("score-value");
const lives_remaining = document.getElementById("lives-remaining");

let score_value = 0;

let current_level = 1;
let hit_bricks = 0;

let lives = 3;
const game_over_alert = document.getElementById("Game-over");
const play_again_btn = document.getElementById("play-again");


let continue_play = false;


class Ball {

    static dx = 2;
    static dy = -2;
    radius = 10
    constructor(xCenter, yCenter, alpha, theta) {
        this.x = xCenter;
        this.y = yCenter;
        this.startAngel = alpha;
        this.endAngel = theta;
    }

    darw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, this.startAngel, this.endAngel);
        ctx.fillStyle = "#F2F2F2";
        ctx.fill();
        ctx.strokeStyle = "#fff"
        ctx.stroke();
        this.x += Ball.dx;
        this.y += Ball.dy;
    }

    remove() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
};


function start_game() {
    continue_play = true;
    document.addEventListener("keydown", keyDownHandler, false);
    document.addEventListener("keyup", keyUpHandler, false);
    play_again_btn.addEventListener('click', () => {
        new_game("continue")
    })

    stop.addEventListener("click", () => {
        new_game("quite");
    })

    selected_level.removeEventListener('change', choose_speed);
    start.removeEventListener("click", start_game);

    start.style.display = "none";
    pause.style.display = "block";
    pause.addEventListener('click',pause_game);

    Background_sound.volume = 0.4;
    Background_sound.play();

    drawShape();

    // requestAnimationFrame(drawShape);
}


function new_game(e, state) {

    start.style.display = "block";
    pause.style.display="none";
    if (state === "quite") {
        continue_play = false;
    }
    else if (state === "continue") {
        continue_play = true;
    }

    hit_bricks = 0;
    score_value = 0;
    score.textContent = score_value;
    lives = 3;
    lives_remaining.innerText = lives;
    game_over_alert.style.display = "none";
    breaking_ball.x = ball_XCenter;
    breaking_ball.y = ball_YCenter;
    setPaddle_pos((canvas.width - paddle.width) / 2);
    selected_level.addEventListener('change', choose_speed);
    start.addEventListener("click", start_game);
    document.addEventListener("keydown", keyDownHandler);
    document.addEventListener("keyup", keyUpHandler);
    create_bricks();
    drawShape();
}


function pause_game() {

    start.style.display = "block";
    pause.style.display="none";
    start.addEventListener("click", start_game);
    stop.addEventListener("click", () => {
        new_game("quite");
    })
    document.removeEventListener("keydown", keyDownHandler);
    document.removeEventListener("keyup", keyUpHandler);
    continue_play = false;
    drawShape();
}


function game_over() {
    continue_play = false;
    game_over_alert.style.display = "block";
    document.removeEventListener("keydown", keyDownHandler);
    document.removeEventListener("keyup", keyUpHandler);
    start.removeEventListener("click", start_game);
    Background_sound.pause();
    GameOver_sound.play();
}


function choose_speed(event) {
    let level = event.target.value;
    switch (level) {
        case "hard":
            Ball.dy = 6;
            Ball.dx = 6;
            break;

        case "intermediate":
            Ball.dy = 4;
            Ball.dx = 4;
            break;

        default:
            Ball.dy = 2;
            Ball.dx = 2;
            break;
    }
}


function upgrade_level() {
    switch (current_level) {
        case 1:
            first_level();
            break;

        case 2:
            second_level();
            break;

        case 3:
            third_level();
            break;

        case 4:
            forth_level();
            break;
    }
}



function drawShape() {
    breaking_ball.remove();
    upgrade_level();
    breaking_ball.darw();
    drawPaddle();
    Movepaddle();
    BreakBlocks();

    /* 
    Bouncing off the walls 
        * Bouncing off Left & Right
    */
    if (breaking_ball.x + Ball.dx > canvas.width - breaking_ball.radius || breaking_ball.x + Ball.dx < breaking_ball.radius) {
        Ball.dx = -Ball.dx;
    }

    // Bouncing off UP & Down
    if (breaking_ball.y + Ball.dy < breaking_ball.radius) {
        Ball.dy = -Ball.dy;

    }
    else if (breaking_ball.y + 10 + Ball.dy > canvas.height - breaking_ball.radius) {
        if (breaking_ball.x > paddle.x && breaking_ball.x < paddle.x + paddle.width) {
            if (breaking_ball.y = breaking_ball.y - paddle.height) {
                Ball.dy = - Ball.dy;
            }
        } else {
            Game_Lose_Live.play();
            lives--;
            lives_remaining.innerText = lives;
            if(lives===1){
                setTimeout(()=>{
                    Background_sound.pause();
                    Game_Lose_Live.pause();
                    Warning_Live.play();
                    Background_sound.play();
                },1000);
            }
            if (!lives) {
                game_over();
                continue_play = false;
            }
            else {
                breaking_ball.x = ball_XCenter;
                breaking_ball.y = ball_YCenter;
                // Ball.dx = 3;
                // Ball.dy = -3;
                setPaddle_pos((canvas.width - paddle.width) / 2);
                // setTimeout(()=>{
                //     clearInterval(intervalID);
                // },10) 

            }
        }
    }
    if (continue_play) {
        requestAnimationFrame(drawShape);
    }

}


//Breaking test

function BreakBlocks() {

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            if (
                breaking_ball.x > blockDimn[i][j].x &&
                breaking_ball.x < blockDimn[i][j].x + 150 &&
                breaking_ball.y > blockDimn[i][j].y &&
                breaking_ball.y < blockDimn[i][j].y + 50
            ) {
                // if(

                //     breaking_ball.x > blockDimn[i][j].x && 
                //     breaking_ball.x < blockDimn[i][j].x + 150 
                // ){

                //     Ball.dx = -Ball.dx;

                // }else{
                //     Ball.dy = -Ball.dy;
                // }   

                if (blockDimn[i][j].health === 2) {
                    Ball.dy = -Ball.dy;
                    blockDimn[i][j].health = 1;
                    score_value++;
                    score.textContent = score_value;
                } else if (blockDimn[i][j].health === 1) {
                    Ball.dy = -Ball.dy;
                    blockDimn[i][j].health = 0;
                    score_value++;
                    score.textContent = score_value;
                    hit_bricks++;
                }
            }

        }

        if (hit_bricks === 55) {
            if (current_level === 1)
                current_level = 2;

            else if (current_level === 2)
                current_level = 3
            hit_bricks = 0;
        }

    }

}

let ball_XCenter = canvas.width / 2;
let ball_YCenter = canvas.height - 40;
const breaking_ball = new Ball(ball_XCenter, ball_YCenter, 0, (2 * Math.PI));

start.addEventListener("click", start_game);
// play_again_btn.addEventListener('click', () => {
//     new_game("continue")
// })

// selected_level.addEventListener('change', choose_speed);

// stop.addEventListener("click", () => {
//     new_game("quite");
// })

breaking_ball.darw();
first_level();
drawPaddle();

export { paddle, drawPaddle, Movepaddle };


// start_game();